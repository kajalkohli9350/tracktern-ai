import Navbar from "../components/Navbar";
import "./Home.css";


function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">

        <div className="hero-left">

          <h1>
            Track Jobs.
            Prepare Better.
            Get Hired.
          </h1>

          <p>
            Manage applications and
            prepare interviews in one place.
          </p>

          <button>
            Get Started
          </button>

        </div>

        <div className="hero-right">

          <img
            src="/hero.png"
            alt="hero"
          />

        </div>

      </section>
    </>
  );
}

export default Home;