import React, { useContext } from 'react';
import { GithubContext } from '../context/context';
import styled from 'styled-components';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';



const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  .item {
    border-radius: var(--radius);
    padding: 1rem 2rem;
    background: var(--clr-white);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: var(--clr-primary-10);
      color: var(--clr-primary-5);
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
    .violet {
      background: #5d62b5;
    }
  }
`;

const Badges = () => {
  const { githubUser } = useContext(GithubContext)
  const { public_repos, followers, following, public_gists, login } = githubUser

  const badges = [
    { id: 1, icon: <GoRepo className="icon" />, label: "repositories", value: public_repos, color: "pink", link: `https://github.com/${login}?tab=repositories` },
    { id: 2, icon: <FiUsers />, label: "followers", value: followers, color: "green", link: `https://github.com/${login}?tab=followers` },
    { id: 3, icon: <FiUserPlus />, label: "following", value: following, color: "purple", link: `https://github.com/${login}?tab=following` },
    { id: 4, icon: <GoGist />, label: "gists", value: public_gists, color: "yellow", link: `https://gist.github.com/${login}` }
  ]

  const makeBadge = ({ id, icon, label, value, color, link }) => {
    return (
      <article className="item" key={id} >
        <span className={color}>{icon}</span>
        <div>
          <h3>{value}</h3>
          <p> <a href={link}>{label}</a></p>
        </div>

      </article>
    )
  }

  return (
    <section>
      <Wrapper className="section-center">
        {badges.map(badge => {
          return makeBadge(badge)
        })}
      </Wrapper>
    </section>
  )
};

export default Badges;
