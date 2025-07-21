import { useEffect, useState } from "react";

export default function UserInfo({ user }) {
  const [joinedDate, setJoinedDate] = useState(null);
  function getDate() {
    if (user.created_at) {
      const date = new Date(user.created_at);
      const formatted = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      });
      setJoinedDate(formatted);
    }
  }
  useEffect(() => {
    getDate();
  }, [user.created_at]);
  return (
    <div className="user">
      {user.status === "404" ? (
        <h1>user not found</h1>
      ) : (
        <div className="user-card">
          <img src={user.avatar_url} />
          <div className="oneline">
            <a href={user.html_url}>{user.login}</a>
            <h2>User joined on {joinedDate} </h2>
          </div>
          <h2>Public Repos: {user.public_repos}</h2>
          <h2>Followers: {user.followers}</h2>
          <h2>Following: {user.following}</h2>
        </div>
      )}
    </div>
  );
}
