# Frontmatter Patterns

The repo uses Contentlayer MDX posts with a small, stable frontmatter set.

## Required in practice

```yaml
---
title: 'RetroPop Mini 开发日志 #07：从像素移动到网格移动，贪吃蛇终于有了真正的逻辑世界'
date: '2026-04-06'
tags: ['Embedded']
draft: false
summary: 'Day7 把角色坐标从像素重构成网格，统一了逻辑世界、显示世界和 Tick 结算方式。'
---
```

## Recommended defaults

- `title`: specific, project-aware, and readable as a blog headline.
- `date`: use `YYYY-MM-DD`.
- `tags`: usually one to three items.
- `draft`: keep `false` for publishable output.
- `summary`: one or two sentences that explain the main change.

## Optional fields supported by the schema

- `lastmod`
- `images`
- `authors`
- `layout`
- `bibliography`
- `canonicalUrl`

Only use optional fields when the article truly needs them.

## Practical guidance

- Keep the frontmatter short.
- Do not add decorative metadata.
- If the post is about embedded security or hardware work, the title usually performs better when it names the project and the day, then the core change.
- If the post is more general, the title can lead with the technical problem first.
