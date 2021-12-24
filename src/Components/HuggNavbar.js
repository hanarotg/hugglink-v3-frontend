import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, IconButton, Container } from '@mui/material';
import { AccountCircle, Search } from '@mui/icons-material';
import logo from '../logo.svg';
import HAppBar from '../Interfaces/HAppBar';
import HSearchInput from '../Interfaces/HSearchInput';

const HuggNavbar = () => {
  return (
    <HAppBar>
      <Container>
        <Box display="flex">
          <Box flexGrow={1}>
            <IconButton component={RouterLink} to={`/`}>
              <img src={logo} width="24px" alt="logo" />
            </IconButton>
          </Box>
          <Box>
            <HSearchInput placeholder="검색어를 입력하세요." />
            <IconButton type="submit" aria-label="search">
              <Search />
            </IconButton>
            <IconButton component={RouterLink} to={'/users'}>
              <AccountCircle />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </HAppBar>
  );
};

export default HuggNavbar;
