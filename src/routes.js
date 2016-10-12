import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './containers/App'
import ArticleLayout from './components/ArticleLayout'
import Articles from './containers/Articles'
import Article from './containers/Article'

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="articles" component={ArticleLayout}>
        <IndexRoute component={Articles} />
        <Route path="new" component={Article} />
        <Route path="new2" component={Articles} />
      </Route>
    </Route>
  </Router>
)