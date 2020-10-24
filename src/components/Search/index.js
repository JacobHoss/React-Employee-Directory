import React, { useEffect, useState } from 'react';
import API from '../../utils/API';
import "./style.css";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
    console.log("Search is firing")
  };
  const [employee, setEmployee] = useState([]);

    useEffect(() => {
      API.getEmployeeList().then(res => {
        setEmployee(res.data.results);
      }).catch(err => console.log(err));
    }, []);

    console.log(employee)

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;