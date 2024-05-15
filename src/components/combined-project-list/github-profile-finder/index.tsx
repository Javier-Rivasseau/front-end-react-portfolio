import React, { useEffect, useState } from "react";
import User from "./user";
import ProjectSeparator from "../project-separator";
import GithubIcon from "../../github-icon";

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState<string>("Javier-Rivasseau");
  const [userData, setUserData] = useState<null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = () => {
    fetchGithubUserData()
  };

  useEffect(() => {
    fetchGithubUserData();
    //eslint-disable-next-line
  }, []);

  const fetchGithubUserData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`http://api.github.com/users/${userName}`);
      const data = await res.json();
      if (data) {
        setUserData(data);
        setLoading(false);
        setUserName("")
      }

      console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Data Loading! Please wait..</div>;
  }

  return (
    <div className="github-profile-container flex flex-col justify-center items-center ">
        <ProjectSeparator title="GITHUB PROFILE FINDER"/>
      <div className="flex justify-center mb-5 p-2 gap-5">
        <input
        className="p-2 text-l outline-none"
          type="text"
          name="search-by-username"
          placeholder="Github Username ..."
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <button className="p-2 border-none rounded-md bg-blue-300 text-l"
        onClick={handleSubmit}>Search</button>
      </div>
      {userData && <User userItem={userData}/>}

      <div className="p-8">
        <GithubIcon url="https://github.com/Javier-Rivasseau/front-end-react-portfolio/tree/main/src/components/combined-project-list/github-profile-finder"/>
      </div>
    
    </div>
  );
};

export default GithubProfileFinder;
