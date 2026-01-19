import React from 'react'
import {ProductCard} from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Banana', price: '$0.75', category: 'Fruits', inStock: false },
  { id: 3, name: 'Mango', price: '$1.50', category: 'Fruits', inStock: true },
  { id: 4, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false },
  { id: 5, name: 'Yogurt', price: '$3.00', category: 'Dairy', inStock: true },
  { id: 6, name: 'Ghee', price: '$1.95', category: 'Dairy', inStock: true }
]

const ProductList = ({ selectedCategory, addToCart, darkMode }) => {
  // Filter products by category
  const filteredProducts = selectedCategory === 'all' 
    ? sampleProducts 
    : sampleProducts.filter(product => product.category === selectedCategory)

  return (
    <div>
      <h2>Available Products</h2>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            addToCart={addToCart}
            darkMode={darkMode}
          />
        ))}
      </div>
    </div>
  )
}

export {ProductList}
