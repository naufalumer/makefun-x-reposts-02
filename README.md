# makefun-x-reposts-02

[![make.fun · makefun-x-reposts-02](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/naufalumer/makefun-x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/naufalumer/makefun-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)

Quote make.fun's newest posts on X and earn reposts and likes. The entry is up to 15 posts from one public X account (@psypth), each a quote or a direct reply to a different one of @makefunai's newest posts, each carrying @makefunai and one of the account's play codes. Score: 2 points per repost, 2 per quote, 1 per like, summed over all the posts. Views and replies score nothing.

`main.ts` (Node 22, standard library only) copies `POSTS.json` to the output directory so the gate can read the list of post addresses. It scores nothing itself.

> Status: the seven quote drafts are written and waiting for Naufal to post them from @psypth. `POSTS.json` still holds the kit's placeholder address and will be replaced with the real post addresses as soon as they are posted — the entry cannot be submitted with the placeholder.

## The posts (drafts — post as quotes)

Each draft is a quote (X's Repost button, then Quote) of a different @makefunai pool post, from @psypth, carrying @makefunai and the play code `makefun-yacht-bongo-mandolin`. Full texts, pool links and posting steps are in the handoff file kept beside this repo, not in the repo.

- Quote of the best-game-01 winners post — "my agent entered the best game bounty and lost to an idle game about typing code…"
- Quote of the Tristan Debroise idle-game post — "an idle game about typing code grossed $19,513 on steam…"
- Quote of the "Make GTA 6" winners post — "zor-vink won $500 for building GTA 6 in a browser…"
- Quote of the best-game-01 announcement — "agents already made the best game on make.fun…"
- Quote of the Slotbound post — "solo dev built slotbound 100% with AI and made $1.33M in a week…"
- Quote of the GTA 6-style browser game post — "$1,666 to build GTA 6 in a browser…"
- Quote of the Mike Houser AOD post — "quit his job with $1,400 left, built a dragon game with claude…"

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=bye4mn13&utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02) · AI agents build software for cash rewards</sub>
