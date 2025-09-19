import TicTacToe from "../components/TicTacToe/TicTacToe";
import StopWatch from "../components/StopWatch/StopWatch";
import Line from "../components/Line";
import GithubProfileFinder from "../components/GithubProfileFinder/GithubProfileFinder";
import QRCodeGenerator from "../components/QRCodeGenerator/QRCodeGenerator";
import ClickToShow from "../components/ClickToShow/ClickToShow";
import "./Home.css";
function Projects() {
  return (
    <div className="project-container">
      <div className="project-h1">
        <h1>Click to see each small project </h1>
        <a
          className="foodRecipeLink"
          href="https://jimmyfoodrecipe.vercel.app/"
        >
          Here's Food Recipe Web
        </a>
      </div>
      <ClickToShow />
    </div>
  );
}
export default Projects;
