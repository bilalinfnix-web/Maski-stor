hereimport React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({ user, setUser }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('user')
    navigate('/')
  }

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          
          {/* الشعار */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
              <span className="font-bold text-xl">M</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              MAS Ki stor
            </h1>
          </Link>

          {/* القوائم الرئيسية - للشاشات الكبيرة */}
          <div className="hidden md:flex space-x-8">
            <Link to="/accounts" className="hover:text-accent transition-colors font-semibold">
              🎮 حسابات فري فاير
            </Link>
            <Link to="/vouchers" className="hover:text-accent transition-colors font-semibold">
              💎 قسائم جواهر
            </Link>
            <Link to="/followers" className="hover:text-accent transition-colors font-semibold">
              📱 متابعين وسائل التواصل
            </Link>
          </div>

          {/* أزرار المستخدم */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/dashboard" className="bg-primary hover:bg-blue-700 px-4 py-2 rounded-lg transition">
                  لوحة التحكم
                </Link>
                <button 
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition"
                >
                  تسجيل خروج
                </button>
                {user.isAdmin && (
                  <Link to="/admin" className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition">
                    لوحة الأدمن
                  </Link>
                )}
              </>
            ) : (
              <>
                <Link to="/login" className="bg-primary hover:bg-blue-700 px-4 py-2 rounded-lg transition">
                  تسجيل دخول
                </Link>
                <Link to="/register" className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition">
                  إنشاء حساب
                </Link>
              </>
            )}
            
            {/* زر القائمة للموبايل */}
            <button 
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* القائمة المنسدلة للموبايل */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <Link to="/accounts" className="hover:text-accent transition-colors">
                🎮 حسابات فري فاير
              </Link>
              <Link to="/vouchers" className="hover:text-accent transition-colors">
                💎 قسائم جواهر
              </Link>
              <Link to="/followers" className="hover:text-accent transition-colors">
                📱 متابعين وسائل التواصل
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
