import "./Home.css";
import { aboutMe, education, skills, licenses } from "../assets/data";
import Gmail from "../components/Gmail";
function About() {
  return (
    <div className="about-container">
      <div>
        <h1>About Me:</h1>
        <Gmail />
        <br />
        <h2>Education :</h2>
        <ul>{education.map((item) => item)}</ul>
        <br />
        <h2>Skills :</h2>
        <ul>{skills.map((item) => item)}</ul>
        <br />
        <h2>Licenses & Certifications:</h2>
        <ul>{licenses.map((item) => item)}</ul>
      </div>

      <div>
        <br />
        {aboutMe.map((item, index) => {
          return (
            <div>
              <br />
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About;
