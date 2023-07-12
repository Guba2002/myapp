import React from 'react'
import Header from '../components/Header'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Product from './Product'

export default function Home() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </div>
  )
}
