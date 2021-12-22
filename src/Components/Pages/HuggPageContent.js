import React, { useState, useEffect } from 'react';

import { Container, Link, Typography, Box } from '@mui/material';
import axios from 'axios';
import { marked } from 'marked';

const HuggPageContent = ({ match }) => {
  const [page, setPage] = useState(null);

  // 마크다운 문법 파싱
  const getMarked = () => {
    return marked(`${page && page.content}`);
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
      <img src={page && page.logoUrl} width={200} />
      <Typography variant="h4">{page && page.title}</Typography>
      <div id="content" dangerouslySetInnerHTML={{ __html: getMarked() }}></div>
    </Container>
  );
};

export default HuggPageContent;
