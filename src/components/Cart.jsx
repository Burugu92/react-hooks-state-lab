import React from 'react'

const Cart = ({ cartItems, darkMode }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} is in your cart. (Quantity: {item.quantity})
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export {Cart}
