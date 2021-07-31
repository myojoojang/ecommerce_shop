import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';

import useStyles from './styles';
import { Delete } from '@material-ui/icons';

const CartItem = ({ item, onUpdateCartQty, onDeleteItemIncart }) => {
  const classes = useStyles()
  return (
    <>
      <Grid item xs={12} className={classes.itemGrid}>
        <div className={classes.itemGridDetail}>
          <img src={item.media.source} className={classes.thumbnail} />
          <div className={classes.itemGridText}>
            <Typography variant="h5">{item.name}</Typography>
            <Typography variant="subtitle2">{item.line_total.formatted_with_code}</Typography>
            <div>
              <Button onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
                type="button" size="small" className={classes.buttons}> -
              </Button>
              <span>{item.quantity}</span>
              <Button onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
                type="button" size="small" className={classes.buttons} > +
              </Button>
            </div>
          </div>
        </div>

        <div className={classes.deleteButtonBox}>
          <Button onClick={() => onDeleteItemIncart(item.id)} type="button" size="small" className={classes.buttons} ><Delete />
          </Button>

        </div>
      </Grid>

    </>
  );
}

export default CartItem;
