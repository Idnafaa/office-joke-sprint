// One-Line Office Joke: 24-Hour Sprint
// Writes a single original office joke (one line, under 200 characters)
// to /output/entry.txt, where the sealed scorer reads it.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The joke: a daily standup that is scheduled for fifteen minutes,
// runs three times that long, and still ends with the classic escape
// hatch of office life — taking it offline.
const JOKE =
  "Daily standup: fifteen minutes scheduled, forty-five minutes long, and it always ends with 'let's take this offline.'";

// The sealed scorer's gate, checked here before writing so a bad line
// can never reach /output/entry.txt: UTF-8 text, 1 to 200 characters,
// a single line, and more than whitespace.
function gateOk(text: string): boolean {
  if (text.length < 1 || text.length > 200) return false;
  if (text.trim().length === 0) return false;
  if (text.includes("\n") || text.includes("\r")) return false;
  return true;
}

if (!gateOk(JOKE)) {
  console.error(`Joke fails the gate: ${JOKE.length} characters`);
  process.exit(1);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, JOKE + "\n", "utf8");

console.log(`Wrote ${JOKE.length} characters to ${outFile}`);
console.log(JOKE);
