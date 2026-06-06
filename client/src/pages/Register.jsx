import Navbar from "../components/Navbar";
import "./Register.css";
function Register() {
  return (
    <>
      <Navbar />

      <div className="register-container">
        <div  className="register-form" style={{ maxWidth: "500px" }}>
          <h2>Register</h2>

          <input placeholder="Full Name" />

          <input placeholder="Email" />

          <input type="password" placeholder="Password" />

          <input type="password" placeholder="Confirm Password" />

          <button className="registerbutton">Register</button>
        </div>
      </div>
    </>
  );
}

export default Register;
