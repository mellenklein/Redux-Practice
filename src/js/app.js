import 'babel-polyfill';

//importing dependencies
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

//importing containers for different routes
import App from './containers/app';
import Questions from './containers/questions';
import Question from './containers/question';

//creating a router 'App' with 2 sub-routes 'Questions' and 'Question'
const app = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Questions} />
      <Route path="questions/:id" component={Question} />
    </Route>
  </Router>
);

//rendering the app into div element in index.html
render(app, document.getElementById('root'));
