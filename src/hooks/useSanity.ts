import { useState, useEffect } from 'react'
import { client } from '../lib/sanity'

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

// Hook spécialisé pour les formations
export function useFormations() {
  return useSanityData(`*[_type == "formation"] | order(_createdAt desc)`)
}

// Hook spécialisé pour les services
export function useServices() {
  return useSanityData(`*[_type == "service"] | order(_createdAt desc)`)
}

// Hook pour une page spécifique
export function usePage(slug: string) {
  return useSanityData(`*[_type == "page" && slug.current == $slug][0]`, { slug })
}