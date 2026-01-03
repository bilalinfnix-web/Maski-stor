import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = ({ user, setUser }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar user={user} setUser={setUser} />
      
      {/* مكان لإعلانات A-ads */}
      <div className="container mx-auto px-4 py-2">
        <div className="bg-gray-800 rounded-lg p-4 mb-6 text-center">
          <p className="text-sm text-gray-400">إعلانات A-ads ستظهر هنا</p>
          {/* سيتم إضافة كود JavaScript لـ A-ads هنا */}
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="bg-gray-800 border-t border-gray-700 py-6">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-accent mb-2">MAS Ki stor</h2>
          <p className="text-gray-400">متجرك الموثوق للحسابات، القسائم والمتابعين</p>
          <div className="mt-4">
            <p className="text-gray-500">© 2024 MAS Ki stor. جميع الحقوق محفوظة</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
