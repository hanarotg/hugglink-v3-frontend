import React, { useState, useEffect } from 'react';

import { Container, Typography, Box } from '@mui/material';
import axios from 'axios';
import { marked } from 'marked';
import HTag from '../../Interfaces/HTag';

const HuggPageContent = ({ match }) => {
  const { title } = match.params;
  const [page, setPage] = useState(null);

  // 마크다운 문법 파싱
  const getMarked = () => {
    return marked(`${page && page.content}`);
  };

  // 페이지 로딩
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
      <Box pb={2}>
        <HTag color="text" variant="outlined">
          {page && page.title}
        </HTag>
      </Box>

      {page && page.logoUrl ? (
        <img src={page.logoUrl} width={200} alt="logo" />
      ) : (
        <Typography variant="h4">{page && page.title}</Typography>
      )}

      <div id="content" dangerouslySetInnerHTML={{ __html: getMarked() }}></div>
    </Container>
  );
};

export default HuggPageContent;
