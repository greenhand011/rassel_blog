import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="cv-footer mt-20 flex flex-col items-center rounded-[2rem] px-6 py-10">
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-700 dark:text-cyan-300">
          End of scan
        </div>
        <div className="mb-4 flex flex-wrap justify-center gap-4">
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
        <div className="mb-3 flex space-x-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/greenhand011/rassel_blog"
          >
            <img
              src="https://img.shields.io/github/stars/greenhand011/rassel_blog?style=social"
              alt="GitHub stars"
            />
          </a>
        </div>
        <div className="mb-2 flex flex-wrap justify-center gap-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>·</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>·</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-2 text-sm text-gray-500 dark:text-gray-400">
          记录逆向、嵌入式与计算机视觉方向的观察过程，而不只是结果截图。
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">Tailwind Nextjs Theme</Link>
        </div>
      </div>
    </footer>
  )
}
