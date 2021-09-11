import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentReview from './PaymentReview';

const PaymentForm = ({ checkoutToken }) => {


  const stripePromise = loadStripe('..')
  return (
    <>
      <PaymentReview checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant='h6' gutterBottom style={{ margin: '20px 0' }}>
        Payment Method
      </Typography>
      <Elements stripe={stripePromise}>

        {/* check the stripe js DOC for this part */}
        <ElementConsumer>

          {({ el, stripe }) => (

            <form>
              <CardElement />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                <Button variant="text">Back</Button>
              </div>
            </form>

          )}
        </ElementConsumer>

      </Elements>
    </>
  );
}

export default PaymentForm;
