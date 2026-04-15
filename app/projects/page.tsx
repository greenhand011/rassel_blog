import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <div className="cv-grid-overlay relative overflow-hidden">
      <div className="space-y-8 pt-6 pb-10">
        <div className="cv-panel cv-panel-strong p-7 sm:p-9">
          <p className="cv-kicker mb-3">Project archive</p>
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Projects
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            这里放的是正在持续推进的系列项目。每个项目卡片会链接到它的起始文章，你可以顺着开发记录继续往下读，也能快速看到当前阶段、技术栈和已经发布的内容数量。
          </p>
        </div>
        <div className="container py-4">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                status={d.status}
                articleCount={d.articleCount}
                period={d.period}
                stack={d.stack}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
