import TicTacToe from "../components/TicTacToe/TicTacToe";
import StopWatch from "../components/StopWatch/StopWatch";
import Line from "../components/Line";
import GithubProfileFinder from "../components/GithubProfileFinder/GithubProfileFinder";
import QRCodeGenerator from "../components/QRCodeGenerator/QRCodeGenerator";
import ClickToShow from "../components/ClickToShow/ClickToShow";
import "./Home.css";
function Projects() {
  return (
    <div>
      <div className="project-h1">
        <h1>Click to see each small project</h1>
      </div>
      <ClickToShow />
      {/* <TicTacToe />
      <Line />
      <StopWatch />
      <Line />
      <GithubProfileFinder />
      <Line />
      <QRCodeGenerator />
      <br />
      <Line /> */}
    </div>
  );
}
export default Projects;
