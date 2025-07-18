import { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Gmail from "../components/Gmail";
function Home() {
  const mydescription =
    "Hello! My name is Kegang Peng, or you can call me Jimmy. I immigrated to the U.S. in 2005, and Oakland has been my home since then. After taking over my family's hardwood flooring business and obtaining my contractor license, I decided to pursue a career change to computer science. Balancing my business, full-time studies at Laney College, and parenting two kids, I'm determined and excited to transition into a new field.";
  const myImage =
    "https://res.cloudinary.com/dchrtkvvw/image/upload/v1752783622/IMG_3266-removebg-preview_csmgt2.png";

  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="description">
        <h3>Welcome to my homepage!</h3>
        <br />
        <div className="name-div">
          <h1>Hi I'm</h1>
          <h1
            className="my-name"
            onClick={() => {
              navigate("/About");
            }}
          >
            Kegang Peng
          </h1>
        </div>
        <p>B.S. in Computer Science | Aspiring Full-Stack Developer</p>
        <br />
        <p>
          I enjoy building responsive, user-friendly web applications and
          continuously improving my development skills through personal
          projects.
        </p>
        <Gmail />
      </div>
      <div className="image-div">
        <img className="my-image" src={myImage} />
      </div>
    </div>
  );
}

export default Home;
