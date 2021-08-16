import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Header from './components/Header';
import Route from './components/Route';
import Link from './components/Link';

const items = [
  {
    title: 'question 1',
    content: 'content 1',
  },
  {
    title: 'question 2',
    content: 'content 2',
  },
  {
    title: 'question 3',
    content: 'content 3',
  },
];

const options = [
  {
    label: 'color red',
    value: 'red',
  },
  {
    label: 'color green',
    value: 'green',
  },
  {
    label: 'color blue',
    value: 'blue',
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />

      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
