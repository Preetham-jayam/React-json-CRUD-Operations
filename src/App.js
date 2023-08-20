import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmpListing from "./components/EmpListing";
import EmpCreate from "./components/EmpCreate";
import EmpView from "./components/EmpView";
import EmpEdit from "./components/EmpEdit";
function App() {
  return (
    <div className="App">
      <h1>React Crud Operations</h1>
      <Router>
        <Routes>
          <Route path="/" element={<EmpListing />} />
          <Route path="/employee/create" element={<EmpCreate />} />
          <Route path="/employee/detail/:empid" element={<EmpView />} />
          <Route path="/employee/edit/:empid" element={<EmpEdit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
