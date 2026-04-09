import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Header = styled.header`
  grid-column: 1 / -1;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #e0e0e0;
`;

export const SideBar = styled.aside`
  background: #f9f9f9;
  padding: 20px;
  overflow-y: auto;
  height: 100vh;
`;

export const MainContent = styled.main`
  padding: 20px;
  overflow-y: auto;
`;
