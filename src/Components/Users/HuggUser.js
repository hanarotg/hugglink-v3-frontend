import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { userContext } from '../Hugg';

import HuggUserLogin from './HuggUserLogin';
import HuggUserProfile from './HuggUserProfile';
import HuggUserSignup from './HuggUserSignup';

const HuggUser = () => {
  const userEmail = useContext(userContext);
  // JWT 여부 확인
  if (userEmail) {
    return (
      <>
        <Route path="/users" component={() => <HuggUserProfile />} />
      </>
    );
  } else {
    return (
      <>
        <Route path="/users" exact={true} component={HuggUserLogin} />
        <Route path="/users/signup" component={HuggUserSignup} />
      </>
    );
  }
};

export default HuggUser;
