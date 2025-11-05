import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  const myImgURL =
    "https://res.cloudinary.com/dchrtkvvw/image/upload/v1752775107/Screenshot_2025-07-17_104436_o6vhzl.png";

  return (
    <nav className="narbar">
      <div className="welcome">
        <img src={myImgURL} />
        <Link to="/">Kegang</Link>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <a
          href="/KegangPengResume.pdf"
          download // suggests a download instead of opening in the tab
          className="resume"
        >
          Download Resume
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
