import React, { useEffect, useState } from 'react';
import API from '../../utils/API';
import "./style.css";
import DataTable from '../Table'

function Search(rows) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
    console.log("Search is firing")
  };
  const [employee, setEmployee] = useState([]);
  // const [query, setQuery] = useState("");

    useEffect(() => {
      API.getEmployeeList().then(res => {
        setEmployee(res.data.results);
      }).catch(err => console.log(err));
    }, []);

    console.log(employee)

  return (
    <>
    <div className="md-form active-pink active-pink-2 mb-3 mt-0">
      <input
        className="form-control"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>

    <DataTable data={[employee]}/>
    </>
  );
}

export default Search;