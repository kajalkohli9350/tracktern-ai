import Navbar from "../components/Navbar";

function Register() {
  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <div
          className="card mx-auto p-4"
          style={{ maxWidth: "500px" }}
        >

          <h2 className="text-center mb-4">
            Register
          </h2>

          <input
            className="form-control mb-3"
            placeholder="Full Name"
          />

          <input
            className="form-control mb-3"
            placeholder="Email"
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Confirm Password"
          />

          <button className="btn btn-success">
            Register
          </button>

        </div>

      </div>
    </>
  );
}

export default Register;