import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import adminBg from '../../assets/admin.png'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export default function AdminLoginPage() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        if (!email || !password) {
            setError('Please enter both email and password.')
            return
        }

        setLoading(true)
        try {
            const { data } = await axios.post(`${API_BASE_URL}/api/auth/login`, { email, password })

            localStorage.setItem('adminToken', data.access_token)
            localStorage.setItem('adminEmail', data.email)
            navigate('/admin/dashboard')
        } catch (err) {
            setError(err.response?.data?.detail || 'Unable to connect to server. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div style={{
            minHeight: '100vh',
            width: '100%',
            backgroundImage: `url(${adminBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 24,
        }}>
            <form onSubmit={handleSubmit} style={{
                width: '100%',
                maxWidth: 464,
                padding: 48,
                background: 'rgba(255, 255, 255, 0.85)',
                boxShadow: '0px 32px 48px rgba(25, 28, 29, 0.06)',
                borderRadius: 8,
                backdropFilter: 'blur(10px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 32,
            }}>
                {/* Header */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <div style={{
                        color: '#43474F',
                        fontSize: 10,
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        lineHeight: '15px',
                        letterSpacing: 1.5,
                    }}>Administrative Portal</div>
                    <div style={{
                        color: '#001736',
                        fontSize: 30,
                        fontFamily: 'Manrope, sans-serif',
                        fontWeight: 800,
                        lineHeight: '36px',
                    }}>ETOH Admin Portal</div>
                    <div style={{
                        color: '#43474F',
                        fontSize: 14,
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        lineHeight: '22.75px',
                        marginTop: 4,
                    }}>
                        Enter your credentials to access the operational<br />infrastructure.
                    </div>
                </div>

                {/* Error Message */}
                {error && (
                    <div style={{
                        padding: '12px 16px',
                        background: '#FEF2F2',
                        border: '1px solid rgba(220,38,38,0.2)',
                        borderRadius: 6,
                        color: '#DC2626',
                        fontSize: 13,
                        fontFamily: 'Inter, sans-serif',
                    }}>{error}</div>
                )}

                {/* Form Fields */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24, paddingBottom: 16 }}>
                    {/* Email */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        <label style={{
                            color: '#43474F',
                            fontSize: 11,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            lineHeight: '16.5px',
                            letterSpacing: 0.55,
                        }}>Professional Email/Username</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="admin@clinicalarchitect.io"
                            style={{
                                width: '100%',
                                height: 48,
                                paddingLeft: 16,
                                paddingRight: 16,
                                background: '#F3F4F5',
                                borderRadius: 4,
                                border: 'none',
                                outline: 'none',
                                color: '#191C1D',
                                fontSize: 14,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                boxSizing: 'border-box',
                            }}
                        />
                    </div>

                    {/* Password */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        <label style={{
                            color: '#43474F',
                            fontSize: 11,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            lineHeight: '16.5px',
                            letterSpacing: 0.55,
                        }}>Password</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••••••"
                                style={{
                                    width: '100%',
                                    height: 48,
                                    paddingLeft: 16,
                                    paddingRight: 44,
                                    background: '#F3F4F5',
                                    borderRadius: 4,
                                    border: 'none',
                                    outline: 'none',
                                    color: '#191C1D',
                                    fontSize: 14,
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 400,
                                    boxSizing: 'border-box',
                                }}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{
                                    position: 'absolute',
                                    right: 14,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: 0,
                                    color: '#C4C6D0',
                                    fontSize: 14,
                                }}
                            >
                                {showPassword ? '🙈' : '👁'}
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            width: '100%',
                            height: 56,
                            background: loading ? '#6B7280' : 'linear-gradient(90deg, #001736 0%, #002B5B 100%)',
                            borderRadius: 4,
                            border: 'none',
                            boxShadow: '0px 4px 6px -4px rgba(0, 23, 54, 0.10), 0px 10px 15px -3px rgba(0, 23, 54, 0.10)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 12,
                            cursor: loading ? 'not-allowed' : 'pointer',
                            opacity: loading ? 0.7 : 1,
                        }}
                    >
                        <span style={{
                            color: 'white',
                            fontSize: 14,
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 700,
                            lineHeight: '20px',
                            letterSpacing: 0.35,
                        }}>{loading ? 'Authenticating...' : 'Secure Access'}</span>
                        {!loading && (
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M9.5 5.5H2.5M9.5 5.5L6.5 2.5M9.5 5.5L6.5 8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Footer badges */}
                <div style={{
                    paddingTop: 16,
                    borderTop: '1px solid rgba(196, 198, 208, 0.10)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <div style={{
                        paddingLeft: 12,
                        paddingRight: 12,
                        paddingTop: 6,
                        paddingBottom: 6,
                        background: '#E7E8E9',
                        borderRadius: 12,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                    }}>
                        <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                            <path d="M5 0L0 2V5.5C0 8.55 2.13 11.37 5 12C7.87 11.37 10 8.55 10 5.5V2L5 0Z" fill="#006970" />
                        </svg>
                        <span style={{
                            color: '#191C1D',
                            fontSize: 9,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            lineHeight: '13.5px',
                            letterSpacing: 0.45,
                        }}>AES-256 Encryption</span>
                    </div>
                    <div style={{
                        paddingLeft: 12,
                        paddingRight: 12,
                        paddingTop: 6,
                        paddingBottom: 6,
                        background: '#E7E8E9',
                        borderRadius: 12,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                    }}>
                        <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                            <path d="M5 0L0 2V5.5C0 8.55 2.13 11.37 5 12C7.87 11.37 10 8.55 10 5.5V2L5 0Z" fill="#006970" />
                        </svg>
                        <span style={{
                            color: '#191C1D',
                            fontSize: 9,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            lineHeight: '13.5px',
                            letterSpacing: 0.45,
                        }}>MFA Required</span>
                    </div>
                </div>
            </form>
        </div>
    )
}
