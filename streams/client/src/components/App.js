import React from 'react';
import { Router, Route } from 'react-router-dom';
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
        <Route path="/" exact>
          <StreamList />
        </Route>
        <Route path="/streams/new" exact>
          <StreamCreate />
        </Route>
        <Route path="/streams/delete" exact>
          <StreamDelete />
        </Route>
        <Route path="/streams/edit/:id" component={StreamEdit} exact>
          <StreamEdit />
        </Route>
        <Route path="/streams/show" exact>
          <StreamShow />
        </Route>
      </Router>
    </div>
  );
};

export default App;

//926197885702-q6t88kfn0tputsa44chkouetkdsqdbhg.apps.googleusercontent.com
