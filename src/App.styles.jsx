import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const AppWrapper = styled.div`
  min-height: 100vh;
  background-color: var(--bg-surface);
  color: var(--on-surface);
`;

// --- TOP NAVBAR ---
export const TopNav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 4rem;
  z-index: 50;
  background-color: var(--bg-surface);
  opacity: 0.95;
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
`;

export const TopNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 100%;
  width: 100%;
  max-width: 1536px;
  margin: 0 auto;
`;

export const AppTitle = styled.span`
  font-family: 'Manrope', sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: var(--on-surface);
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

export const NavIconBtn = styled.button`
  padding: 0.5rem;
  color: var(--on-surface-variant);
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.1s;
  display: flex;
  align-items: center;
  
  &:hover {
    transform: scale(0.95);
    color: var(--on-surface);
  }
`;

// --- SIDEBAR ---
export const SideBarWrapper = styled.aside`
  position: fixed;
  left: 0;
  top: 4rem;
  height: calc(100vh - 4rem);
  width: 280px;
  background-color: var(--bg-surface);
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 1rem;
  overflow-y: auto;
  border-right: 1px solid var(--border-color);
  z-index: 40;
  text-align: left;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SidebarHeader = styled.div`
  margin-bottom: 1.5rem;
`;

export const SidebarTitle = styled.h3`
  font-family: 'Manrope', sans-serif;
  font-weight: 800;
  font-size: 1.125rem;
  color: var(--on-surface);
`;

export const SidebarSubtitle = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--on-surface-variant);
`;

export const NavGroup = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
`;

export const NavCategory = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 1rem;
  background-color: ${props => props.$active ? 'var(--surface-white)' : 'transparent'};
  color: ${props => props.$active ? 'var(--accent)' : 'var(--on-surface-variant)'};
  font-weight: ${props => props.$active ? '700' : '500'};
  border-radius: 0.5rem;
  box-shadow: ${props => props.$active ? '0 1px 2px rgba(0,0,0,0.05)' : 'none'};
  font-size: 0.875rem;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => !props.$active && 'var(--border-color)'};
  }
`;

export const SubNavList = styled.div`
  margin-left: 1.125rem;
  border-left: 1px solid var(--border-color);
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const SubNavItem = styled(Link)`
  display: block;
  padding: 0.375rem 1rem;
  font-size: 0.75rem;
  color: ${props => props.$active ? 'var(--accent)' : 'var(--on-surface-variant)'};
  font-weight: ${props => props.$active ? '600' : '400'};
  text-decoration: none;

  &:hover {
    color: var(--accent);
  }
`;

export const BottomActions = styled.div`
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ChallengeBtn = styled.button`
  background-color: var(--accent-container);
  color: var(--on-surface); /* Assuming contrast is okay in both */
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

// --- MAIN CONTENT ---
export const MainCanvas = styled.main`
  display: grid;
  grid-template-columns: 1fr 240px;
  gap: 3rem;
  max-width: 1536px;
  margin: 0 auto;
  padding: 7rem 4rem 7rem 320px;
  min-height: 100vh;

  @media (max-width: 1280px) {
    grid-template-columns: 1fr;
    padding-right: 4rem;
  }

  @media (max-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const ArticleColumn = styled.div`
  max-width: 800px;
`;

export const RightSidebar = styled.aside`
  @media (max-width: 1280px) {
    display: none;
  }
`;

export const StickyNav = styled.div`
  position: sticky;
  top: 8rem;
`;

export const Badge = styled.span`
  background-color: var(--accent-container);
  color: var(--on-surface);
  padding: 0.25rem 0.5rem;
  font-size: 10px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: 0.125rem;
`;

export const ContentTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  letter-spacing: -0.05em;
  line-height: 1.1;
  margin-bottom: 1.5rem;

  span.accent {
    background: linear-gradient(to right, var(--accent), var(--accent-container));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const CodeSection = styled.div`
  background-color: var(--code-bg);
  border-radius: 0.75rem;
  margin: 2.5rem 0;
  overflow: hidden;
  border-left: 4px solid var(--accent);
`;

export const CodeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background-color: rgba(217, 221, 224, 0.2);
`;

export const CodePre = styled.pre`
  padding: 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  overflow-x: auto;
  color: var(--on-surface);
`;

export const TOCList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const TOCLink = styled.a`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.$active ? 'var(--on-surface)' : 'var(--on-surface-variant)'};
  border-left: 2px solid ${props => props.$active ? 'var(--accent)' : 'var(--border-color)'};
  padding-left: 1rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    color: var(--accent);
  }
`;
