import "./App.css";
import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import AnimatedRoutes from "./Components/Routes/AnimatedRoutes";


function App() {
  
  return (
    <main>
      
        <Router>
          <AnimatedRoutes/>
        </Router>

    </main>
  );
}

export default App;
