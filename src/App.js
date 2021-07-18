// COMPONENTS
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Items, Profile, Skills } from "./components/AppComponents";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
// STYLING
import "./styles/App.scss";
// import logo from './logo.svg';

function App() {
  return (
    <Router>
      <div className="container">
        <main>
          {/* PROFILE AREA */}
          <Profile />
          {/* MIDDLE PART */}
          <section className="start">
            <button>Explore</button>
          </section>
          {/* SIDE PART */}
          <Items />
          {/* BOTTOM PART */}
          <Skills />
          {/* HIDDEN PARTS */}
          <About />
          <Technologies />
          <Contact />
        </main>
        <NavBar />
      </div>

      <Loader />
    </Router>
  );
}

export default App;
