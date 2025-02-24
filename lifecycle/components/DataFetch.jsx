import React from "react";
import { useState, useEffect } from "react";
/*
Life - cycle : 
  1 : Functional Life-cycle.
  2 : Class Life-cycle.


  step 1 : Mount : component create first 

  step 2 : Update
  step 3 : Unmount

*/

function DataFetch() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // when ever the component is re-render it runs
  useEffect(() => {
    console.log("every render");
  }),
    // only runs when component is mounted
    useEffect(() => {
      console.log("when component mounted");

      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
          );

          const result = await response.json();

          setData(result);
        } catch (error) {
          console.error("Error while fetching data");
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, []);

  useEffect(() => {
    console.log("when count value changes and text");
  }, [count]);

  useEffect(() => {
    console.log("runs when text changes.");

    return () => {
      console.log("umount");
    };
  }, [text]);

  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <h1>Text : {text}</h1>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <h2>Fetched data</h2>
      <ul>
        {data.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
export default DataFetch;
