import React, { useEffect, useState } from 'react';
import API from '../../utils/API';
import "./style.css";
import DataTable from '../Table'

function Search() {
  const [employee, setEmployee] = useState([]);
  const [query, setQuery] = useState("");

    useEffect(() => {
      API.getEmployeeList().then(res => {
        setEmployee(res.data.results);
      }).catch(err => console.log(err));
    }, []);

    function searchFilter(rows) {
      const columns = rows[0] && Object.keys(rows[0])
      return rows.filter(row =>
        columns.some(column => row[column].toString().toLowerCase().indexOf(query) > -1)
        )
    }

  return (
    <>
    <div className="md-form mb-3 mt-0">
      <input
        className="form-control"
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          if (e.target.value === "") {
            
          } else {
            setEmployee(searchFilter(employee))
          }
        }}
      />
    </div>
    <DataTable data={[employee]} />
    </>
  );
}

export default Search;