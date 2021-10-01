import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact>
            <StreamList />
          </Route>
          <Route path="/streams/new" exact>
            <StreamCreate />
          </Route>
          <Route path="/streams/delete/:id" exact component={StreamDelete}>
            {/* <StreamDelete /> use this for refactor*/}
          </Route>
          <Route path="/streams/edit/:id" component={StreamEdit} exact>
            {/* <StreamEdit /> use this for refactor*/}
          </Route>
          <Route path="/streams/:id" component={StreamShow} exact>
            {/* <StreamShow /> refactor also */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
