import React from 'react';
import { Route } from 'react-router-dom';

import HuggUserLogin from './HuggUserLogin';
import HuggUserProfile from './HuggUserProfile';
import HuggUserSignup from './HuggUserSignup';

const HuggUser = (props) => {
  const userEmail = props.userEmail;
  // JWT 여부 확인
  if (userEmail) {
    return (
      <>
        <Route
          path="/users"
          component={() => <HuggUserProfile userEmail={userEmail} />}
        />
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
