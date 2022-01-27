import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Button } from '@mui/material';
import HTextInput from '../../Interfaces/HTextInput';
import axios from 'axios';

const HuggPageCreate = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const history = useHistory();

  // 페이지 생성
  const createPage = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData(document.getElementById('createPageForm'));
      await axios.post(`${process.env.REACT_APP_BACKEND}/pages`, formData);
      // 페이지 이동
      history.push(`/list/1`);
    } catch (error) {
      setErrorMsg(error.response.data.error);
    }
  };

  return (
    <Container>
      {errorMsg}
      <h1>페이지 생성</h1>
      <form onSubmit={createPage} id="createPageForm">
        페이지명 : <HTextInput name="title" />
        <Button type="submit">생성요청</Button>
      </form>
    </Container>
  );
};

export default HuggPageCreate;
