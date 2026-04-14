import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  let headerClass = 'cv-site-header flex w-full items-center justify-between py-6 sm:py-8'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between gap-4">
          <div className="cv-logo-wrap">
            <Logo />
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden sm:block">
              <div className="cv-wordmark">{siteMetadata.headerTitle}</div>
              <div className="cv-wordmark-sub">visual logs / attack surface / device notes</div>
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex items-center space-x-3 leading-5 sm:-mr-3 sm:space-x-4">
        <div className="no-scrollbar hidden max-w-40 items-center gap-x-2 overflow-x-auto rounded-full border border-gray-200/80 bg-white/70 px-3 py-2 backdrop-blur sm:flex md:max-w-72 lg:max-w-[32rem] dark:border-cyan-400/20 dark:bg-gray-900/65">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link key={link.title} href={link.href} className="cv-nav-link">
                {link.title}
              </Link>
            ))}
        </div>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
