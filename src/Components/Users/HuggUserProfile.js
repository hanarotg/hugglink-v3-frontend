import React, { useContext } from 'react';
import { userContext } from '../Hugg';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import axios from 'axios';
import {
  Container,
  Box,
  Divider,
  Avatar,
  Grid,
  Typography,
  Link as RouterLink,
} from '@mui/material';
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
            <Grid container spacing={1} p={1}>
              <Grid item>
                <Avatar>{userEmail[0]}</Avatar>
              </Grid>
              <Grid item xs>
                {userEmail}
              </Grid>
            </Grid>
            <Divider />

            <Box p={1}>
              <Typography variant="subtitle2">
                * 주기적인 비밀번호 변경은 보안 사고 예방에 큰 도움이 됩니다.
              </Typography>
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
              <RouterLink color="secondary.light" component={Link} to="">
                회원탈퇴
              </RouterLink>
            </Box>
          </Box>
        </center>
      </Container>
    </>
  );
};

export default HuggUserProfile;
