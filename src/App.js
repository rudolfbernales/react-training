import React from 'react';
import logo from './logo.svg';
import ContactList from './components/addContactListComponentConnect';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className="App">
      <h1>Contact List</h1>
      </div>
      <ContactList/>
    </React.Fragment>

  );
}

export default App;
