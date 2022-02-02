import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { userContext } from '../Hugg';

import { Container, TextField, Box, Typography, Alert } from '@mui/material';
import SButton from '../../Interfaces/HButton';
import axios from 'axios';

const HuggPageEdit = ({ match }) => {
  const { title } = match.params;
  const [page, setPage] = useState({});
  const [logo, setLogo] = useState(null);
  const [ip, setIp] = useState('');
  const history = useHistory();
  const userEmail = useContext(userContext);

  // 무결성인 page 고유 _id로 데이터를 전송해야 한다.
  const editPage = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData(document.getElementById('editForm'));
      formData.append('author', userEmail ? userEmail : ip);
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

  // ip 수집(비로그인 사용자에 한함)
  const getIp = async () => {
    try {
      const response = await axios.get('https://geolocation-db.com/json/');
      setIp(response.data.IPv4);
    } catch (error) {}
  };

  // 로그인 비로그인 여부 확인
  const isUserAlert = (userEmail) => {
    if (userEmail) {
      return (
        <Alert severity="success">
          기여자 : {userEmail}으로 저장됩니다.
          <br />
          기여도에 따른 리워드 지급 시 반영됩니다.
        </Alert>
      );
    } else {
      getIp();
      return (
        <Alert severity="warning">
          현재 비로그인 상태이므로 문서 수정 시 작성자의 아이피({ip && ip})를
          수집합니다.
        </Alert>
      );
    }
  };

  useEffect(() => {
    const getPage = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND}/pages/${title}`
        );
        setPage(res.data);
      } catch (e) {
        setPage(null);
      }
    };

    getPage();
  }, [title]);

  return (
    <Container>
      <Box p={1}>{isUserAlert(userEmail)}</Box>
      <Typography variant="h4">편집</Typography>
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
            id="contentEdit"
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
