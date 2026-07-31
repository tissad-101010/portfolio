import { FaExternalLinkAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiCodingame } from 'react-icons/si'
import { profile } from '@/src/lib/portfolioData'
import type { SocialPlatform } from '@/src/types/portfolio'

export const footerClass = 'w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200 dark:bg-gray-600 dark:hover:bg-gray-500'
export const infoClass = 'w-12 h-12 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200 dark:bg-gray-600 dark:hover:bg-gray-500'

const iconByPlatform: Record<SocialPlatform, JSX.Element> = {
  github: <FaGithub className="w-6 h-6 text-white" />,
  linkedin: <FaLinkedin className="w-6 h-6 text-white" />,
  codingame: <SiCodingame className="w-8 h-8 text-yellow-400" />,
  website: <FaExternalLinkAlt className="w-5 h-5 text-white" />,
}

export function Networks({
  className,
  platformOrder,
}: {
  className: string
  platformOrder?: SocialPlatform[]
}) {
  const links = platformOrder
    ? [...profile.socialLinks].sort((a, b) => platformOrder.indexOf(a.platform) - platformOrder.indexOf(b.platform))
    : profile.socialLinks

  return (
    <div className="flex space-x-4">
      {links.map((link) => (
        <a
          key={`${link.platform}-${link.url}`}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {iconByPlatform[link.platform] ?? iconByPlatform.website}
          <span className="sr-only">{link.label}</span>
        </a>
      ))}
    </div>
  )
}
