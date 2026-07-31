import profileJson from '../../data/profile.json'
import projectsJson from '../../data/projects.json'
import type { Profile, Project } from '../types/portfolio'

const defaultProfile: Profile = {
  firstName: 'Portfolio',
  lastName: 'Owner',
  professionalTitle: 'Software Developer',
  metadataDescription: 'Personal software development portfolio',
  introduction: '',
  footerIntroduction: '',
  email: '',
  location: '',
  availability: '',
  profileImage: '/profile.jpg',
  resume: { url: '', filename: 'resume.pdf' },
  socialLinks: [],
}

export const profile: Profile = {
  ...defaultProfile,
  ...(profileJson as Profile),
  resume: { ...defaultProfile.resume, ...(profileJson.resume ?? {}) },
  socialLinks: Array.isArray(profileJson.socialLinks)
    ? (profileJson.socialLinks as Profile['socialLinks'])
    : [],
}

export const projects: Project[] = Array.isArray(projectsJson)
  ? (projectsJson as Project[]).filter((project) => project.title && project.description)
  : []

export const fullName = [profile.firstName, profile.lastName].filter(Boolean).join(' ')

export function withBasePath(assetPath: string) {
  if (!assetPath || !assetPath.startsWith('/') || assetPath.startsWith('//')) return assetPath
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  if (basePath && assetPath.startsWith(`${basePath}/`)) return assetPath
  return `${basePath}${assetPath}`
}
