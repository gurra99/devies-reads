import React, { useContext } from "react";
import { HeaderContainer, Nav } from "./header.styles";
import { NavLink } from "react-router-dom";
import DataContext from "../../../context/data-context";

const Header = () => {
  const { userId, setUserId, setAccessToken } = useContext(DataContext);
  return (
    <HeaderContainer>
      <Nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/my-books"}>My Books</NavLink>
          </li>
          <li>
            {!userId ? (
              <NavLink to={"/sign-in"}>Sign in</NavLink>
            ) : (
              <NavLink
                onClick={() => {
                  setUserId("");
                  setAccessToken("");
                }}
                to={"/signed-out"}
              >
                Sign Out
              </NavLink>
            )}
          </li>
          <li>
            <NavLink to={"/sign-up"}>Sign up</NavLink>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
