import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentReview from './PaymentReview';

const PaymentForm = ({ checkoutToken }) => {
  return (
    <>
      <PaymentReview checkoutToken={checkoutToken} />
    </>
  );
}

export default PaymentForm;
