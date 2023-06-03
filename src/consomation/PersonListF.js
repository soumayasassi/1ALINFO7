import React, { useEffect, useState } from "react";

import axios from "axios";

export default function PersonListF() {
   
  const [ListPersons, setListPersons] = useState([])

   

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
        const result = res.data;
        setListPersons(result);
        })
   
  }, []);

  return (
    <ul>
     
      { ListPersons.map((person, i) => (
        <li key={i}>{person.name}</li>
      ))}
    </ul>
  );
}
