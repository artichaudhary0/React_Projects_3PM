import "./App.css";
import ClassLifeCycle from "../components/ClassLifeCycle";
import { useState } from "react";

/*
  useEffect : 
*/

function App() {
  const [showDemo, setShowDemo] = useState(true);

  return (
    <>
      <h1>react class lifecycle</h1>
      <button onClick={() => setShowDemo(!showDemo)}>
        {showDemo ? "Unmounting" : "Mounting"}
      </button>

      {showDemo && <ClassLifeCycle />}
    </>
  );
}

export default App;
