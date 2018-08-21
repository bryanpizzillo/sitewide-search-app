import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import history from './history';

const middleware = composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)));

export default middleware;