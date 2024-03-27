import logo from "./logo.svg";
import "./App.css";
// import Todo from "./component/Todo";
import Count from "./component/Count/Count";
import Navbar from "./component/crud/Navbar";
import Create from "./component/crud/Create";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./component/crud/Read";
import Update from "./component/crud/Update";
function App() {
  return (
    <div className="App">
      {/* <Todo /> */}
      {/* <Count /> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/read" element={<Read/>} />
          <Route exact path="/edit/:id" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
