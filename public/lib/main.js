import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';

const DOM_APP_EL_ID = 'app';

class HomePage extends React.Component {
  render() {
    return <p>Home page</p>
  }
}

class AboutPage extends React.Component {
  render() {
    return <p>About page</p>
  }
}
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={HomePage}/>
      <Route path="page-two" component={AboutPage}/>
    </Route>
  </Router>
), document.getElementById(DOM_APP_EL_ID));
