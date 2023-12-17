import "./App.css";
// import ToDoList from "./components/ToDoList";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path="/login" element={<Login/>}/>
          <Route path="/" element={ <SignUp />}/>
          {/* <Route path="/ToDolist" element={  <ToDoList />}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
