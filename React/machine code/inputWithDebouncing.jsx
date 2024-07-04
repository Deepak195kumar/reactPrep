import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      dataFetch();
    }, 500);
    return () => clearTimeout(timerId);
  }, [inputData]);

  const dataFetch = () => {
    fetch(`https://demo.dataverse.org/api/search?q=${inputData}`)
      .then((response) => response.json()) //   or use explicit return if u use braces   .then((response) =>{return response.json())}    //cahining
      .then((response) => {
        setData(response.data);
      });
  };

  return (
    <div className="App">
      <h1>Search below!!</h1>
      <label>Name: </label>
      <input onChange={(e) => setInputData(e.target.value)} />
      <ul>
        {data && data.items?.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}
