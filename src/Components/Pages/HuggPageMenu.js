import React from 'react';
import { Link } from 'react-router-dom';
import { Textsms, Timeline, Edit } from '@mui/icons-material';
import { Box, Container } from '@mui/material';
import { HPageMenu, HPageMenuButton } from '../../Interfaces/HPageMenu';

const HuggPageMenu = (props) => {
  const title = props.title;

  return (
    <Container>
      <Box fullWidth pt={2} display="flex" justifyContent="flex-end">
        <HPageMenu>
          <HPageMenuButton component={Link} to={`/pages/${title}`}>
            <Textsms /> 댓글
          </HPageMenuButton>
          <HPageMenuButton component={Link} to={`/pages/${title}/history`}>
            <Timeline /> 역사
          </HPageMenuButton>
          <HPageMenuButton component={Link} to={`/pages/${title}/edit`}>
            <Edit /> 편집
          </HPageMenuButton>
        </HPageMenu>
      </Box>
    </Container>
  );
};

export default HuggPageMenu;
