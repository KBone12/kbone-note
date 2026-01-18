import fs from "node:fs/promises";
import path from "node:path";

import { mathjax } from "@mathjax/src/js/mathjax.js";
import { liteAdaptor } from "@mathjax/src/js/adaptors/liteAdaptor.js";
import { RegisterHTMLHandler } from "@mathjax/src/js/handlers/html.js";
import { TeX } from "@mathjax/src/js/input/tex.js";
import { CHTML } from "@mathjax/src/js/output/chtml.js";
import "@mathjax/src/js/input/tex/ams/AmsConfiguration.js";

async function renderMathJax(filePath, tex, chtml, adaptor) {
  const original = await fs.readFile(filePath, "utf-8");

  const mathjaxDoc = mathjax.document(original, {
    InputJax: tex,
    OutputJax: chtml,
  });
  await mathjaxDoc.renderPromise();

  const style = adaptor.node("style");
  adaptor.append(style, adaptor.text(adaptor.cssText(chtml.styleSheet(mathjaxDoc))));
  adaptor.append(adaptor.head(mathjaxDoc.document), style);

  await fs.writeFile(filePath, adaptor.doctype(mathjaxDoc.document) + "\n" + adaptor.outerHTML(adaptor.root(mathjaxDoc.document)), "utf-8");
}

async function main() {
  const adaptor = liteAdaptor();
  RegisterHTMLHandler(adaptor);

  const tex = new TeX({
    packages: { "[+]": ["ams"] },
    tags: "ams",
    displayMath: [["\\[", "\\]"]],
    inlineMath: [["\\(", "\\)"]],
  });
  const chtml = new CHTML({
    fontURL: "/vendor/mathjax-newcm-font/chtml/woff2",
  });

  const PUBLIC_DIR = path.resolve(process.cwd(), "public");
  for await (const rel of fs.glob("**/*.html", { cwd: PUBLIC_DIR })) {
    const abs = path.join(PUBLIC_DIR, rel);
    await renderMathJax(abs, tex, chtml, adaptor);
  }
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
