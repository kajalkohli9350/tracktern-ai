import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="asidetop">
<h2 className="logo">Tracktern AI</h2>
<a href="/profile"> kajal</a>
        </div>
      

      <aside className="nav-links2">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/applications">Applications</Link>
        <Link to="/interviews">Interviews</Link>
         <Link to="/notes">Notes</Link>
          <Link to="/AIassistant">AI Assistant</Link>
           <Link to="/analytics">Analytics</Link>
          
       
        <Link to="/profile">Profile</Link>

        <button className="logout-btn">
        Logout
      </button> 
      </aside>

      
    </div>
  );
}

export default Sidebar;