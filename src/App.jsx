import { useState } from 'react'
import './App.css'
import Appbar from './components/Appbar'
import AppbarMui from './components/AppbarMui'
import Footer from './components/Footer';
import Count from './views/Count'
import Login from './views/Login'
import Users from './views/Users'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
import { Box } from '@mui/material';

/*
PARA MARCAR ERROR 404 PERO CON PÁGINA PERSONALIZADA
*/

const API_URL="http://localhost:5000";

function Layout({ logout }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppbarMui logout={logout} />
      <Box sx={{ flex: 1 }}> {/* esto empuja el footer hacia abajo */}
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

function App() {
  const [isLogin, setIsLogin] = useState(false)

  const login = async (user) => {
    const res = await fetch(API_URL + "/login", {
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(user)
    })
    const data = await res.json();
    setIsLogin(data.isLogin)
    return data;
  }

  const logout = () => {
    setIsLogin(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login login={login} />} />

        <Route element={<Layout logout={logout} />}>
          <Route path='/count' element={<Count />} />
          <Route path='/users' element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App