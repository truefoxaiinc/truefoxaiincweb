import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const files = [];
function walk(dir) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory() && !["node_modules", ".next"].includes(item.name)) walk(full);
    else if (item.isFile() && /\.(tsx?|md|txt)$/.test(item.name)) files.push(full);
  }
}
walk(root);
const banned = [/guaranteed ranking/i, /100% lag free/i, /best company in canada/i];
let failed = false;
for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  for (const pattern of banned) {
    if (pattern.test(text)) {
      console.error(`Content audit: ${pattern} found in ${path.relative(root, file)}`);
      failed = true;
    }
  }
}
if (failed) process.exit(1);
console.log(`Content audit passed (${files.length} files).`);
