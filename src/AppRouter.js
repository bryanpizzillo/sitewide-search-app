import React from 'react';
import { ConnectedRouter as Router } from 'connected-react-router';
import {
    Switch,
    Route
} from 'react-router';
import ResultsPage from './views/results-page/ResultsPage';
import PageNotFound from './views/page-not-found/PageNotFound';

const AppRouter = ({ history }) => (
  <Router history={ history }>
    <Switch>
        <Route exact path="/" component={ ResultsPage } />
        <Route path="*" component={ PageNotFound } /> 
    </Switch>
  </Router>
)

export default AppRouter;