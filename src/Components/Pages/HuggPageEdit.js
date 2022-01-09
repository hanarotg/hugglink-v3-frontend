import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, TextField, Box, Typography } from '@mui/material';
import SButton from '../../Interfaces/HButton';
import axios from 'axios';

const HuggPageEdit = ({ match }) => {
  const { title } = match.params;
  const [page, setPage] = useState({});
  const [logo, setLogo] = useState(null);
  const history = useHistory();

  // 무결성인 page 고유 _id로 데이터를 전송해야 한다.
  const editPage = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData(document.getElementById('editForm'));
      await axios.patch(
        `${process.env.REACT_APP_BACKEND}/pages/${page._id}`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );
      // 페이지 이동
      history.push(`/pages/${title}`);
    } catch (error) {
      console.log(error);
    }
  };

  // 로그인 비로그인 여부 확인
  const isUserAlert = () => {};

  useEffect(() => {
    const getPage = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND}/pages/${match.params.title}`
        );
        setPage(res.data);
      } catch (e) {
        setPage(null);
      }
    };
    getPage();
  }, []);

  return (
    <Container>
      <Box p={1}></Box>
      <Typography variant="h4">
        {title}
        편집
      </Typography>
      <form onSubmit={editPage} id="editForm">
        <Box p={1}>
          <img src={page && page.logoUrl} width="240" alt="logo" />
          <img src={logo} alt="logoAfter" />

          <input
            type="file"
            accept="image/*"
            name="file"
            onChange={(e) => {
              setLogo(e.target.files[0]);
            }}
          />
        </Box>
        <Box p={1}>
          <TextField
            name="content"
            fullWidth
            multiline
            rows={20}
            defaultValue={page && page.content}
          />
        </Box>
        <Box p={1}>
          <SButton type="submit" variant="contained">
            수정 완료
          </SButton>
        </Box>
      </form>
      <Box p={1}>
        <SButton color="error" variant="outlined">
          삭제 요청
        </SButton>
      </Box>
    </Container>
  );
};

export default HuggPageEdit;
