import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Configuration Sanity
export const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

// Helper pour les images
const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => builder.image(source)

// Types TypeScript pour le contenu

// Navigation
export interface NavItem {
  label: string
  path: string
  iconType: string
  isActive: boolean
}

export interface NavbarConfig {
  _id: string
  _type: 'navbar'
  logo: {
    brandName1: string
    brandName2: string
    logoImage?: any
  }
  navigationItems: NavItem[]
}

// Footer
export interface FooterLink {
  label: string
  path: string
}

export interface SocialLink {
  platform: string
  url: string
  isActive: boolean
}

export interface FooterConfig {
  _id: string
  _type: 'footer'
  branding: {
    brandName1: string
    brandName2: string
    description: string
  }
  contactInfo: {
    email: string
    phone: string
    address: string
  }
  entrepriseLinks: FooterLink[]
  servicesLinks: FooterLink[]
  ressourcesLinks: FooterLink[]
  legalLinks: FooterLink[]
  socialLinks: SocialLink[]
  copyright: string
}

// Hero Section
export interface HeroStatistic {
  value: number
  suffix: string
  label: string
  isActive: boolean
}

export interface HeroButton {
  text: string
  link: string
  style: 'primary' | 'secondary' | 'outline'
  isExternal: boolean
}

export interface HeroConfig {
  _id: string
  _type: 'hero'
  isActive: boolean
  branding: {
    brandName1: string
    brandName2: string
  }
  headline: string
  subheadline: string
  backgroundMedia: {
    type: 'video' | 'image' | 'gradient'
    videoFile?: any
    videoUrl?: string
    backgroundImage?: any
    overlayOpacity: number
  }
  ctaButtons: HeroButton[]
  statistics: HeroStatistic[]
}

// Formation
export interface Formation {
  _id: string
  _type: 'formation'
  title: string
  slug: { current: string }
  description: string
  iconType: string
  colorTheme: string
  duration: string
  price: number
  priceLabel: string
  level: string
  image?: any
  galleryImages?: any[]
  modules: string[]
  objectives: string[]
  targetAudience: string
  prerequisites: string
  format: {
    inPerson: boolean
    remote: boolean
    hybrid: boolean
    customLocation: boolean
  }
  certification: {
    available: boolean
    name?: string
    organization?: string
  }
  content: any[]
  trainer?: {
    name: string
    bio: string
    photo?: any
    expertise: string[]
  }
  schedule?: Array<{
    startDate: string
    endDate: string
    location: string
    availableSpots: number
    isActive: boolean
  }>
  testimonials?: Array<{
    name: string
    company: string
    testimonial: string
    rating: number
    photo?: any
  }>
  seo?: {
    metaTitle: string
    metaDescription: string
    keywords: string[]
  }
  isActive: boolean
  isFeatured: boolean
  order?: number
}

// Service
export interface Service {
  _id: string
  _type: 'service'
  title: string
  slug?: { current: string }
  subtitle?: string
  description: string
  category: string
  colorTheme: string
  pricing: {
    type: 'fixed' | 'from' | 'quote' | 'custom'
    amount?: number
    label: string
  }
  isPopular: boolean
  features: string[]
  benefits?: string[]
  deliverables?: string[]
  timeline?: string
  image?: any
  gallery?: any[]
  icon?: string
  targetAudience?: string
  process?: Array<{
    step: number
    title: string
    description: string
    duration?: string
  }>
  content?: any[]
  prerequisites?: string
  team?: Array<{
    name: string
    role: string
    bio: string
    photo?: any
  }>
  testimonials?: Array<{
    clientName: string
    company: string
    testimonial: string
    rating: number
    photo?: any
    project?: string
  }>
  caseStudies?: Array<{
    title: string
    client: string
    challenge: string
    solution: string
    results: string
    image?: any
  }>
  ctaSection?: {
    title: string
    description: string
    buttonText: string
    buttonLink: string
  }
  seo?: {
    metaTitle: string
    metaDescription: string
    keywords: string[]
  }
  isActive: boolean
  isFeatured: boolean
  order?: number
}

// Legacy types (pour compatibilité)
export interface PageContent {
  _id: string
  _type: string
  title: string
  slug: { current: string }
  content: any[]
  seo?: {
    title?: string
    description?: string
  }
}

// Fonctions de récupération de données

// Configuration
export const getNavbarConfig = async (): Promise<NavbarConfig | null> => {
  const query = `*[_type == "navbar" && _id == "navbar-config"][0]`
  return await client.fetch(query)
}

export const getFooterConfig = async (): Promise<FooterConfig | null> => {
  const query = `*[_type == "footer" && _id == "footer-config"][0]`
  return await client.fetch(query)
}

export const getHeroConfig = async (): Promise<HeroConfig | null> => {
  const query = `*[_type == "hero" && _id == "hero-config"][0]`
  return await client.fetch(query)
}

// Formations
export const getAllFormations = async (): Promise<Formation[]> => {
  const query = `*[_type == "formation" && isActive == true] | order(order asc, _createdAt desc)`
  return await client.fetch(query)
}

export const getFeaturedFormations = async (): Promise<Formation[]> => {
  const query = `*[_type == "formation" && isActive == true && isFeatured == true] | order(order asc) [0...4]`
  return await client.fetch(query)
}

export const getFormationBySlug = async (slug: string): Promise<Formation | null> => {
  const query = `*[_type == "formation" && slug.current == $slug][0]`
  return await client.fetch(query, { slug })
}

// Services
export const getAllServices = async (): Promise<Service[]> => {
  const query = `*[_type == "service" && isActive == true] | order(order asc, _createdAt desc)`
  return await client.fetch(query)
}

export const getFeaturedServices = async (): Promise<Service[]> => {
  const query = `*[_type == "service" && isActive == true && isFeatured == true] | order(order asc) [0...3]`
  return await client.fetch(query)
}

export const getServiceBySlug = async (slug: string): Promise<Service | null> => {
  const query = `*[_type == "service" && slug.current == $slug][0]`
  return await client.fetch(query, { slug })
}

// Page générique (pour compatibilité)
export const getPageBySlug = async (slug: string): Promise<PageContent | null> => {
  const query = `*[_type == "page" && slug.current == $slug][0]`
  return await client.fetch(query, { slug })
}