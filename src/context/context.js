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

  useEffect(checkRequests, []);

  const toggleError = (show = false, msg = "") => {
    setError({ show, msg });
  };

  const searchGithubUser = async (user) => {
    toggleError();
    setLoading(true);
    const response = await axios(`${rootURL}/users/${user}`).catch((err) =>
      console.log(err)
    );
    if (response) {
      setGithubUser(response.data);
      const { login, followers_url } = response.data;

      await Promise.allSettled([
        axios(`${rootURL}/users/${login}/repos?per_page=100`),
        axios(`${followers_url}?per_page=100`)
      ])
        .then((results) => {
          const [repos, followers] = results;
          const status = 'fulfilled';
          if (repos.status === status) {
            setRepos(repos.value.data);
          }
          if (followers.status === status) {
            setFollowers(paginate(followers.value.data));
          }
        })
        .catch((err) => console.log(err));
    } else {
      toggleError(true, 'user not found');
      console.log(error)
    }
    checkRequests();
    setLoading(false);
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
