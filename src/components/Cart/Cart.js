import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Grid } from '@material-ui/core'
import useStyles from './styles';

import CartItem from './CartItem/CartItem';

const Cart = ({ cart, actionEmptyCart, actionDeleteItemIncart, actionUpdateCartQty }) => {
  const classes = useStyles()

  const EmptyList = () => (
    <div className={classes.center}>
      <Typography variant="h6">There is nothing in your cart!
      </Typography>
      <Button component={Link} to='/products'
        className={classes.checkoutButton}
        size="large" type="button" variant="contained" color="primary">get some products</Button>
    </div>
  )

  const CartList = () => (
    <div className={classes.margin}>
      <Grid container spacing={3} >
        {cart && cart.line_items.map(item => (
          <CartItem
            onUpdateCartQty={actionUpdateCartQty}
            onDeleteItemIncart={actionDeleteItemIncart}
            item={item} key={item.id} />
        ))}
      </Grid>
      <div className={classes.cartDetails} >
        <Typography variant="h5">
          Total: {cart.subtotal.formatted_with_code}
        </Typography>
        <div>
          <Button className={classes.emptyButton} onClick={actionEmptyCart}
            size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
          <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>

      </div>
    </div>
  )

  if (!cart.line_items) return 'Loading'

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h4">Shopping Cart</Typography>

      {!cart.line_items.length ? <EmptyList /> : <CartList />}

    </Container>
  )
}

export default Cart;
