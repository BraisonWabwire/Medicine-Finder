import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/yourmodel/")  // adjust this endpoint to match your Django API
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <div>
      <h1>Data from Django:</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li> // customize fields
        ))}
      </ul>
    </div>
  );
}

export default App;
