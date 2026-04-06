# Repository Agent Guide

This repository is a personal technical blog built with MDX + Contentlayer. The main job for Codex here is to turn local technical Word notes and supporting images into publishable Chinese blog posts that match the existing tone of the site.

## Scope

- Work primarily in `data/blog/` for posts and `public/static/images/` for images.
- Never overwrite source `.docx` files.
- Never touch unrelated user changes.
- Do not rely on deprecated custom prompts as the main workflow. Use this file plus repo skills.

## Writing bar

- Write like a real project author: concrete, reflective, technical, and natural.
- Explain why something matters before diving into how it works.
- Keep the narrative progression: problem -> reasoning -> implementation -> verification -> significance.
- Avoid AI filler, paper tone, and formulaic transitions such as “首先/其次/最后/综上所述/本文将”.
- Do not invent experiments, logs, or results that are not in the source notes.

## MDX and frontmatter

- Every new post should start with YAML frontmatter.
- Use: `title`, `date`, `tags`, `draft`, `summary`.
- Prefer ISO dates: `YYYY-MM-DD`.
- Keep `draft: false` for publishable output.
- Use `##` and `###` headings for structure.
- Prefer inline HTML images:
  `<img src="/static/images/.../file-name.png" alt="..." width="700" />`

## Images

- Rename only the images actually used in the post.
- Use semantic English `kebab-case` names.
- Keep the image under a relevant topic folder in `public/static/images/`.
- Update every reference immediately after renaming.

## Word -> MDX workflow

1. Read the entire `.docx`, including code, logs, and image list.
2. Skim recent posts in `data/blog/` to match tone and sectioning.
3. Reorganize the note into a publishable blog, not a literal transcript.
4. Validate image paths and frontmatter before finishing.
5. If the user asked for delivery to git, stage only the intended files, commit, and push.

## Do

- Keep posts readable on their own.
- Prefer one clear idea per section.
- Use images to prove or explain something, not to decorate.
- Use small helper scripts when they reduce repetitive validation.

## Don’t

- Don’t create a pile of auxiliary docs.
- Don’t add unrelated refactors while publishing a post.
- Don’t stage untracked source notes or other user files you did not touch for this task.
- Don’t bulk-dump every image from the folder.

## Completion criteria

- The `.mdx` file exists in `data/blog/`.
- All referenced images exist.
- The article reads naturally in Chinese and matches this repo’s style.
- Any requested commit/push has been completed.
