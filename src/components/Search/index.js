import React, { useEffect, useState } from 'react';
import "./style.css";

function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
    console.log("Search is firing")
  };
  const [person, setPerson] = useState(null);

    useEffect(async () => {
      const response = await fetch("https://api.randomuser.me/");
      const data = await response.json();
      const [item] = data.results
      setPerson(item);
    }, []);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      {person && <div>{person.name.first}</div>}
    </div>
  );
}

export default Search;