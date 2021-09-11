import React, { useState, useEffect } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import useStyles from './styles'


import ShippingForm from '../ShippingForm';
import PaymentForm from '../PaymentForm';
import Confirm from '../Confirm';
import Title from '../../Title/Title';

import { commerce } from '../../../lib/commerce';

const steps = ['Shipping Info', 'Payment Details']

const Checkout = ({ cart }) => {

  const classes = useStyles()
  const [currentStep, setCurrentStep] = useState(0)
  const [checkoutToken, setCheckoutToken] = useState(null)
  const [shippingData, setShippingData] = useState({})


  useEffect(() => {
    // useEffect에서 async 바로 붙일수 없음으로 안에 비동기 함수 만들고 바로 콜
    const getToken = async () => {
      try {

        const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' })

        // console.log(token)
        setCheckoutToken(token)


      } catch (error) {

      }
    }

    getToken()

  }, [cart])

  const nextStep = () => setCurrentStep((preStep) => preStep + 1) // 전에 꺼랑 비교해서 할려서 매개변수에 전 데이터를 불러와서 변형하는 식으로 해야함
  const backStep = () => setCurrentStep((preStep) => preStep - 1)

  const next = (data) => {
    setShippingData(data)
    nextStep()
  }

  const Form = () => (
    currentStep === 0
      ? <ShippingForm checkoutToken={checkoutToken} next={next} />
      : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} />

  )
  return (
    <>
      <div className={classes.toolbar} />

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Title title={'Checkout'} />

          <Stepper activeStep={currentStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>

            ))}
          </Stepper>
          {currentStep === steps.length
            ? <Confirm />
            : checkoutToken && <Form />
          }
        </Paper>
      </main>

    </>
  );
}

export default Checkout;
