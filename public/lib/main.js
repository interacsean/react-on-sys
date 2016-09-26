import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route, IndexRoute, Link } from 'react-router';

const DOM_APP_EL_ID = 'app';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <p>Home page</p>
        <Link to={`page-two`}>Go to page two</Link>
      </div>
    )
  }
}

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <p>About page</p>
        <Link to={`/`}>Back home</Link>
      </div>
    )
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
