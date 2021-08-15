import React, { useState, useEffect } from 'react'
import { Main, Products, Navbar, Cart, Checkout } from './components'
import { commerce } from './lib/commerce'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { createMuiTheme, ThemeProvider } from '@material-ui/core';
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Roboto',
      'Arial',
      'sans-serif',

    ].join(','),
  },
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
    const { cart } = await commerce.cart.add(id, qt)
    setCart(cart)
  }

  const actionUpdateCartQty = async (id, qt) => {
    const res = await commerce.cart.update(id, { quantity: qt })
    setCart(res.cart)
  }

  const actionDeleteItemIncart = async (id) => {
    const res = await commerce.cart.remove(id)
    setCart(res.cart)
  }

  const actionEmptyCart = async () => {
    const res = await commerce.cart.empty()
    setCart(res.cart)
  }

  useEffect(() => {
    initProducts()
    initCart()
  }, [])

  // console.log(cart)
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div>
          <Navbar totalItems={cart.total_items} />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/products">
              <Products products={products} onAddToCart={actionAddtoCart} />
            </Route>
            <Route exact path="/cart">
              {cart.id
                ? <Cart
                  cart={cart}
                  actionUpdateCartQty={actionUpdateCartQty}
                  actionDeleteItemIncart={actionDeleteItemIncart}
                  actionEmptyCart={actionEmptyCart}
                />
                : null}

            </Route>
            <Route exact path='/checkout'>
              {cart.id ?
                <Checkout cart={cart} />
                : ''}

            </Route>
          </Switch>

        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App
