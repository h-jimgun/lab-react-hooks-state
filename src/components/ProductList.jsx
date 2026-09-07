import React from 'react'
import ProductCard from './ProductCard'

export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false },
  { id: 3, name: 'Banana', price: '$0.50', category: 'Fruits', inStock: true },
  { id: 4, name: 'Cheese', price: '$3.00', category: 'Dairy', inStock: true },
  { id: 5, name: 'Orange', price: '$0.75', category: 'Fruits', inStock: true },
  { id: 6, name: 'Yogurt', price: '$1.50', category: 'Dairy', inStock: false },
]

const ProductList = ({ selectedCategory, cart, setCart }) => {
 
  const filteredProducts = selectedCategory === 'all'
    ? sampleProducts
    : sampleProducts.filter(
        (product) => product.category === selectedCategory
      )


  const addToCart = (product) => {
   
    const existingItem = cart.find((item) => item.id === product.id)
    if (!existingItem) {
      setCart([...cart, product])
    }
  }

  return (
    <div>
      <h2>Available Products</h2>

      {filteredProducts.length === 0 ? (
        <p>No products available in this category.</p>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            addToCart={addToCart}
          />
        ))
      )}
    </div>
  )
}

export default ProductList
