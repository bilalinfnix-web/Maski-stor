import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Accounts from './pages/Accounts'
import Vouchers from './pages/Vouchers'
import Followers from './pages/Followers'
import Dashboard from './pages/Dashboard'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import AdminPanel from './components/Admin/AdminPanel'

function App() {
  const [user, setUser] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout user={user} setUser={setUser} />}>
          <Route index element={<Home />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="vouchers" element={<Vouchers />} />
          <Route path="followers" element={<Followers />} />
          <Route path="dashboard" element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} />
          <Route path="admin" element={isAdmin ? <AdminPanel /> : <Navigate to="/" />} />
        </Route>
        <Route path="/login" element={<Login setUser={setUser} setIsAdmin={setIsAdmin} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
