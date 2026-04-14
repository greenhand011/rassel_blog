const deployTarget = process.env.NEXT_PUBLIC_DEPLOY_TARGET || 'global'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://tailwind-nextjs-starter-blog.vercel.app'
const siteRepo =
  process.env.NEXT_PUBLIC_SITE_REPO || 'https://github.com/greenhand011/rassel_blog'
const buttondownEmbedUrl = process.env.NEXT_PUBLIC_BUTTONDOWN_EMBED_URL || ''

const disableAnalytics =
  process.env.NEXT_PUBLIC_DISABLE_ANALYTICS === '1' || deployTarget === 'china'
const disableComments =
  process.env.NEXT_PUBLIC_DISABLE_COMMENTS === '1' || deployTarget === 'china'
const disableNewsletter =
  process.env.NEXT_PUBLIC_DISABLE_NEWSLETTER === '1' ||
  (deployTarget === 'china' && !buttondownEmbedUrl)

/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: '网安菜鸟成长之路',
  author: 'Rassel',
  headerTitle: 'RasselBlog',
  description: '一个网络安全初学者记录自己成长路径的技术博客',
  language: 'zh-CN',
  theme: 'system',
  siteUrl,
  siteRepo,
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'rassel_work@outlook.com',
  github: 'https://github.com/greenhand011/rassel_blog',
  x: 'https://twitter.com/x',
  facebook: 'https://facebook.com',
  youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com',
  threads: 'https://www.threads.net',
  instagram: 'https://www.instagram.com',
  medium: 'https://medium.com',
  bluesky: 'https://bsky.app/',
  locale: 'zh-CN',
  stickyNav: false,
  analytics: disableAnalytics
    ? {}
    : {
        umamiAnalytics: {
          umamiWebsiteId: process.env.NEXT_UMAMI_ID,
        },
      },
  newsletter: disableNewsletter
    ? null
    : {
        provider: 'buttondown',
        formAction: buttondownEmbedUrl || null,
      },
  comments: disableComments
    ? null
    : {
        provider: 'giscus',
        giscusConfig: {
          repo: 'greenhand011/rassel_blog',
          repositoryId: 'R_kgDOQm-IBw',
          category: 'Announcements',
          categoryId: 'DIC_kwDOQm-IB84CzqxO',
          mapping: 'pathname',
          reactions: '1',
          metadata: '0',
          theme: 'light',
          darkTheme: 'transparent_dark',
        },
      },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}

module.exports = siteMetadata
