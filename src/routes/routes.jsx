import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import LoginPage from '../pages/LoginPage'
import RegisterUser from '../pages/RegisterUser'
import AddTask from '../pages/AddTask'
import ListTask from '../pages/ListTask'
import About from '../pages/About'

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="registrar" element={<RegisterUser />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/cadastrar" element={<AddTask />} />
      <Route path="listar" element={<ListTask />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default MyRoutes
