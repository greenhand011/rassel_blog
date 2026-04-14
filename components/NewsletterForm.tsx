'use client'

import siteMetadata from '@/data/siteMetadata'

type NewsletterFormProps = {
  title?: string
  compact?: boolean
}

function FormContent({
  title = '订阅更新',
  compact = false,
}: NewsletterFormProps): React.JSX.Element | null {
  const newsletter = siteMetadata.newsletter as
    | (typeof siteMetadata.newsletter & { formAction?: string | null })
    | null

  if (!newsletter?.formAction) {
    return null
  }

  const inputClassName = compact
    ? 'focus:ring-primary-600 w-72 rounded-md px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 dark:bg-black'
    : 'focus:ring-primary-600 w-72 rounded-md px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 dark:bg-black'

  return (
    <>
      <div className="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</div>
      <p className="pb-3 text-sm text-gray-500 dark:text-gray-400">
        新文章发布时，你会第一时间收到邮件提醒。
      </p>
      <form
        action={newsletter.formAction}
        className="flex flex-col gap-2 sm:flex-row"
        method="post"
        target="_blank"
      >
        <label htmlFor="email-input" className="sr-only">
          Email address
        </label>
        <input type="hidden" name="embed" value="1" />
        <input
          autoComplete="email"
          className={inputClassName}
          id="email-input"
          name="email"
          placeholder="Enter your email"
          required
          type="email"
        />
        <button
          className="bg-primary-500 hover:bg-primary-700 focus:ring-primary-600 rounded-md px-4 py-2 font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 dark:hover:bg-primary-400 dark:ring-offset-black"
          type="submit"
        >
          Sign up
        </button>
      </form>
    </>
  )
}

export default function NewsletterForm(props: NewsletterFormProps) {
  const newsletter = siteMetadata.newsletter as
    | (typeof siteMetadata.newsletter & { formAction?: string | null })
    | null

  if (!newsletter?.provider) {
    return null
  }

  return <FormContent {...props} />
}

export function BlogNewsletterForm(props: NewsletterFormProps) {
  const newsletter = siteMetadata.newsletter as
    | (typeof siteMetadata.newsletter & { formAction?: string | null })
    | null

  if (!newsletter?.provider) {
    return null
  }

  return (
    <div className="flex items-center justify-center">
      <div className="bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8">
        <FormContent compact {...props} />
      </div>
    </div>
  )
}
