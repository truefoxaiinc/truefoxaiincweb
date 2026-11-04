import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const allowedRoots = ["app", "components", "data", "docs", "lib", "scripts", "config"];
const excludedDirs = new Set(["node_modules", ".next", ".git", ".pytest_cache", ".venv", "venv", "dist", "build", "coverage", "__pycache__"]);
const contentExtensions = new Set([".tsx", ".ts", ".js", ".mjs", ".md", ".txt"]);
const banned = [/guaranteed ranking/i, /100% lag free/i, /best company in canada/i];
let checked = 0;
let failed = false;

function scan(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (excludedDirs.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scan(fullPath);
    } else if (entry.isFile() && contentExtensions.has(path.extname(entry.name))) {
      const content = fs.readFileSync(fullPath, "utf8");
      checked++;
      for (const pattern of banned) {
        if (pattern.test(content)) {
          console.error(`Content audit: ${pattern} found in ${path.relative(root, fullPath)}`);
          failed = true;
        }
      }
    }
  }
}

for (const folder of allowedRoots) {
  const fullPath = path.join(root, folder);
  if (fs.existsSync(fullPath)) scan(fullPath);
}
if (checked === 0) {
  console.error("Content audit: No source files scanned; check project path.");
  process.exit(1);
}
if (failed) process.exit(1);
console.log(`Content audit passed (${checked} source files).`);
