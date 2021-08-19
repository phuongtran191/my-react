import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AddEditPage from './pages/AddEditPage';
import MainPage from './pages/MainPage';
import NotFound from 'components/NotFound';

Photo.propTypes = {};

function Photo(props) {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />

      <Route path={`${match.url}/add`} component={AddEditPage} />
      <Route path={`${match.url}/:id`} component={AddEditPage} />

      <Route component={NotFound} />
    </Switch>
  );
}

export default Photo;