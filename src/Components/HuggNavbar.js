import React from 'react';
import { Link } from 'react-router-dom';
import { Box, IconButton, Button, Container } from '@mui/material';
import {
  AcUnit,
  AccountCircle,
  Search,
  FormatListBulleted,
  AddBox,
} from '@mui/icons-material';
import logo from '../logo.svg';
import HAppBar from '../Interfaces/HAppBar';

const HuggNavbar = () => {
  return (
    <HAppBar>
      <Container>
        <Box display="flex">
          <Box flexGrow={1}>
            <IconButton component={Link} to={`/`}>
              <AcUnit />
            </IconButton>
          </Box>
          <Box sx={{ backgroundColor: '#0d6efd', color: '#e9f2ff' }}>
            <IconButton color="inherit" type="submit" aria-label="search">
              <Search />
            </IconButton>
            <IconButton color="inherit" component={Link} to={'/list/1'}>
              <FormatListBulleted />
            </IconButton>
            <IconButton color="inherit" component={Link} to={'/create'}>
              <AddBox />
            </IconButton>
            <IconButton color="inherit" component={Link} to={'/users'}>
              <AccountCircle />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </HAppBar>
  );
};

export default HuggNavbar;
