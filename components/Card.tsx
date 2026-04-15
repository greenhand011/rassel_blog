import Image from './Image'
import Link from './Link'

interface CardProps {
  title: string
  description: string
  imgSrc?: string
  href?: string
  status: string
  articleCount: number
  period: string
  stack: string[]
}

const Card = ({ title, description, imgSrc, href, status, articleCount, period, stack }: CardProps) => (
  <div className="max-w-[544px] p-4 md:w-1/2">
    <div
      className={`cv-panel relative overflow-hidden rounded-[1.6rem] ${
        imgSrc ? 'h-full' : ''
      }`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-44 lg:h-56"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-44 lg:h-56"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="cv-tag">{status}</span>
          <span className="cv-tag">{`${articleCount} 篇记录`}</span>
          <span className="cv-tag">{period}</span>
        </div>
        <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight text-gray-950 dark:text-white">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-5 max-w-none text-gray-600 dark:text-gray-300">{description}</p>
        <div className="mb-5 flex flex-wrap gap-2">
          {stack?.map((item) => (
            <span key={item} className="cv-chip">
              {item}
            </span>
          ))}
        </div>
        {href && (
          <Link href={href} className="cv-inline-link" aria-label={`Link to ${title}`}>
            查看项目记录
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
