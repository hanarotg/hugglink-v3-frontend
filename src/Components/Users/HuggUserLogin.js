import React, { useState } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { Container, Box, Typography, Link } from '@mui/material';
import HTextInput from '../../Interfaces/HTextInput';
import HButton from '../../Interfaces/HButton';
import axios from 'axios';

const HuggUserLogin = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const history = useHistory();

  // 로그인
  const loginUser = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData(document.getElementById('loginForm'));

      await axios.post(
        `${process.env.REACT_APP_BACKEND}/users/login`,
        formData,
        {
          withCredentials: true,
        }
      );

      window.location.replace('/');
    } catch (error) {
      setErrorMsg(error.response.data.error);
    }
  };

  return (
    <Container>
      <center>
        <Box pt={3} sx={{ maxWidth: 480 }}>
          <Typography variant="h5">로그인</Typography>
          {errorMsg}
          <form onSubmit={loginUser} id="loginForm">
            <Box p={1}>
              <HTextInput name="email" placeholder="이메일" fullWidth />
            </Box>
            <Box p={1}>
              <HTextInput
                name="password"
                type="password"
                placeholder="비밀번호"
                fullWidth
              />
            </Box>
            <Box p={1}>
              <HButton type="submit" variant="contained" fullWidth>
                로그인
              </HButton>
            </Box>
          </form>
          <Box p={1}>
            아직 회원이 아니시라면
            <Link component={RouterLink} to={'/users/signup'}>
              회원가입
            </Link>
          </Box>
        </Box>
      </center>
    </Container>
  );
};

export default HuggUserLogin;
