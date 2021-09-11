import React from 'react';
import { Typography, List, ListItem, ListItemText, Divider } from '@material-ui/core';

const PaymentReview = ({ checkoutToken }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom >Order Summary</Typography>
      <List disablePadding>
        {checkoutToken.live.line_items.map((product) => (
          <ListItem style={{ pading: '10px 0' }} key={product.name}>
            <ListItemText primary={product.name} secondary={`Quantity:${product.quantity}`} />

            <Typography variant="body2">{product.line_total.formatted_with_code}</Typography>

          </ListItem>
        ))}

        <Divider style={{ marginTop: '20px', marginBottom: '20px' }} />

        <ListItem style={{ padding: '10px 0' }}>
          <ListItemText primary="Total" style={{ fontWeight: 700 }} />
          <Typography varient='subtitle1'>
            {checkoutToken.live.subtotal.formatted_with_code}
          </Typography>



        </ListItem>
      </List>

    </>
  );
}

export default PaymentReview;
