import Navbar from "../components/Navbar";
import "./Login.css";
function Login() {
  return (
    <>
      <Navbar />

      <div className="login-container">
        <div className="login-form" style={{ maxWidth: "450px" }}>
          <h2>Login</h2>

          <input placeholder="Email" />

          <input type="password" placeholder="Password" />

          <button className="login-button">Login</button>
        </div>
      </div>
    </>
  );
}

export default Login;
