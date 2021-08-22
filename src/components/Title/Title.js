import React from 'react';
import { Typography } from '@material-ui/core';
const Title = ({ title }) => {
  return (
    <Typography variant="h4" gutterBottom style={{ fontWeight: 700 }}>
      {title}
    </Typography>
  );
}

export default Title;
