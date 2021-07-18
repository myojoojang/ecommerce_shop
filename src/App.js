import React, { useState, useEffect } from 'react'
import { Products, Navbar, Cart } from './components'
import { commerce } from './lib/commerce'

import { createMuiTheme, ThemeProvider } from '@material-ui/core';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00ff00"
    },
    secondary: {
      main: "#ff40ff"
    }
  }
})

const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})

  const initProducts = async () => {
    const { data } = await commerce.products.list()
    setProducts(data)
  }
  const initCart = async () => {
    setCart(await commerce.cart.retrieve())
  }
  const actionAddtoCart = async (id, qt) => {
    const item = await commerce.cart.add(id, qt)
    setCart(item.cart)
  }

  useEffect(() => {
    initProducts()
    initCart()
  }, [])

  console.log(cart)
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Products products={products} onAddToCart={actionAddtoCart} />

        {cart.id ? <Cart cart={cart} /> : null}
      </div>
    </ThemeProvider>
  )
}

export default App
