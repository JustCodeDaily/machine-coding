import styled from "styled-components";

const Aside = styled.aside`
  position: fixed;
  left: 0;
  top: var(--nav-height);
  height: calc(100vh - var(--nav-height));
  width: var(--sidebar-width);
  background: var(--surface);
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 1rem;
  overflow-y: auto;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const SidebarHeader = styled.div`
  margin-bottom: 1rem;

  h3 {
    font-family: var(--font-headline);
    font-weight: 800;
    font-size: 1.125rem;
    color: var(--on-surface);
  }

  p {
    font-size: 0.75rem;
    color: var(--on-surface-variant);
    opacity: 0.6;
    font-weight: 500;
  }
`;

const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease;

  ${(props) =>
    props.$active
      ? `
    background: var(--surface-container-lowest);
    color: var(--secondary);
    font-weight: 700;
    box-shadow: 0 1px 3px var(--shadow-ambient);
  `
      : `
    color: var(--on-surface-variant);
    &:hover {
      background: var(--surface-container);
      transform: translateX(4px);
    }
  `}
`;

const SubLinks = styled.div`
  margin-left: 1rem;
  padding-left: 1rem;
  border-left: 1px solid var(--surface-container);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-top: 0.25rem;
`;

const SubLink = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  color: ${(props) =>
    props.$active ? "var(--secondary)" : "var(--on-surface-variant)"};
  font-weight: ${(props) => (props.$active ? "600" : "400")};
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: var(--secondary);
  }
`;

const SidebarFooter = styled.div`
  margin-top: auto;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FooterLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: var(--on-surface-variant);
  font-family: var(--font-body);
  font-weight: 500;
  cursor: pointer;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;

  &:hover {
    background: var(--surface-container);
  }
`;

const ChallengeButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: var(--secondary-container);
  color: var(--on-secondary-container);
  border: none;
  border-radius: 0.5rem;
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;
  box-shadow: 0 1px 3px var(--shadow-ambient);
  transition: opacity 0.2s ease;
  margin-top: 1rem;

  &:hover {
    opacity: 0.95;
  }
`;

export default function SideNav() {
  return (
    <Aside>
      <SidebarHeader>
        <h3>Library</h3>
        <p>Engineering Craft</p>
      </SidebarHeader>

      <nav style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {/* Core Concepts — Active */}
        <NavSection>
          <CategoryHeader $active>
            <span className="material-symbols-outlined">hub</span>
            Core Concepts
          </CategoryHeader>
          <SubLinks>
            <SubLink href="#">DOM Management</SubLink>
            <SubLink href="#">Reconciliation</SubLink>
            <SubLink href="#">Event Loop</SubLink>
          </SubLinks>
        </NavSection>

        {/* UI Components */}
        <NavSection>
          <CategoryHeader>
            <span className="material-symbols-outlined">category</span>
            UI Components
          </CategoryHeader>
          <SubLinks>
            <SubLink href="#">Data Tables</SubLink>
            <SubLink $active href="#">Virtual Lists</SubLink>
            <SubLink href="#">Form Controls</SubLink>
          </SubLinks>
        </NavSection>

        {/* Guides */}
        <NavSection>
          <CategoryHeader>
            <span className="material-symbols-outlined">menu_book</span>
            Guides
          </CategoryHeader>
          <SubLinks>
            <SubLink href="#">Performance Tips</SubLink>
            <SubLink href="#">Architecture Patterns</SubLink>
          </SubLinks>
        </NavSection>
      </nav>

      <SidebarFooter>
        <FooterLink href="#">
          <span className="material-symbols-outlined">settings</span>
          Settings
        </FooterLink>
        <FooterLink href="#">
          <span className="material-symbols-outlined">help</span>
          Support
        </FooterLink>
        <ChallengeButton>Start Daily Challenge</ChallengeButton>
      </SidebarFooter>
    </Aside>
  );
}
