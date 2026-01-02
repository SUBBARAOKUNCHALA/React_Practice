import "./NestedRouting.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginComponent from "./Login";
import { AboutComponent } from "./About";
import { UserData } from "./userData";

function NestedRouting() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <h1 className="page-title">React Nested Routing Example</h1>

        <div className="navbar">
          <Link to="/">Login</Link>
          <Link to="/About">About</Link>
          <Link to="/About/userData">User Data</Link>
        </div>

        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/About" element={<AboutComponent />}>
            <Route path="userData" element={<UserData />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default NestedRouting;
