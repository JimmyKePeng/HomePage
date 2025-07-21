import { useEffect, useState } from "react";
import "./style.css";
import UserInfo from "./UserInfo";
function GithubProfileFinder() {
  const [userName, setUserName] = useState(null);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  function handleChange(e) {
    setUserName(e.target.value);
  }

  async function fetchGithubUser() {
    try {
      setLoading(true);
      let response;
      if (userName) {
        response = await fetch(`https://api.github.com/users/${userName}`);
      } else {
        response = await fetch(`https://api.github.com/users/JimmyKePeng`);
      }

      const result = await response.json();
      //   console.log(result);
      if (result) {
        setUser(result);
        setLoading(false);
      }
    } catch (err) {
      setErr(err.message);
    }
  }

  function handClick() {
    fetchGithubUser();
  }

  useEffect(() => {
    fetchGithubUser();
  }, []);

  if (loading) return <h1>Loading data, Please wait</h1>;
  if (err) return <h1>Some error occured</h1>;
  return (
    <div className="github-profile-container">
      <div className="search">
        <input
          type="text"
          name="search"
          placeholder="Enter Github user name"
          value={userName}
          onChange={handleChange}
        />
        <button className="git-btn" onClick={handClick}>
          Search
        </button>
      </div>

      <UserInfo user={user} />
    </div>
  );
}
export default GithubProfileFinder;
