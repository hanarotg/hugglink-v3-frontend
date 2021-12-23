import React from 'react';
import { Container, Box, Typography } from '@mui/material';

import logo from '../logo.svg';

const HuggIndex = () => {
  return (
    <Container>
      <Box fullWidth>
        <center>
          <img src={logo} alt="logo" width="100em" />
          <h3>hugg.link</h3>
          <Typography variant="h5">정보를 찾는 새로운 이정표</Typography>
        </center>
      </Box>
    </Container>
  );
};

export default HuggIndex;
