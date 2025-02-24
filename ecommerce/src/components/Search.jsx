import React from 'react'

function Search() {
    const [value, setValue] = useState("");
    const [isVisible, setIsVisible] = useState(false);
  
    const handleValue = (e) => {
      setValue(e.target.value);
    };
  
    const handleVisbility = () => {
      setIsVisible(!isVisible);
    };
    return (
      <>
        {/* {isVisible ? <h1>Searched value : {value}</h1> : <h1>dgjuryvfru</h1>} */}
        <h1>Searched value : {isVisible ? value : ""} </h1>
  
        <input onChange={handleValue} />
  
        <button onClick={handleVisbility}>search</button>
      </>
    );
}

export default Search
