import React, { useEffect } from 'react'
import { Grid, Container } from '@material-ui/core'
import Product from './Product/Product'

import useStyles from './styles'
import Title from '../Title/Title'



const Products = ({ products, onAddToCart }) => {
  useEffect(() => {
    document.title = "Products ✨"
  }, []);
  const classes = useStyles()
  return (
    <>
      <Container style={{ padding: '50px 0' }}>

        <div className={classes.toolbar} />
        <Title title={'Products'} />
        <Grid container spacing={4}>
          {products.map(product => (
            <Grid item key={product.id} xs={12} sm={6} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>

          ))}
        </Grid>

      </Container>
    </>
  )
}

export default Products
