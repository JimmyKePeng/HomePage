import { IoIosMail } from "react-icons/io";
import { useState } from "react";
import "./index.css";
function Gmail() {
  const [show, setShow] = useState(true);
  return (
    <div className="gmail-div">
      <div className="email-div">
        <IoIosMail className="email-icon" />
        <span>: kegangpeng@gmail.com</span>
      </div>
      {show && (
        <a href="https://www.linkedin.com/in/kegang-peng-717717339">LinkedIn</a>
      )}
      <br />
      <a
        href="/KegangPengResume.pdf"
        download // suggests a download instead of opening in the tab
        // className="resume"
        id="resume"
      >
        Download My Resume
      </a>
    </div>
  );
}
export default Gmail;
