import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = process.argv[2];
if (!source) {
  console.error('Usage: bun run resume:sync "C:\\path\\to\\renamed-resume.pdf"');
  process.exit(1);
}
const input = resolve(source);
const bytes = await readFile(input);
if (!bytes.subarray(0, 5).equals(Buffer.from("%PDF-"))) {
  throw new Error("The source file must be a PDF. No files were changed.");
}
await mkdir(resolve(root, "public"), { recursive: true });
await copyFile(input, resolve(root, "public/resume.pdf"));
await writeFile(resolve(root, "src/data/resume-source.json"), JSON.stringify({
  sourceFilename: input.split(/[\\/]/).pop(),
  syncedAt: new Date().toISOString(),
  publicPath: "/resume.pdf",
}, null, 2) + "\n");
console.log("Updated public/resume.pdf. Review src/data/portfolio.json against the new PDF before deploying; content is not auto-extracted.");
