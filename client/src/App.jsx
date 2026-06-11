import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Applications from "./pages/Applications";
import AddApplication from "./pages/AddApplication";
import Interviews from "./pages/Interviews";
import Notes from "./pages/Notes";
import Aiassistant from "./pages/Aiassistant";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/add-application" element={<AddApplication />} />
        <Route path="/interviews" element={<Interviews />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/AIassistant" element={<Aiassistant />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
