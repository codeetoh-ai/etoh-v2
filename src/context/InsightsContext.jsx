import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const InsightsContext = createContext(null)

export function InsightsProvider({ children }) {
    const [insights, setInsights] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchInsights()
    }, [])

    const fetchInsights = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get(`${API_BASE_URL}/api/insights`)
            setInsights(data)
        } catch {
            console.warn('Could not fetch insights from API')
        } finally {
            setLoading(false)
        }
    }

    const addInsight = useCallback(async (insight) => {
        const token = localStorage.getItem('adminToken')
        const { data } = await axios.post(`${API_BASE_URL}/api/insights`, insight, {
            headers: { Authorization: `Bearer ${token}` },
        })
        setInsights((prev) => [data, ...prev])
        return data
    }, [])

    const updateInsight = useCallback(async (slug, updated) => {
        const token = localStorage.getItem('adminToken')
        const { data } = await axios.put(`${API_BASE_URL}/api/insights/${slug}`, updated, {
            headers: { Authorization: `Bearer ${token}` },
        })
        setInsights((prev) => prev.map((i) => (i.slug === slug ? data : i)))
        return data
    }, [])

    const deleteInsight = useCallback(async (slug) => {
        const token = localStorage.getItem('adminToken')
        await axios.delete(`${API_BASE_URL}/api/insights/${slug}`, {
            headers: { Authorization: `Bearer ${token}` },
        })
        setInsights((prev) => prev.filter((i) => i.slug !== slug))
    }, [])

    const getBySlug = useCallback((slug) => {
        return insights.find((i) => i.slug === slug)
    }, [insights])

    const getRelated = useCallback((slugs) => {
        return slugs.map((s) => insights.find((i) => i.slug === s)).filter(Boolean)
    }, [insights])

    return (
        <InsightsContext.Provider value={{ insights, loading, fetchInsights, addInsight, updateInsight, deleteInsight, getBySlug, getRelated }}>
            {children}
        </InsightsContext.Provider>
    )
}

export function useInsights() {
    const ctx = useContext(InsightsContext)
    if (!ctx) throw new Error('useInsights must be used within InsightsProvider')
    return ctx
}
