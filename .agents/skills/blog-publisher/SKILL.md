---
name: blog-publisher
description: Convert local technical Word notes and supporting images into publishable Chinese MDX blog posts for this repository. Use when the task mentions `.docx` notes, blog posts, image selection or renaming, MDX frontmatter, repository-style matching, or optional git commit/push.
---

# Blog Publisher

Use this skill for the repo's main recurring workflow: turn a local Word note into a polished, publishable Chinese MDX post that matches the existing blog style. For local style and schema details, see [`references/blog-style-notes.md`](references/blog-style-notes.md) and [`references/frontmatter-patterns.md`](references/frontmatter-patterns.md).

## When to use

- Local `.docx` note -> publishable `.mdx` article
- Hardware / embedded / security project notes with screenshots or photos
- Image selection, renaming, and MDX insertion for a blog post
- Validation before commit/push

## When not to use

- Pure translation or summarization
- Generic chat or brainstorming
- Code review of an existing post without creating a new article
- Unrelated repository maintenance

## Core workflow

1. Read [`AGENTS.md`](../../../AGENTS.md) and skim representative posts in `data/blog/`.
2. Read the source `.docx` fully. Preserve the factual order, but reorganize it for readability.
3. Draft a Chinese technical post that sounds like a real project update, not an AI summary.
4. Select only the images that support the story. Rename used images to semantic `kebab-case` in the relevant topic folder.
5. Write MDX with valid frontmatter and place images near the paragraph they explain.
6. Validate the result with `node scripts/validate-blog-mdx.mjs <file-or-dir>`.
7. If the user asked for delivery to git, stage only the intended files, commit, and push.

## Writing style

- Lead with why the change matters, then explain how it works, then show how it was verified, then explain the broader meaning.
- Use short sections, clear technical terms, and concrete observations.
- Prefer narrative tension over report style.
- Avoid clichés: “首先/其次/最后”, “本文将”, “综上所述”.
- Keep the voice human and specific.
- Do not invent measurements, logs, or test results.

## MDX rules

- Frontmatter should include `title`, `date`, `tags`, `draft`, `summary`.
- Prefer `date: 'YYYY-MM-DD'`.
- Prefer HTML image tags:
  `<img src="/static/images/.../file-name.png" alt="..." width="700" />`
- Use clear alt text that says what the image proves.
- Keep code blocks short and accurate.

## Image rules

- Rename only images that are actually used.
- Keep names meaningful, short, and English `kebab-case`.
- Update the MDX reference immediately after renaming.
- Do not leave image selection to a dump at the end of the article.

## Typical tasks

- ADAS ECU / embedded security note: turn a hardware or firmware notebook into a narrative post about debugging, diagnostics, or attack surface.
- GameCC / ESP32-C3 note: turn a day-by-day refactor log into a post about GPIO, state machines, input control, or rendering changes.
- Generic technical note: turn a mixed Word note into a clear publishable post with code, images, and a closing reflection.

## Easy misfires

- A plain rewrite request with no blog output
- A code review request on an existing MDX file
- A request that only needs a short summary or translation

## Edge cases

- If the note is messy, prioritize a coherent article over literal order.
- If several images are similar, keep the clearest one and ignore the rest.
- If the working tree already contains unrelated user changes, leave them alone.

## Output report

When the task is done, report:

- the generated MDX path(s)
- the image file names used or renamed
- which existing posts you used as style references
- what was reorganized or rewritten
- any remaining human follow-up
