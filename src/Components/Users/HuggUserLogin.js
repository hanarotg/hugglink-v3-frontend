import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Button } from '@mui/material';
import HTextInput from '../../Interfaces/HTextInput';
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
      {errorMsg}
      <h1>로그인</h1>
      <form onSubmit={loginUser} id="loginForm">
        이메일 : <HTextInput name="email" />
        비밀번호 : <HTextInput name="password" type="password" />
        <Button type="submit" variant="contained">
          로그인
        </Button>
      </form>
      <Link to={'/users/signup'}>회원가입</Link>
    </Container>
  );
};

export default HuggUserLogin;
