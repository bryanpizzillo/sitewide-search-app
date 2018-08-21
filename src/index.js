import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './services/store';
import history from './services/history';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App store={ store } history={ history } />, document.getElementById('root'));
registerServiceWorker();
