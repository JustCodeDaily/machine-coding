import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  height: var(--nav-height);
`;

const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 100%;
  width: 100%;
  max-width: 1536px;
  margin: 0 auto;
`;

const Logo = styled.span`
  font-family: var(--font-headline);
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--on-surface);
  letter-spacing: -0.05em;
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.1s ease;

  &:hover {
    transform: scale(0.95);
  }
`;

export default function TopNav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Nav>
      <NavInner>
        <Logo>The Editorial Architect</Logo>
        <NavActions>
          <IconButton onClick={toggleTheme} aria-label="Toggle theme">
            <span className="material-symbols-outlined">
              {theme === "light" ? "dark_mode" : "light_mode"}
            </span>
          </IconButton>
          <IconButton aria-label="View code">
            <span className="material-symbols-outlined">code</span>
          </IconButton>
        </NavActions>
      </NavInner>
    </Nav>
  );
}
