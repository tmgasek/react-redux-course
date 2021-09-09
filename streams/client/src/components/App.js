import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
  return <div>Page 1</div>;
};

const PageTwo = () => {
  return (
    <div>
      Page Two
      <button>Click me!</button>
    </div>
  );
};
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </>
      </BrowserRouter>
    </div>
  );
};

export default App;
