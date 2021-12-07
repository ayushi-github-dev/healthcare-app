import Navbar from "./Components/Navbar";
import "./App.css";
import { Route, Switch } from "react-router";
import "./Components/Navbar.css";
import running from "./Components/running.mp4";

import React from "react";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="hero-section">
        <p>
          Building healthcare and <br /> wellness apps that <br /> simplify
          people’s lives <br />
          <br /> <button>Get in Touch</button>
        </p>
        <div class="video-container">
          <div class="color-overlay"></div>
          <video autoPlay loop muted>
            {" "}
            <source src={running} type="video/mp4" />
          </video>
        </div>
      </section>
    </div>
  );
};

const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="services">
      <h1 className="s-heading">You can make your business smarter and easier</h1>
      <p className="s-para"> 
        Do you provide healthcare or fitness services, manufacture medical
        devices, or have a startup idea connected to health or wellness? We are
        a healthcare app development company in London that builds custom mobile
        solutions for businesses just like yours and can modernize and
        streamline your business operations with an efficient mobile app. ‍
        <br /> <br />
        You can get it custom-made for iPhones and other iOS devices including
        wearables, Android devices, or both platforms with a tech stack that
        makes the most of mHealth. Contact us to get information on your mobile
        app development cost.
      </p>
      </div>
    </div>
  );
};

const Showreel = () => {
  return (
    <div>
      <Navbar />
      <h1 className="reel-heading">Take a look at our custom <br/> healthcare app solutions</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/zSElgzLE-ow" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
};

const Benefits = () => {
  return (
    <div>
      <Navbar />
      <p>Welcome to benefits Page</p>
    </div>
  );
};

const Advantages = () => {
  return (
    <div>
      <Navbar />
      <p>Welcome to advantages Page</p>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <Navbar />
      <p>Welcome to contact Page</p>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/services">
          <Services />
        </Route>

        <Route exact path="/showreel">
          <Showreel />
        </Route>

        <Route exact path="/benefits">
          <Benefits />
        </Route>

        <Route exact path="/advantages">
          <Advantages />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </>
  );
};

export default App;
