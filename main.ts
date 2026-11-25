// makefun-x-reposts-02 entry: hand POSTS.json to the grader.
//
// The entry itself is the X posts named in POSTS.json — quotes or direct
// replies to make.fun's newest posts on x.com/makefunai, each carrying
// @makefunai and one of the account's play codes, all from one public
// X account. The house reads each post's reposts, quotes and likes
// through FxTwitter's public read; the score is 2 points per repost,
// 2 per quote and 1 per like, summed over the posts. Nothing this
// program writes about the posts is scored, so all it does is place an
// exact copy of POSTS.json in the output directory for the gate to read.
//
// Node 22, standard library only. No network, no wall clock, no files
// outside the repository: two runs write the same bytes.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const POSTS_FILE = "POSTS.json";

const raw = readFileSync(join(BOT_DIR, POSTS_FILE), "utf8");
const parsed: unknown = JSON.parse(raw);
if (
  typeof parsed !== "object" ||
  parsed === null ||
  !Array.isArray((parsed as { posts?: unknown }).posts) ||
  !((parsed as { posts: unknown[] }).posts.every((p) => typeof p === "string"))
) {
  console.error(`${POSTS_FILE} must hold {"posts": ["https://x.com/...", ...]}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(join(BOT_DIR, POSTS_FILE), join(OUTPUT_DIR, POSTS_FILE));
