import React from 'react';
import { Link } from 'react-router-dom';
import { Box, IconButton, Button, Container } from '@mui/material';
import { AccountCircle, Search } from '@mui/icons-material';
import logo from '../logo.svg';
import HAppBar from '../Interfaces/HAppBar';
import HSearchInput from '../Interfaces/HSearchInput';

const HuggNavbar = () => {
  return (
    <HAppBar color="primary">
      <Container>
        <Box display="flex" py={1}>
          <Box flexGrow={1}>
            <Button color="inherit" component={Link} to={`/`}>
              hugg.link
            </Button>
            <Button color="inherit" component={Link} to={'/list/1'}>
              목록
            </Button>
            <Button color="inherit" component={Link} to={'/create'}>
              생성
            </Button>
          </Box>
          <Box>
            <HSearchInput placeholder="검색어를 입력하세요." />
            <IconButton type="submit" aria-label="search" color="inherit">
              <Search />
            </IconButton>
            <IconButton component={Link} to={'/users'} color="inherit">
              <AccountCircle />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </HAppBar>
  );
};

export default HuggNavbar;
