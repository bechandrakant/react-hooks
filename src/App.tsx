import React from 'react';
import ClassCounter from './components/ClassCounter'
import HooksCounter from './components/HooksCounter';
import ArrayHooks from './components/ArrayHooks';
import HooksCounter2 from './components/prev-state/HooksCounter2'
import HooksCounter3 from './components/objects/HooksCounter3'


const App = () => {
  return (
    <div className="App">
      <h1>One</h1>
      <ClassCounter />
      <HooksCounter />
      <h2>Prev state</h2>
      <HooksCounter2 />
      <h2>Objects</h2>
      <HooksCounter3 />
      <h2>Array Hooks</h2>
      <ArrayHooks />
    </div>
  );
}

export default App;
