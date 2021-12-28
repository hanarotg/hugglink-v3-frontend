import React from 'react';
import { Container, Box, Typography } from '@mui/material';

const HuggFooter = () => {
  return (
    <Container>
      <Box py={3}>
        <center>
          <Typography variant="caption">
            @2021 ~ hugg.link all right reserved
          </Typography>
        </center>
      </Box>
    </Container>
  );
};

export default HuggFooter;
