# Blog Assistant Usage

This repo’s blog assistant has two layers:

1. `AGENTS.md` gives the repository-wide rules.
2. `.agents/skills/blog-publisher/` gives the repeatable Word -> MDX workflow.

## Shortest way to ask

```text
Use $blog-publisher to turn <DOCX_PATH> plus <IMAGE_DIR> into a publishable MDX post in <OUTPUT_DIR>. Validate it, then commit and push only the files created for this task.
```

## Common input format

- Word notes: absolute `.docx` path
- Images: absolute image directory
- Output: `E:\blog\rassel_blog\data\blog\`
- Optional: tell it whether to commit/push or stop after creating files

## When to let it push

- Push when you explicitly ask for it.
- Push when the task clearly ends with “publishable and ready”.

## When not to push

- When you only want a draft file
- When you want a review or style pass only
- When the working tree contains unrelated user changes you do not want included

## Troubleshooting

- If an image is missing, run `node scripts/validate-blog-mdx.mjs <file-or-dir>`.
- If a `.docx` path has Chinese characters or spaces, always use the full absolute path.
- If the repo already has unrelated dirty files, stage only the files created for the blog task.
- If the post feels too mechanical, tighten the narrative around why the change mattered, not just what changed.
