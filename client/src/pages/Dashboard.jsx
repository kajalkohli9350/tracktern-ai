import Sidebar from "../components/Sidebar";
import "./Dashboard.css";
function Dashboard() {

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  return (
     <div>

      <Sidebar />

      <div className="main-content">

        <h1>
          Welcome, {user?.name}
        </h1>

        <div className="stats-grid">

          <div className="stat-card">
            <h3>Total Applications</h3>
            <p>15</p>
          </div>

          <div className="stat-card">
            <h3>Interviews</h3>
            <p>3</p>
          </div>

          <div className="stat-card">
            <h3>Selected</h3>
            <p>1</p>
          </div>

        </div>

        <div className="recent-section">

          <h2>Recent Applications</h2>

          <table>

            <thead>
              <tr>
                <th>Company</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Google</td>
                <td>Frontend Intern</td>
                <td>Applied</td>
              </tr>

              <tr>
                <td>Amazon</td>
                <td>MERN Developer</td>
                <td>Interview</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;