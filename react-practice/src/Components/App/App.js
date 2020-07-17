import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar/searchBar';
import BusinessList from './Components/BusinessList/businessList';

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
