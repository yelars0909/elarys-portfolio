// Asset downloader for https://studiodpi.work/ clone (site studiodpi-work-708a7940, page root-8a5edab2).
// Reads scripts/assets-manifest.json ([{url, dest}]) and downloads missing files with bounded concurrency.
// Safe to re-run: existing non-empty files are skipped.
import { readFileSync, existsSync, statSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(readFileSync(join(root, 'scripts/assets-manifest.json'), 'utf8'));

const CONCURRENCY = 8;
let done = 0;
let failed = 0;
const failures = [];

async function download({ url, dest }) {
  if (existsSync(dest) && statSync(dest).size > 0) {
    done++;
    return;
  }
  mkdirSync(dirname(dest), { recursive: true });
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      writeFileSync(dest, buf);
      done++;
      if (done % 25 === 0) console.log(`progress: ${done}/${manifest.length}`);
      return;
    } catch (err) {
      if (attempt === 2) {
        failed++;
        failures.push({ url, dest, error: String(err) });
      } else {
        await new Promise((r) => setTimeout(r, 1000 * (attempt + 1)));
      }
    }
  }
}

const queue = [...manifest];
const workers = Array.from({ length: CONCURRENCY }, async () => {
  while (queue.length) {
    const task = queue.shift();
    if (task) await download(task);
  }
});
await Promise.all(workers);
console.log(`done: ${done}/${manifest.length}, failed: ${failed}`);
if (failures.length) console.log(JSON.stringify(failures, null, 2));
