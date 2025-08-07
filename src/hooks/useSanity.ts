import { useState, useEffect } from 'react'
import { 
  client, 
  NavbarConfig, 
  FooterConfig, 
  HeroConfig, 
  Formation, 
  Service 
} from '../lib/sanity'

export function useSanityData<T>(query: string, params: Record<string, any> = {}) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const result = await client.fetch(query, params)
        setData(result)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [query, JSON.stringify(params)])

  return { data, loading, error }
}

// Hooks pour la configuration du site
export function useNavbarConfig() {
  return useSanityData<NavbarConfig>(`*[_type == "navbar" && _id == "navbar-config"][0]`)
}

export function useFooterConfig() {
  return useSanityData<FooterConfig>(`*[_type == "footer" && _id == "footer-config"][0]`)
}

export function useHeroConfig() {
  return useSanityData<HeroConfig>(`*[_type == "hero" && _id == "hero-config"][0]`)
}

// Hooks pour les formations
export function useFormations() {
  return useSanityData<Formation[]>(`*[_type == "formation" && isActive == true] | order(order asc, _createdAt desc)`)
}

export function useFeaturedFormations() {
  return useSanityData<Formation[]>(`*[_type == "formation" && isActive == true && isFeatured == true] | order(order asc) [0...4]`)
}

export function useFormation(slug: string) {
  return useSanityData<Formation>(`*[_type == "formation" && slug.current == $slug][0]`, { slug })
}

// Hooks pour les services
export function useServices() {
  return useSanityData<Service[]>(`*[_type == "service" && isActive == true] | order(order asc, _createdAt desc)`)
}

export function useFeaturedServices() {
  return useSanityData<Service[]>(`*[_type == "service" && isActive == true && isFeatured == true] | order(order asc) [0...3]`)
}

export function useService(slug: string) {
  return useSanityData<Service>(`*[_type == "service" && slug.current == $slug][0]`, { slug })
}

// Hook pour une page générique (compatibilité)
export function usePage(slug: string) {
  return useSanityData(`*[_type == "page" && slug.current == $slug][0]`, { slug })
}

// Hook combiné pour toutes les données de la page d'accueil
export function useHomePageData() {
  const heroConfig = useHeroConfig()
  const featuredFormations = useFeaturedFormations()
  const featuredServices = useFeaturedServices()

  return {
    hero: heroConfig,
    formations: featuredFormations,
    services: featuredServices,
    loading: heroConfig.loading || featuredFormations.loading || featuredServices.loading,
    error: heroConfig.error || featuredFormations.error || featuredServices.error
  }
}