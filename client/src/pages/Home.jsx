import Navbar from "../components/Navbar";
import "./Home.css";
import careerimg from "../assests/careerimg.png";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="hero-left">
          <h1 className="p1">Track Jobs smarter. Prepare Better.</h1>
          <h1 className="p2">Get Hired.</h1>

          <p>
            Manage your job applications and prepare interviews, and boost your
            chances of landing your dream job.
          </p>

          <button>Get Started</button>
        </div>

        <div className="hero-right">
          <img src={careerimg} alt="hero" />
        </div>
      </section>
    </>
  );
}

export default Home;
