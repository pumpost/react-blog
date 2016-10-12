import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './containers/App'
import ArticleLayout from './components/ArticleLayout'
import Articles from './containers/Articles'
import Article from './containers/Article'
import Form from './containers/Form'

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="articles" component={ArticleLayout}>
        <IndexRoute component={Articles} />
        <Route path="new" component={Form} />
        <Route path=":id/edit" component={Form} />
        <Route path=":id" component={Article} />
      </Route>
    </Route>
  </Router>
)