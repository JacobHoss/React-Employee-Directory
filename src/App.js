import React from 'react';
import './App.css';
import API from './utils/API';


function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
    API.getEmployeeList();
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </div>
  );
}

export default App;
