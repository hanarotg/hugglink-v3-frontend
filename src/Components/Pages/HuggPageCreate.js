import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import HTextInput from '../../Interfaces/HTextInput';
import HButton from '../../Interfaces/HButton';
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
      <h1>페이지 생성</h1>
      {errorMsg}
      <form onSubmit={createPage} id="createPageForm">
        페이지명 : <HTextInput name="title" />
        <Box p={1}>
          <HButton variant="outlined" type="submit">
            생성요청
          </HButton>
        </Box>
      </form>
    </Container>
  );
};

export default HuggPageCreate;
