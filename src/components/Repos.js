import React, { useContext } from 'react';
import useLanguages from "./utils/useLanguages"
import useRepos from "./utils/useRepos"
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { Languages, StarredRepos, ForkedRepos, StarsPerLanguage } from './Charts';

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  margin-top: 10px;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div{
    width: 100% !important;
  }

  div div {
    width: initial !important;
  }

  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;


const Repos = () => {
  const { repos, loading } = useContext(GithubContext)
  const { mostUsedLanguages, mostStarredLanguages } = useLanguages(repos)
  const { stars, forks } = useRepos(repos)
  return (
    <section className="section">
      <Wrapper className="section-center">
        <Languages data={mostUsedLanguages} />
        <StarredRepos data={stars} />
      </Wrapper>
      <Wrapper className="section-center">
        <StarsPerLanguage data={mostStarredLanguages} />
        <ForkedRepos data={forks} />
      </Wrapper>
    </section>
  )
};


export default Repos;
