import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, TextField, Button } from '@mui/material';
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
      <h1>
        {title}
        편집
      </h1>
      <form onSubmit={editPage} id="editForm">
        <img src={page && page.logoUrl} alt="logo" />
        <img src={logo} alt="logoAfter" />
        <input
          type="file"
          accept="image/*"
          name="file"
          onChange={(e) => {
            setLogo(e.target.files[0]);
          }}
        />
        <TextField
          name="content"
          fullWidth
          multiline
          rows={20}
          defaultValue={page && page.content}
        />
        <Button type="submit" variant="contained">
          수정 완료
        </Button>
      </form>
    </Container>
  );
};

export default HuggPageEdit;
