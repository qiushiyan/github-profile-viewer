import React, { useContext } from "react";
import { GithubContext } from "../context/context";
import styled from "styled-components";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--clr-white);
  padding: 0.5rem 1rem;
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);

  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;
    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }
    h4 {
      margin-bottom: 0.25rem;
    }
    p {
      margin-bottom: 0;
    }
    a {
      color: var(--clr-primary-5);
      border: 1px solid var(--clr-primary-5);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-5);
        color: var(--clr-white);
      }
    }
    a.twitter {
      all: unset;
      text-decoration: none;
      cursor: pointer;
      color: #338cc1;
    }
  }
  .bio {
    text-align: center;
    color: var(--clr-grey-3);
  }
  .links {
    margin-top: 0.8rem;
    p,
    a {
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
      }
    }
    a {
      color: var(--clr-primary-5);
      transition: var(--transition);
      svg {
        color: var(--clr-grey-5);
      }
      &:hover {
        color: var(--clr-primary-3);
      }
    }
  }
`;

const Card = () => {
  const { githubUser } = useContext(GithubContext);
  const {
    avatar_url,
    html_url,
    name,
    login,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = githubUser;

  const twitter_link = twitter_username ? (
    <a href={`https://twitter.com/${twitter_username}`} className="twitter">
      {twitter_username}
    </a>
  ) : (
    "user has not set twitter"
  );


  return (
    <Wrapper>
      <header>
        <img src={avatar_url} alt={name} />
        <div>
          <h4>{name ? name : login}</h4>
          <p>
            {twitter_username ? "@" : ""}
            {twitter_link}
          </p>
        </div>
        <a href={html_url}>follow</a>
      </header>
      {bio && <div className="bio">{bio}</div>}
      {(company || location || blog) &&
        <div className="links">
          {company && <p>
            <MdBusiness></MdBusiness>
            {company}
          </p>}
          {location && <p>
            <MdLocationOn>{location || "earch"}</MdLocationOn>
            {location}
          </p>}
          {blog && <a href={`https://${blog}`}>
            <MdLink></MdLink>
            {blog}
          </a>}
        </div>
      }
    </Wrapper>
  );
};

export default Card;
