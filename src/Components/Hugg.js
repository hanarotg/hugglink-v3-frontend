import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import HuggIndex from './HuggIndex';
import HuggNavbar from './HuggNavbar';
import HuggPageList from './Pages/HuggPageList';
import HuggPage from './Pages/HuggPage';
import HuggUser from './Users/HuggUser';
import HuggPageCreate from './Pages/HuggPageCreate';

const Hugg = () => {
  const [userEmail, setUserEmail] = useState('');

  // JWT 인증 여부 검증
  const authenticateUser = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/users`,
        {
          withCredentials: true,
        }
      );
      setUserEmail(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <>
      <HuggNavbar />
      <Switch>
        <Route path="/" exact={true} component={HuggIndex}></Route>
        <Route path="/list" component={HuggPageList}></Route>
        <Route path="/pages/:title" component={HuggPage}></Route>
        <Route path="/create" component={HuggPageCreate}></Route>
        <Route
          path="/users"
          component={() => <HuggUser userEmail={userEmail && userEmail} />}
        ></Route>
      </Switch>
    </>
  );
};

export default Hugg;
