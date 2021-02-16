import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";
import paginate from "../components/utils/paginate";

const rootURL = "https://api.github.com";
const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  const [loading, setLoading] = useState(false);
  const [requests, setRequests] = useState(60);
  const [error, setError] = useState({ show: false, msg: "" });

  const checkRequests = () => {
    axios(`${rootURL}/rate_limit`).then(({ data }) => {
      let {
        rate: { remaining },
      } = data;
      setRequests(remaining);
      if (requests === 0) {
        toggleError(true, "sorry, you have reached you hourly request limit.");
      }
    });
  };

  useEffect(checkRequests, [githubUser]);

  const searchGithubUser = async (user) => {
    toggleError();
    setLoading(true);
    const resUserInfo = await axios(`${rootURL}/users/${user}`);
    if (!resUserInfo) {
      setLoading(false);
      toggleError(true, `User not found under username ${user}`);
    } else {
      setGithubUser(resUserInfo.data);
      const { login, followers_url } = resUserInfo.data;
      const results = await Promise.allSettled([
        axios(`${rootURL}/users/${login}/repos?per_page=200`),
        axios(`${followers_url}?per_page=200`),
      ]);
      // repos
      setLoading(false);
      const [repos, followers] = results;
      if (repos.status === "fulfilled") {
        setRepos(repos.value.data);
      } else {
        toggleError(true, `failed to collect ${user}'s repos`);
      }
      if (followers.status === "fulfilled") {
        const paginatedFollowers = paginate(followers.value.data);
        setFollowers(paginatedFollowers);
      } else {
        toggleError(true, `failed to collect ${user}'s collowers`);
      }
    }
  };

  const toggleError = (show = false, msg = "") => {
    setError({ show, msg });
  };

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        loading,
        error,
        searchGithubUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
