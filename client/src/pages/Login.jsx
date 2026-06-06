import Navbar from "../components/Navbar";

function Login() {
  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <div className="card mx-auto p-4"
          style={{ maxWidth: "450px" }}>

          <h2 className="text-center mb-4">
            Login
          </h2>

          <input
            className="form-control mb-3"
            placeholder="Email"
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
          />

          <button className="btn btn-primary">
            Login
          </button>

        </div>

      </div>
    </>
  );
}

export default Login;