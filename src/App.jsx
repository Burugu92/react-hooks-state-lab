import React, { useState, useEffect } from 'react'
import { ProductList } from './components/ProductList'
import { DarkModeToggle } from './components/DarkModeToggle'
import { Cart } from './components/Cart'
import './App.css'

const App = () => {
  // State for dark mode toggle
  const [darkMode, setDarkMode] = useState(false)

  // State for cart management
  const [cartItems, setCartItems] = useState([])

  // State for category filtering
  const [selectedCategory, setSelectedCategory] = useState('all')

  
    useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode'
  }, [darkMode])

  // Function to add items to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)
      
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevItems, { ...product, quantity: 1 }]
      }
    })
  }

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Category Filter */}

      <label htmlFor="category-select">Filter by Category: </label>
      <select 
        id="category-select"
        value={selectedCategory} 
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList 
        selectedCategory={selectedCategory} 
        addToCart={addToCart}
        darkMode={darkMode}
      />

      <Cart cartItems={cartItems} darkMode={darkMode} />
    </div>
  )
}

export default App 
