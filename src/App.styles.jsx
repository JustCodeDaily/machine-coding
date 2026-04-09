import styled from "styled-components";

export const LayoutWrapper = styled.div`
  min-height: 100vh;
`;

export const ContentCanvas = styled.main`
  padding-top: var(--nav-height);
  padding-left: 0;
  padding-right: 2rem;
  padding-bottom: 3rem;

  @media (min-width: 1025px) {
    margin-left: var(--sidebar-width);
    padding-left: 4rem;
    padding-right: 4rem;
    padding-top: calc(var(--nav-height) + 3rem);
  }

  @media (max-width: 1024px) {
    padding: calc(var(--nav-height) + 1.5rem) 2rem 3rem;
  }
`;
