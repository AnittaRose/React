import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../BasicRouting1/Nav";
import Home from "../BasicRouting/Home";
import About from "../BasicRouting/About";
import Dashboard from "./Dashboard";

function NestedRouting() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Nav />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about/:username" element={<About />} />
                <Route path="/dashboard/*" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

export default NestedRouting;
