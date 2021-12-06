import React, { useState, useEffect } from 'react';

import { Container } from '@mui/material';
import axios from 'axios';
import marked from 'marked';

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
          `http://localhost:3030/pages/${match.params.title}`
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
      <h1>{page && page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: getMarked() }}></div>
    </Container>
  );
};

export default HuggPageContent;
