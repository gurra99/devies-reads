import styled from "styled-components";
import { dimensions } from "../../../utilities/dimensions";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5rem;
  background-color: var(--color-primary);
`;

export const Logo = styled.img`
  width: 4rem;
  height: 2.5rem;
`;

export const Nav = styled.div`
  width: 100%;
  height: 100%;

  ul {
    height: 100%;
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    align-items: center;
    justify-content: center;
  }

  li {
    margin: 0 0.5rem;
    margin-right: 0.7rem;

    @media (min-width: ${dimensions.mediumDevices}) {
      margin-right: 1rem;
    }

    @media (min-width: ${dimensions.largeDevices}) {
      margin-right: 1.5rem;
    }
  }

  a {
    color: var(--color-secondary);
    text-decoration: none;
    font-size: 1.375rem;
  }

  a:active,
  a.active {
    color: var(--color-secondary);
    font-size: 1.38rem;
    padding-bottom: 0.25rem;
    border-bottom: 2px solid white;
  }
`;
