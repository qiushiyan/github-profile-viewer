import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  return (
    <Wrapper>
      <h4>Github Profile Viewer</h4>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 2rem;
  background: var(--clr-white);
  text-align: center;
  h4 {
    margin-bottom: 0;
    font-weight: 400;
    font-size: 1.25rem;
  }
`;

export default Navbar;
