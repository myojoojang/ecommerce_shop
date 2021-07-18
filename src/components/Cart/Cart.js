import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import useStyles from './styles';

const Cart = ({ cart }) => {
  const classes = useStyles()
  const isEmpty = !cart.line_items.length

  const EmptyList = () => (
    <Typography variant="h6">There is nothing in your cart!</Typography>
  )

  const CartList = () => (
    <>
      <Grid container spacing={3}>
        {cart && cart.line_items.map(i => (
          <Grid item xs={12} key={i.id} className={classes.itemGrid}>
            <img src={i.media.source} className={classes.thumbnail} />
            <div className={classes.itemGridDetail}>
              <Typography variant="h6">{i.name}</Typography>
            </div>
          </Grid>
        ))}
      </Grid>
      <div className={classes.cartDetails}>
        <Typography variant="h5">
          Total: {cart.subtotal.formatted_with_code}
        </Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
          <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>

      </div>
    </>
  )
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h4">Shopping Cart</Typography>

      {isEmpty ? <EmptyList /> : <CartList />}

    </Container>
  )
}

export default Cart;
