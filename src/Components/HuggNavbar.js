import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';

import { Box, IconButton, Container } from '@mui/material';
import { AccountCircle, Search } from '@mui/icons-material';
import logo from '../logo.svg';
import HAppBar from '../Interfaces/HAppBar';
import HSearchInput from '../Interfaces/HSearchInput';

const HuggNavbar = () => {
  const [searchPageTitle, setSearchPageTitle] = useState('');

  // 페이지 검색 또는 리스팅
  const searchPage = async () => {
    try {
      console.log(searchPageTitle);
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/pages/list/1`,
        { params: { title: searchPageTitle } }
      );
      console.log(response.data);
    } catch (error) {
      console.log('에러발생', error);
    }
  };

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
            <HSearchInput
              placeholder="검색어를 입력하세요."
              onChange={(event) => setSearchPageTitle(event.target.value)}
            />
            <IconButton onClick={() => searchPage()} aria-label="search">
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
