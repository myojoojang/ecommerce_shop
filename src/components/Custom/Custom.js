import React, { useEffect } from 'react';
import Title from '../Title/Title'
import { Container } from '@material-ui/core';

const Custom = () => {
  useEffect(() => {
    document.title = "Make custom neon signs 😍"
  }, []);
  return (
    <>
      <Container style={{ paddingTop: '30px' }}>
        <Title title={'Custom'} />
        <h1 style={{ marginTop: '200px', textAlign: 'center' }}>WIP!</h1>
      </Container>
    </>
  );
}

export default Custom;
