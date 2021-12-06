import React from 'react';
import { Route } from 'react-router-dom';
import HuggPageMenu from './HuggPageMenu';
import HuggPageContent from './HuggPageContent';
import HuggPageEdit from './HuggPageEdit';

const HuggPage = ({ match }) => {
  let title = match.params.title;

  return (
    <>
      <HuggPageMenu title={title} />
      <Route
        path="/pages/:title"
        exact={true}
        component={HuggPageContent}
      ></Route>
      <Route path="/pages/:title/edit" component={HuggPageEdit}></Route>
      <Route path="/pages/:title/history">aaa</Route>
    </>
  );
};

export default HuggPage;
