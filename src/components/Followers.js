import React, { useContext, useState, useEffect } from 'react';
import { GithubContext } from '../context/context';
import styled from 'styled-components';

const Wrapper = styled.article`
  background: var(--clr-white);
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  padding-bottom: 0.5rem;
  .followers {
    overflow: hidden;
    padding: 1rem 2rem;
    display: grid;
    gap: 2rem;
    margin-bottom: 0.5rem;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    .card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: var(--transition);
      background: var(--clr-white);
      border-radius: var(--radius);
      box-shadow: var(--light-shadow);
      padding: 1rem 3.5rem;
      text-align: center;
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 0.75rem;
      }，
      h4 {
        margin-bottom: 1.5rem;
        font-size: 0.85rem;
        color: var(--clr-grey-5);
        text-align: center;
      }
    }}
    .btn-container {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .page-btn {
        width: 2rem;
        height: 2rem;
        background: var(--clr-primary-7);
        border-color: transparent;
        border-radius: 5px;
        cursor: pointer;
        margin: 0.5rem;
        transition: var(--transition);
      }
      .active-btn {
        background: var(--clr-primary-1);
        color: var(--clr-white);
      }
      .prev-btn,
      .next-btn {
        background: transparent;
        border-color: transparent;
        font-weight: bold;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        margin: 0.5rem;
        font-size: 1rem;
        cursor: pointer;
      }
    }`

const Followers = () => {
  const { followers, loading } = useContext(GithubContext)
  const [currentFollowers, setCurrentFollowers] = useState([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    setCurrentFollowers(followers[page])
  }, [page, followers])

  useEffect(() => {
    setPage(0) // switch to first page after a search
  }, followers)

  const makeFollower = ({ avatar_url, html_url, login }) => {
    return (
      <div className="card" key={html_url}>
        <img src={avatar_url} alt={login} />
        <div>
          <h4>{login} </h4>
          <a href={html_url} className="btn">View</a>
        </div>
      </div>
    )
  }


  return (
    <Wrapper>
      {!loading && followers.length > 0 &&
        <div className="followers">
          {currentFollowers.map(follower => makeFollower(follower))}
        </div>}
      {!loading &&
        <div className="btn-container">
          {followers.map((item, index) => {
            return (
              <button key={index} className={`page-btn ${index === page ? 'active-btn' : ''}`} onClick={() => setPage(index)}>
                {index + 1}
              </button>
            )
          })}
        </div>}
      {!loading && !followers.length && <p style={{ textAlign: 'center' }}>The user has no follower</p>}
    </Wrapper>
  )
};

export default Followers;
