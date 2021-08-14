import React from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
// import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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

// const options = [
//   {
//     label: 'color red',
//     value: 'red',
//   },
//   {
//     label: 'color green',
//     value: 'green',
//   },
//   {
//     label: 'color blue',
//     value: 'blue',
//   },
// ];

const App = () => {
  // const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}

      {/* <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      /> */}
      <Translate />
    </div>
  );
};

export default App;
