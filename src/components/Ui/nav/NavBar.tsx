import { Link } from "react-router-dom";
import { StyledNavBar } from "./NavBar.style";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/themeContext";

export const NavBar = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <StyledNavBar>
      <a onClick={toggleTheme}>
        Change theme
      </a>
      <a href="http://the50th.genius.com" target="_blanc">
        <span>THE 50TH</span>
      </a>
      <a href="https://genius.com/#featured-stories">
        <span>FEATURED</span>
      </a>
      <a href="#">
        <span>CHARTS</span>
      </a>
      <a href="#">
        <span>VIDEO</span>
      </a>
      <a href="#">
        <span>PROMOTE</span>
      </a>
      <a href="https://genius.com/forums">
        <span>FORUMS</span>
      </a>
      <a href="https://genius.com/new">
        <span>ADD SONG</span>
      </a>
      <Link to={'/favorites'}>
        Favorites
      </Link>
    </StyledNavBar>
  );
};
