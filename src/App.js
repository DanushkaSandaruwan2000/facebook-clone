import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* Main Body */}
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed />
      </div>
    </div>
  );
}

export default App;
