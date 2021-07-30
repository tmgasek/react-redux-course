import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

if (module.hot) {
  module.hot.accept();
}
const getTime = () => {
  return new Date().toLocaleTimeString();
};

const App = () => {
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => setTime(getTime()), 1000);
  }, []);

  return (
    <div>
      <div>Current Time</div>
      <h3>{time}</h3>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
