import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import AppRouter from './AppRouter';
import ErrorBoundary from './components/error/ErrorBoundary'

import './App.css';

class App extends Component {

  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  render() {
    return (
      <ErrorBoundary>
        <Provider store={ this.props.store }>
          <AppRouter history={ this.props.history } />
        </Provider>
      </ErrorBoundary>
    );
  }
}

export default App;
