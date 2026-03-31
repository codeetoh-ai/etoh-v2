import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const ClinicalContext = createContext(null)

export function ClinicalProvider({ children }) {
    const [clinical, setClinical] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => { fetchClinical() }, [])

    const fetchClinical = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get(`${API_BASE_URL}/api/clinical-perspectives`)
            setClinical(data || null)
        } catch {
            setClinical(null)
        } finally {
            setLoading(false)
        }
    }

    const updateClinical = useCallback(async (updates) => {
        const token = localStorage.getItem('adminToken')
        const { data } = await axios.put(`${API_BASE_URL}/api/clinical-perspectives`, updates, {
            headers: { Authorization: `Bearer ${token}` },
        })
        setClinical(data || null)
        return data
    }, [])

    return (
        <ClinicalContext.Provider value={{ clinical, loading, fetchClinical, updateClinical }}>
            {children}
        </ClinicalContext.Provider>
    )
}

export function useClinical() {
    const ctx = useContext(ClinicalContext)
    if (!ctx) throw new Error('useClinical must be used within ClinicalProvider')
    return ctx
}
