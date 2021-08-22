import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Grid } from '@material-ui/core'
import useStyles from './styles';

import CartItem from './CartItem/CartItem';
import Title from '../Title/Title';

const Cart = ({ cart, actionEmptyCart, actionDeleteItemIncart, actionUpdateCartQty }) => {
  const classes = useStyles()
  const items = cart.line_items.length
  useEffect(() => {

    document.title = items > 0 ? `Hey, u have ${items} things in ur cart! ` : `U need to add someting!`
  }, [items]);

  const EmptyList = () => (
    <div className={classes.center}>
      <Typography variant="h6">There is nothing in your cart!
      </Typography>
      <Button component={Link} to='/products'
        className={classes.checkoutButton}
        style={{ marginTop: '20px', boxShadow: "10px 10px 0px -1px #000000" }}
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
          <Button className={classes.checkoutButton}
            component={Link} to='/checkout'
            size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>

      </div>
    </div>
  )

  if (!cart.line_items) return 'Loading'

  return (
    <Container style={{ paddingTop: '30px' }}>
      <div className={classes.toolbar} />
      <Title title={'Shopping Cart'}></Title>

      {!items ? <EmptyList /> : <CartList />}

    </Container>
  )
}

export default Cart;
