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

export interface Formation {
  _id: string
  title: string
  description: string
  duration: string
  price: number
  image?: any
  slug: { current: string }
  content: any[]
}

export interface Service {
  _id: string
  title: string
  description: string
  price?: number
  image?: any
  features: string[]
}

// Fonctions de récupération de données
export const getPageBySlug = async (slug: string): Promise<PageContent | null> => {
  const query = `*[_type == "page" && slug.current == $slug][0]`
  return await client.fetch(query, { slug })
}

export const getAllFormations = async (): Promise<Formation[]> => {
  const query = `*[_type == "formation"] | order(_createdAt desc)`
  return await client.fetch(query)
}

export const getAllServices = async (): Promise<Service[]> => {
  const query = `*[_type == "service"] | order(_createdAt desc)`
  return await client.fetch(query)
}