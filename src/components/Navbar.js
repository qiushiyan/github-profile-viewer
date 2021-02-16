import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-white);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .login {
    position: relative;
    .tooltip {
      visibility: hidden;
      width: 300px;
      font-size: 0.6rem;
      text-align: left;
      text-transform: none;
      padding: 10px 5px;
      background-color: #222;
      color: hsl(209, 23%, 60%);
      border-radius: 6px;
      padding: 5px 0;
      /* Position the tooltip */
      position: absolute;
      z-index: 1;
      top: -5px;
      left: 115%;
    }
    &:hover .tooltip {
      visibility: visible;
      padding: 10px 5px;
    }
  }
`;

const Navbar = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    user,
    isLoading,
  } = useAuth0();
  const isUser = isAuthenticated && user;

  return (
    <Wrapper>
      {isUser && user.picture && <img src={user.picture} alt={user.name} />}
      {isUser && user.name && (
        <h4>
          Welcome, <strong>{user.name.toUpperCase()}</strong>
        </h4>
      )}
      {!isUser && <h4>Github Profile Viewer</h4>}
      {!isUser && (
        <button className="login" onClick={loginWithRedirect}>
          Login
          <div className="tooltip">
            You do not need to login to use this app, but there could be an
            60-requests-per-hour rate limit shared by all anonymous users.
          </div>
        </button>
      )}
      {isUser && (
        <button
          onClick={() => {
            logout({ returnTo: window.location.origin });
          }}
        >
          Logout
        </button>
      )}
    </Wrapper>
  );
};

export default Navbar;
