import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Link as RouterLink } from '@mui/material';

const HuggPageHistory = ({ match }) => {
  const { title } = match.params;
  const [pageHistory, setPageHistory] = useState(null);

  // 히스토리 정보 정렬 컴포넌트

  // 히스토리 정보 가져오기
  useEffect(() => {
    const getPageHistory = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND}/pages/${title}/history`
        );

        setPageHistory(response.data);
      } catch (error) {}
    };

    getPageHistory();
  }, [title]);

  return (
    <Container>
      <Typography variant="h4">히스토리</Typography>
      {pageHistory &&
        pageHistory.map((data) => (
          <li key={data._id}>
            버전 : {data.diff.newFileName} |
            <RouterLink component={Link}>{data.date}</RouterLink> | 작성자{' '}
            <RouterLink component={Link}>{data.author}</RouterLink>
            &nbsp;
            <RouterLink component={Link}>[비교]</RouterLink>
          </li>
        ))}
    </Container>
  );
};

export default HuggPageHistory;
