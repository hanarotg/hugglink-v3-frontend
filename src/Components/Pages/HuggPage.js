import React from 'react';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HuggPageMenu from './HuggPageMenu';
import HuggPageContent from './HuggPageContent';
import HuggPageEdit from './HuggPageEdit';
import HuggPageHistory from './HuggPageHistory';

const HuggPage = ({ match }) => {
  let title = match.params.title;

  return (
    <>
      <Helmet>
        <title>{title} - 허그링크</title>
      </Helmet>
      <HuggPageMenu title={title} />
      <Route
        path="/pages/:title"
        exact={true}
        component={HuggPageContent}
      ></Route>
      <Route path="/pages/:title/edit" component={HuggPageEdit}></Route>
      <Route path="/pages/:title/history" component={HuggPageHistory}></Route>
    </>
  );
};

export default HuggPage;
