import React from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './../BusinessList/BusinessList'
import SearchBar from './../SearchBar/searchBar'

function App() {
  return (
    <div class="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
