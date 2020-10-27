import React, { useEffect, useState } from 'react';
import API from '../../utils/API';
import "./style.css";
import DataTable from '../Table'

function Search() {
  const [employee, setEmployee] = useState([]);
  const [filteredEmployee, setFilteredEmployee] = useState([]);
  const [query, setQuery] = useState("");

    useEffect(() => {
      API.getEmployeeList().then(res => {
        setEmployee(res.data.results);
        setFilteredEmployee(res.data.results);
      }).catch(err => console.log(err));
    }, []);

    function searchFilter(query) {
      const columns = employee[0] && Object.keys(employee[0])
      return employee.filter(row =>
        columns.some(column => row[column].toString().toLowerCase().indexOf(query) > -1)
        )
    }

  return (
    <>
    <div className="mb-3 mt-0">
      <input
        className="form-control"
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          if (e.target.value === "") {
            setFilteredEmployee(employee)
          } else {
            setFilteredEmployee(searchFilter(e.target.value))
          }
        }}
      />
    </div>
    <DataTable data={[filteredEmployee]} />
    </>
  );
}

export default Search;