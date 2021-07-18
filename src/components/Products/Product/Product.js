import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core'
import { AddShoppingCart, ClassRounded } from '@material-ui/icons'

import useStyles from './styles'


const Product = ({ product, onAddToCart }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.media.source} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom className={classes.name}>
            {product.name}
          </Typography>

        </div>
        <Typography className={classes.price}>
          {product.price.formatted_with_code}
        </Typography>

      </CardContent>

      <CardActions disableSpacing className={classes.cardActions}>
        <Button className={classes.button} onClick={() => onAddToCart(product.id, 1)} aria-label="Add to Cart">Add to Cart</Button>

      </CardActions>
    </Card >
  )
}

export default Product
