import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Button } from '@mui/material';
import HTextInput from '../../Interfaces/HTextInput';

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
      {errorMsg}
      <h1>회원가입</h1>
      <form onSubmit={signupUser} id="signupForm">
        이메일 : <HTextInput name="email" />
        비밀번호 :
        <HTextInput name="password" type="password" />
        비밀번호 확인 :
        <HTextInput name="passwordCheck" type="password" />
        <Button type="submit">회원가입</Button>
      </form>
    </Container>
  );
};

export default HuggUserSignup;
