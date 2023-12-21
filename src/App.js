import "./App.css";
// import ToDoList from "./components/ToDoList";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Interview from "./components/Interview";

function App() {
  return (
    <div className="App">
   <Header/>
      {/* <Router>
        <Routes>
          <Route  path="/login" element={<Login/>}/>
          <Route path="/" element={ <SignUp />}/>
        </Routes>
      </Router> */}
          {/* <Route path="/signup" element={ <SignUp />}/> */}
          {/* <Route path="/ToDolist" element={  <ToDoList />}/> */}
          <Counter/>

          
{/* Show multipleid by5 value in state or no state */}
          {/* <Interview /> */}
    </div>
  );
}

export default App;
