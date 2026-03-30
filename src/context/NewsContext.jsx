import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const NewsContext = createContext(null)

export function NewsProvider({ children }) {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchArticles()
    }, [])

    const fetchArticles = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get(`${API_BASE_URL}/api/news`)
            setArticles(data)
        } catch {
            console.warn('Could not fetch articles from API')
        } finally {
            setLoading(false)
        }
    }

    const addArticle = useCallback(async (article) => {
        const token = localStorage.getItem('adminToken')
        const { data } = await axios.post(`${API_BASE_URL}/api/news`, article, {
            headers: { Authorization: `Bearer ${token}` },
        })
        setArticles((prev) => [data, ...prev])
        return data
    }, [])

    const updateArticle = useCallback(async (slug, updated) => {
        const token = localStorage.getItem('adminToken')
        const { data } = await axios.put(`${API_BASE_URL}/api/news/${slug}`, updated, {
            headers: { Authorization: `Bearer ${token}` },
        })
        setArticles((prev) => prev.map((a) => (a.slug === slug ? data : a)))
        return data
    }, [])

    const deleteArticle = useCallback(async (slug) => {
        const token = localStorage.getItem('adminToken')
        await axios.delete(`${API_BASE_URL}/api/news/${slug}`, {
            headers: { Authorization: `Bearer ${token}` },
        })
        setArticles((prev) => prev.filter((a) => a.slug !== slug))
    }, [])

    const getBySlug = useCallback((slug) => {
        return articles.find((a) => a.slug === slug)
    }, [articles])

    const getRelated = useCallback((slugs) => {
        return slugs.map((s) => articles.find((a) => a.slug === s)).filter(Boolean)
    }, [articles])

    return (
        <NewsContext.Provider value={{ articles, loading, fetchArticles, addArticle, updateArticle, deleteArticle, getBySlug, getRelated }}>
            {children}
        </NewsContext.Provider>
    )
}

export function useNews() {
    const ctx = useContext(NewsContext)
    if (!ctx) throw new Error('useNews must be used within NewsProvider')
    return ctx
}
