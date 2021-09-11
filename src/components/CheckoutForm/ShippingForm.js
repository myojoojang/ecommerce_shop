import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';

import CustomInputForm from './CustomInputForm';
import { commerce } from '../../lib/commerce';
// import Title from '../Title/Title';

const ShippingForm = ({ checkoutToken, next }) => {
  const methods = useForm()

  const [countries, setCountries] = useState([])
  const [selCountry, setSelCountry] = useState('')
  const [provinces, setProvinces] = useState([])
  const [selProvince, setSelProvince] = useState('')
  const [shippingOptions, setShippingOptions] = useState([])
  const [selShippingOption, setSelShippingOption] = useState('')

  /* entries : 오브젝트의 키와 발류를 받아서 어레이로 */
  const countriesArray = Object.entries(countries).map(([code, name]) => (
    { id: code, label: name }
  ))
  const provincesArray = Object.entries(provinces).map(([code, name]) => (
    { id: code, label: name }
  ))

  const options = shippingOptions.map((o) => ({ id: o.id, label: `${o.description} - ${o.price.formatted_with_code}` }))

  const getShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId)
    setCountries(countries)
    setSelCountry(Object.keys(countries)[0])
  }

  const getProvinces = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode)
    setProvinces(subdivisions)
    setSelProvince(Object.keys(subdivisions)[0])
  }

  const getShippingOptions = async (checkoutTokenId, cntr, region = null) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country: cntr, region: region })

    setShippingOptions(options)
    setSelShippingOption(options[0].id)

  }

  useEffect(() => {
    getShippingCountries(checkoutToken.id)
  }, [])

  useEffect(() => {
    if (selCountry) getProvinces(selCountry)
  }, [selCountry])

  useEffect(() => {
    if (selProvince) getShippingOptions(checkoutToken.id, selCountry, selProvince)
  }, [selProvince])

  return (
    <>


      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => next({ ...data, selCountry, selProvince, selShippingOption }))}>
          <Grid container spacing={3}>
            <CustomInputForm required name="email" label="Email" />
            <CustomInputForm required name="firstName" label="First Name" />
            <CustomInputForm required name="lastName" label="Last Name" />
            <CustomInputForm required name="address" label="Address" />
            <CustomInputForm required name="city" label="City" />

            <CustomInputForm required name="zip" label="ZIP" />


            <Grid item xs={12} sm={6}>
              <InputLabel>Country</InputLabel>
              <Select value={selCountry} fullWidth onChange={(e) => setSelCountry(e.target.value)}>

                {
                  countriesArray.map((cntr) => (
                    <MenuItem key={cntr.id} value={cntr.id}>
                      {cntr.label}
                    </MenuItem>
                  ))
                }

              </Select>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputLabel>Province</InputLabel>
              <Select value={selProvince} fullWidth onChange={(e) => setSelProvince(e.target.value)}>
                {
                  provincesArray.map((p) => (
                    <MenuItem key={p.id} value={p.id}>
                      {p.label}
                    </MenuItem>
                  ))
                }
              </Select>
            </Grid>

            <Grid item xs={12} >
              <InputLabel>Shipping Options</InputLabel>
              <Select value={selShippingOption} fullWidth onChange={(e) => setSelShippingOption(e.target.value)}>
                {
                  options.map((o) => (
                    <MenuItem key={o.id} value={o.id}>
                      {o.label}
                    </MenuItem>
                  ))
                }
              </Select>
            </Grid>
          </Grid>
          <br />

          <div style={{ textAlign: 'right' }}>
            <Button component={Link} to='/cart'>Cancel</Button>
            <Button type='submit' color='black' style={{ background: '#00ff00', borderRadius: 0, marginLeft: '10px' }}>Next</Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
}

export default ShippingForm;
