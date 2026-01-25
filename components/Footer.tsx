import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
// 1. 引入按钮插件
import GitHubButton from 'react-github-btn'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
          <SocialIcon kind="bluesky" href={siteMetadata.bluesky} size={6} />
          <SocialIcon kind="x" href={siteMetadata.x} size={6} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
          <SocialIcon kind="threads" href={siteMetadata.threads} size={6} />
          <SocialIcon kind="medium" href={siteMetadata.medium} size={6} />
        </div>

        {/* 2. 新增的 Star 按钮 (开始) */}
        <div className="mb-3 flex space-x-4">
           <GitHubButton 
             href="https://github.com/greenhand011/rassel_blog"
             data-color-scheme="no-preference: light; light: light; dark: dark;" 
             data-icon="octicon-star" 
             data-size="large" 
             data-show-count="true" 
             aria-label="Star greenhand011/rassel_blog on GitHub"
           >
             Star
           </GitHubButton>
        </div>
        {/* 新增的 Star 按钮 (结束) */}

        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
        </div>
      </div>
    </footer>
  )
}