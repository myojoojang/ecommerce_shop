import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product/Product'

import useStyles from './styles'

const products = [
  { id: 1, name: 'Shoes', description: 'running shoes', price: 'free', img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/38277b478a79419abf6da998000ab640_9366/Runfalcon_Shoes_Black_F36218_01_standard.jpg' },
  { id: 2, name: 'Bag', description: 'running shoes', price: 'free', img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/38277b478a79419abf6da998000ab640_9366/Runfalcon_Shoes_Black_F36218_01_standard.jpg' },

]

const Products = () => {
  const classes = useStyles()
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>

        ))}
      </Grid>

    </main>
  )
}

export default Products
