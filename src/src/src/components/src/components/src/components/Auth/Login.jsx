hereimport React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../../supabaseClient'

const Login = ({ setUser, setIsAdmin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // تسجيل الدخول
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password
      })

      if (error) throw error

      // جلب معلومات إضافية للمستخدم
      const { data: userData } = await supabase
        .from('users')
        .select('*')
        .eq('id', data.user.id)
        .single()

      const userInfo = {
        id: data.user.id,
        email: data.user.email,
        isAdmin: userData?.is_admin || false,
        name: userData?.name || ''
      }

      setUser(userInfo)
      setIsAdmin(userInfo.isAdmin)
      localStorage.setItem('user', JSON.stringify(userInfo))

      // التحقق من كلمة المرور الخاصة بالأدمن
      if (formData.password === 'Maski2026' || userInfo.isAdmin) {
        navigate('/admin')
      } else {
        navigate('/dashboard')
      }

    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          تسجيل الدخول إلى MAS Ki stor
        </h2>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">البريد الإلكتروني</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">كلمة المرور</label>
            <input
              type="password"
              required
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          {error && (
            <div className="bg-red-900/30 border border-red-700 text-red-300 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-bold py-3 px-4 rounded-lg transition disabled:opacity-50"
          >
            {loading ? 'جاري التسجيل...' : 'تسجيل الدخول'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400">
            ليس لديك حساب؟{' '}
            <Link to="/register" className="text-primary hover:underline">
              سجل هنا
            </Link>
          </p>
        </div>

        {/* دخول الأدمن */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-center text-gray-400 text-sm">
            للأدمن: استخدم كلمة المرور الخاصة
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
