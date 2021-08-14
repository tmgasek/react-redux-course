import React, { useState } from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown';

// const items = [
//   {
//     title: 'question 1',
//     content: 'content 1',
//   },
//   {
//     title: 'question 2',
//     content: 'content 2',
//   },
//   {
//     title: 'question 3',
//     content: 'content 3',
//   },
// ];

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
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <button onClick={() => setOpenDropdown(!openDropdown)}>
        toggle dropdown
      </button>
      {openDropdown && (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      )}
    </div>
  );
};

export default App;
