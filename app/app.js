import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import css from './css/style.styl';

import Main from './components/Main.react.js';
import Results from './components/Results.react.js';
import Single from './components/Single.react.js';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Results} />
      <Route path="/search/:searchTerm" component={Results}/>
      <Route path="/beer/:beerId/:beerSlug" component={Single}/>
    </Route>
  </Router>
), document.querySelector('#root'))
