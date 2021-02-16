import React, { useContext } from 'react';
import { GithubContext } from "../context/context"
import styled from 'styled-components';
import Card from './Card';
import Followers from './Followers';
import SkeletonProfile from "../skeletons/SkeletonProfile";
import SkeletonArticle from '../skeletons/SkeletonArticle';


const Wrapper = styled.div`
  margin-top: 3rem;
  position: relative;
  /* align-items: start; */
  &::before {
    content: "user and followers";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--clr-white);
    color: var(--clr-grey-5);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }
`;

const User = () => {
  const { loading } = useContext(GithubContext)


  return (
    <section style={{ marginTop: '1rem' }}>
      <Wrapper className="section-center">
        {loading &&
          <>
            <SkeletonProfile />
            <SkeletonArticle />
          </>}
        {!loading && (
          <>
            <Card />
            <Followers />
          </>
        )}
      </Wrapper>
    </section >
  )
};


export default User;
