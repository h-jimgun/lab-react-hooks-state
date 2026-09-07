import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {

  const [darkMode, setDarkMode] = useState(false)

  
  const [cart, setCart] = useState([])

  const [selectedCategory, setSelectedCategory] = useState('all')

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <h1> Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/*  Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      {/*  Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList 
        selectedCategory={selectedCategory}
        cart={cart}
        setCart={setCart}
      />

     
      <Cart cart={cart} />
    </div>
  )
}

export default App
