import Link from '@/components/Link'
import NewsletterForm from '@/components/NewsletterForm'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  const featuredPosts = posts.slice(0, MAX_DISPLAY)
  const totalPosts = posts.length
  const latestPost = featuredPosts[0]
  const tagUniverse = new Set(featuredPosts.flatMap((post) => post.tags || []))

  return (
    <div className="cv-grid-overlay relative overflow-hidden pb-10">
      <section className="relative isolate pt-6 pb-16">
        <div className="cv-hero-glow absolute inset-x-0 top-2 -z-10 h-[28rem]" />
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.45fr)_22rem]">
          <div className="cv-panel cv-panel-strong p-7 sm:p-9">
            <div className="mb-6 flex flex-wrap gap-3">
              <span className="cv-chip">Computer Vision</span>
              <span className="cv-chip">Reverse Engineering</span>
              <span className="cv-chip">Embedded Security</span>
            </div>
            <p className="cv-kicker mb-4">Vision-guided security notebook</p>
            <h1 className="cv-hero-title max-w-4xl text-4xl font-black tracking-[0.08em] text-gray-950 sm:text-5xl xl:text-7xl dark:text-white">
              把代码、传感器和攻击面
              <span className="cv-hero-accent block">放进同一个观察窗口</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg dark:text-gray-300">
              {siteMetadata.description}。这里不只记录结果，更记录观察路径、调试现场和为什么会这样。
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/blog" className="cv-action-primary">
                进入文章索引
              </Link>
              <Link href="/tags" className="cv-action-secondary">
                浏览主题标签
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="cv-stat-card">
                <p className="cv-stat-label">Posts Indexed</p>
                <p className="cv-stat-value">{String(totalPosts).padStart(2, '0')}</p>
              </div>
              <div className="cv-stat-card">
                <p className="cv-stat-label">Visible Tags</p>
                <p className="cv-stat-value">{String(tagUniverse.size).padStart(2, '0')}</p>
              </div>
              <div className="cv-stat-card">
                <p className="cv-stat-label">Latest Capture</p>
                <p className="cv-stat-text">
                  {latestPost ? formatDate(latestPost.date, siteMetadata.locale) : 'No data'}
                </p>
              </div>
            </div>
          </div>
          <aside className="cv-panel p-6">
            <p className="cv-kicker mb-4">Live feed</p>
            <div className="cv-radar mb-5">
              <div className="cv-radar-ring" />
              <div className="cv-radar-ring cv-radar-ring-delay" />
              <div className="cv-radar-sweep" />
              <div className="cv-radar-dot cv-radar-dot-one" />
              <div className="cv-radar-dot cv-radar-dot-two" />
              <div className="cv-radar-dot cv-radar-dot-three" />
            </div>
            <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
              <div className="cv-feed-row">
                <span className="cv-feed-label">Primary focus</span>
                <span className="cv-feed-value">CV / IoT / Binary</span>
              </div>
              <div className="cv-feed-row">
                <span className="cv-feed-label">Capture mode</span>
                <span className="cv-feed-value">Notes + teardown + verification</span>
              </div>
              <div className="cv-feed-row">
                <span className="cv-feed-label">Recent frame</span>
                <span className="cv-feed-value">{latestPost?.title || 'Waiting for next post'}</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="pb-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="cv-kicker mb-2">Recent analysis</p>
            <h2 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl dark:text-white">
              最新观察记录
            </h2>
          </div>
          <Link href="/blog" className="cv-inline-link" aria-label="All posts">
            查看全部
          </Link>
        </div>
        <ul className="grid gap-5">
          {!posts.length && <li className="cv-panel p-6 text-gray-500">No posts found.</li>}
          {featuredPosts.map((post, index) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug}>
                <article className="cv-post-card">
                  <div className="cv-post-index">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="cv-post-meta">
                    <p className="cv-post-date">{formatDate(date, siteMetadata.locale)}</p>
                    <p className="cv-post-scan">scan ready</p>
                  </div>
                  <div className="cv-post-body">
                    <div className="cv-cat-status" aria-hidden="true">
                      <span className="cv-cat-status-face">🐱</span>
                      <span className="cv-cat-status-eyes">
                        <span />
                        <span />
                      </span>
                    </div>
                    <h3 className="cv-post-title">
                      <Link href={`/blog/${slug}`}>{title}</Link>
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                    <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base dark:text-gray-300">
                      {summary}
                    </p>
                    <div className="mt-6">
                      <Link
                        href={`/blog/${slug}`}
                        className="cv-inline-link"
                        aria-label={`Read more: "${title}"`}
                      >
                        打开分析记录
                      </Link>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </section>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end pt-4">
          <Link href="/blog" className="cv-action-secondary" aria-label="All posts">
            进入完整归档
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="pt-10">
          <div className="cv-panel p-6 sm:p-8">
            <p className="cv-kicker mb-2">Signal subscription</p>
            <NewsletterForm />
          </div>
        </div>
      )}
    </div>
  )
}
