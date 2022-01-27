import React, { useContext } from 'react';
import { userContext } from '../Hugg';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import axios from 'axios';
import { Container, Box, Divider } from '@mui/material';
import HButton from '../../Interfaces/HButton';

const HuggUserProfile = (props) => {
  const userEmail = useContext(userContext);
  // 로그아웃
  const logout = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND}/users/logout`,
        {},
        {
          withCredentials: true,
        }
      );

      window.location.replace('/');
    } catch (error) {}
  };

  return (
    <>
      <Helmet>
        <title>{userEmail} 프로필 - 허그링크</title>
      </Helmet>
      <Container>
        <center>
          <Box pt={3} sx={{ maxWidth: 480 }}>
            {userEmail}
            <Divider />

            <Box p={1}>
              <HButton fullWidth variant="contained" component={Link} to="">
                비밀번호 변경
              </HButton>
            </Box>
            <Box p={1}>
              <HButton
                fullWidth
                variant="outlined"
                component={Link}
                to="/users/login"
                onClick={logout}
              >
                로그아웃
              </HButton>
            </Box>
            <Box p={1} pt={10}>
              <HButton
                fullWidth
                variant="outlined"
                color="error"
                component={Link}
                to=""
              >
                회원탈퇴
              </HButton>
            </Box>
          </Box>
        </center>
      </Container>
    </>
  );
};

export default HuggUserProfile;
