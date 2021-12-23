import React from 'react';
import { Link } from 'react-router-dom';
import { Textsms, Timeline, Edit } from '@mui/icons-material';
import { Box, Container, IconButton } from '@mui/material';

const HuggPageMenu = (props) => {
  const title = props.title;

  return (
    <Container>
      <Box fullWidth display="flex" justifyContent="flex-end">
        <Box sx={{ backgroundColor: '#c8c8c8', color: '#e9f2ff' }}>
          <IconButton color="inherit" component={Link} to={`/pages/${title}`}>
            <Textsms />
          </IconButton>
          <IconButton
            color="inherit"
            component={Link}
            to={`/pages/${title}/history`}
          >
            <Timeline />
          </IconButton>
          <IconButton
            color="inherit"
            component={Link}
            to={`/pages/${title}/edit`}
          >
            <Edit />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

export default HuggPageMenu;
