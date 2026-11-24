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

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, JOKE + "\n", "utf8");

console.log(`Wrote ${JOKE.length} characters to ${outFile}`);
console.log(JOKE);
