import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Container } from '@mui/material';
import axios from 'axios';

const HuggUserProfile = (props) => {
  const history = useHistory();

  // 로그아웃
  const logout = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND}/users/logout`,
        {},
        {
          withCredentials: true,
        }
      );

      window.location.replace('/');
    } catch (error) {}
  };

  return (
    <>
      <Container>
        반갑습니다. {props.userEmail}님
        <Link to="/users/login" onClick={logout}>
          로그아웃
        </Link>
      </Container>
    </>
  );
};

export default HuggUserProfile;
