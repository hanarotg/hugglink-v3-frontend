import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Box, Typography, Link } from '@mui/material';

import logo from '../logo.svg';

const HuggIndex = () => {
  return (
    <Container>
      <Box pt={5} fullWidth>
        <center>
          <img src={logo} alt="logo" width="100em" />
          <Typography variant="h3">
            <strong>hugg</strong>.link
          </Typography>
          <Typography variant="subtitle">정보를 찾는 새로운 이정표</Typography>
          <Typography variant="body2">
            24개의 문서 중에 당신에게 도움될 게 하나도 없을까요?
          </Typography>
          <Box p={1}>
            <Link component={RouterLink} to={'/list/1'}>
              목록
            </Link>
            &nbsp;·&nbsp;
            <Link component={RouterLink} to={'/create'}>
              문서생성하기
            </Link>
            &nbsp;·&nbsp;
            <Link component={RouterLink} to={'/pages/hugg.link'}>
              이용가이드
            </Link>
          </Box>
        </center>
      </Box>
    </Container>
  );
};

export default HuggIndex;
