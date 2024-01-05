import Welcome from "./components/welcome";
import {Clock} from "./components/clock";
import {useState} from "react";

function App() {
    let [loggin, setLogin] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
          <Welcome name="tom" loggin={loggin}/>
          <button onClick={() => setLogin(!loggin)}>Login/Logout</button>
          <hr/>
          <Clock/>
      </header>
    </div>
  );
}

export default App;
