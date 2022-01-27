import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Link } from '@mui/material';

const HuggPageMenu = (props) => {
  const title = props.title;

  return (
    <Container>
      <Box fullWidth display="flex" justifyContent="flex-end">
        <Box sx={{ alignContent: 'space-between' }}>
          <Link component={RouterLink} to={`/pages/${title}`}>
            본문
          </Link>
          &nbsp;·&nbsp;
          <Link component={RouterLink} to={`/pages/${title}`}>
            댓글
          </Link>
          &nbsp;·&nbsp;
          <Link component={RouterLink} to={`/pages/${title}/history`}>
            히스토리
          </Link>
          &nbsp;·&nbsp;
          <Link component={RouterLink} to={`/pages/${title}/edit`}>
            문서수정
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default HuggPageMenu;
