import React from 'react';
import { Link } from 'react-router-dom';
import { Box, IconButton, Button, Container } from '@mui/material';
import { AccountCircle, Search } from '@mui/icons-material';
import logo from '../logo.svg';
import HAppBar from '../Interfaces/HAppBar';
import HSearchInput from '../Interfaces/HSearchInput';

const HuggNavbar = () => {
  return (
    <HAppBar color="info">
      <Container>
        <Box display="flex" py={1}>
          <Box flexGrow={1}>
            <Button component={Link} to={`/`}>
              <img src={logo} alt="hugg.link logo" />
            </Button>
            <Button color="secondary" component={Link} to={'/list/1'}>
              목록
            </Button>
            <Button color="secondary" component={Link} to={'/create'}>
              생성
            </Button>
          </Box>
          <Box>
            <HSearchInput placeholder="검색어를 입력하세요." />
            <IconButton type="submit" aria-label="search">
              <Search />
            </IconButton>
            <IconButton component={Link} to={'/users'}>
              <AccountCircle />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </HAppBar>
  );
};

export default HuggNavbar;
