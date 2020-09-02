import React from 'react';
import ContainedButtons from './components/Button';
import Profile from './components/Profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"/>
        <Profile />
        <ContainedButtons />
    </div>
  );
}

export default App;
