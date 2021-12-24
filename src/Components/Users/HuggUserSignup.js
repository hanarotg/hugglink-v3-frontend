import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
import { Container, Box, Typography, Link } from '@mui/material';
import HTextInput from '../../Interfaces/HTextInput';
import HButton from '../../Interfaces/HButton';

const HuggUserSignup = () => {
  const [errorMsg, setErrorMsg] = useState('');

  // 회원가입 요청
  const signupUser = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData(document.getElementById('signupForm'));

      await axios.post(
        `${process.env.REACT_APP_BACKEND}/users/signup`,
        formData
      );
    } catch (error) {
      setErrorMsg(error.response.data.error);
    }
  };

  return (
    <Container>
      <center>
        <Box pt={3} sx={{ maxWidth: 480 }}>
          <Typography variant="h5">회원가입</Typography>
          {errorMsg}
          <form onSubmit={signupUser} id="signupForm">
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
              <HTextInput
                name="passwordCheck"
                type="password"
                placeholder="비밀번호 확인"
                fullWidth
              />
            </Box>
            <Box p={1}>
              회원가입 진행시
              <Link component={RouterLink} to={'/'}>
                허그 이용약관
              </Link>
              에 동의하는 것으로 간주합니다.
            </Box>
            <Box p={1}>
              <HButton variant="outlined" type="submit" fullWidth>
                회원가입
              </HButton>
            </Box>
            <Box p={1}>
              이미 계정이 있나요?{' '}
              <Link component={RouterLink} to={'/users'}>
                로그인
              </Link>
            </Box>
          </form>
        </Box>
      </center>
    </Container>
  );
};

export default HuggUserSignup;
