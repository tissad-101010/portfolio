export type SocialPlatform = 'github' | 'linkedin' | 'codingame' | 'website'

export interface SocialLink {
  platform: SocialPlatform
  label: string
  url: string
}

export interface Profile {
  firstName: string
  lastName: string
  professionalTitle: string
  metadataDescription: string
  introduction: string
  footerIntroduction: string
  email: string
  location: string
  availability: string
  profileImage: string
  pdfFilename?: string
  resume: {
    url: string
    filename: string
  }
  socialLinks: SocialLink[]
  skills?: string[]
  education?: string[]
  experience?: string[]
  languages?: string[]
  emailJs?: {
    publicKey?: string
    serviceId?: string
    templateId?: string
  }
}

export interface Project {
  title: string
  description: string
  tags: string[]
  github: string
  demo?: string
  link?: string
  image?: string
  dates?: string
  features?: string[]
}
