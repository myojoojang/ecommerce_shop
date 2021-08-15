import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';


const CustomInputForm = ({ name, label, required }) => {
  const { control } = useFormContext()

  return (
    <Grid item xs={12} >
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            label={label}
            required={required}
          />
        )}
        control={control}
        name={name}

      />
    </Grid>
  );
}

export default CustomInputForm;
