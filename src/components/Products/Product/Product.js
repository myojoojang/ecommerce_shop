import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './styles'


const Product = ({ product }) => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.img} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
      </CardContent>

      <CardActions disableSpacing className={classes.cardActions}>

        <Button className={classes.button} aria-label="Add to Cart">Add to Cart</Button>
        {/* <IconButton aria-label="Add to Cart">

          <AddShoppingCart color="white" />
        </IconButton> */}
      </CardActions>
    </Card >
  )
}

export default Product
