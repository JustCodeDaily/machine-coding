import styled from "styled-components";

const Aside = styled.aside`
  width: 100%;
  flex-shrink: 0;

  @media (min-width: 1025px) {
    width: 16rem;
  }
`;

const Sticky = styled.div`
  position: sticky;
  top: 8rem;
`;

const TocLabel = styled.h5`
  font-size: 0.625rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--on-surface-variant);
  margin-bottom: 1.5rem;
  font-family: var(--font-label);
`;

const TocNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TocLink = styled.a`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.25rem 0 0.25rem 1rem;
  border-left: 2px solid
    ${(props) =>
      props.$active ? "var(--secondary)" : "var(--surface-container-high)"};
  color: ${(props) =>
    props.$active ? "var(--on-surface)" : "var(--on-surface-variant)"};
  transition: color 0.2s ease, border-color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: var(--secondary);
  }
`;

const HelpCard = styled.div`
  margin-top: 3rem;
  background: var(--primary-container);
  padding: 1.5rem;
  border-radius: 0.75rem;

  [data-theme="dark"] & {
    background: var(--surface-container);
  }
`;

const HelpTitle = styled.h6`
  font-weight: 700;
  font-size: 0.875rem;
  color: var(--on-primary-container);
  margin-bottom: 0.5rem;

  [data-theme="dark"] & {
    color: var(--on-surface);
  }
`;

const HelpText = styled.p`
  font-size: 0.75rem;
  color: var(--on-primary-container);
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 1rem;

  [data-theme="dark"] & {
    color: var(--on-surface-variant);
  }
`;

const HelpButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  background: var(--primary);
  color: var(--on-primary);
  border: none;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const DirectorsNote = styled.div`
  margin-top: 2rem;
  background: linear-gradient(135deg, var(--primary-dim), var(--surface-container));
  padding: 1.5rem;
  border-radius: 0.75rem;
  position: relative;
  overflow: hidden;

  [data-theme="dark"] & {
    background: linear-gradient(135deg, var(--primary-container), var(--surface-container));
  }
`;

const NoteTitle = styled.h4`
  font-family: var(--font-headline);
  font-weight: 700;
  color: var(--on-primary);
  margin-bottom: 0.5rem;
  font-size: 0.875rem;

  [data-theme="dark"] & {
    color: var(--on-surface);
  }
`;

const NoteText = styled.p`
  font-size: 0.75rem;
  color: var(--on-primary);
  opacity: 0.85;
  line-height: 1.6;
  font-style: italic;

  [data-theme="dark"] & {
    color: var(--on-surface-variant);
  }
`;

const NoteIcon = styled.span`
  position: absolute;
  right: -0.5rem;
  bottom: -0.5rem;
  opacity: 0.1;
  font-size: 5rem;
`;

export default function TableOfContents() {
  return (
    <Aside>
      <Sticky>
        <TocLabel>On this page</TocLabel>
        <TocNav>
          <TocLink $active href="#the-problem">The Problem</TocLink>
          <TocLink href="#implementation">Implementation</TocLink>
          <TocLink href="#edge-cases">Edge Cases</TocLink>
          <TocLink href="#conclusion">Conclusion</TocLink>
        </TocNav>

        <DirectorsNote>
          <div style={{ position: "relative", zIndex: 1 }}>
            <NoteTitle>Director&apos;s Note</NoteTitle>
            <NoteText>
              &ldquo;A virtualized list isn&apos;t just about performance—it&apos;s
              about building an engine that respects the hardware&apos;s limits.&rdquo;
            </NoteText>
          </div>
          <NoteIcon className="material-symbols-outlined">architecture</NoteIcon>
        </DirectorsNote>

        <HelpCard>
          <HelpTitle>Need Help?</HelpTitle>
          <HelpText>
            Stuck on the scroll logic? Join the community discussion on Discord.
          </HelpText>
          <HelpButton>Join Community</HelpButton>
        </HelpCard>
      </Sticky>
    </Aside>
  );
}
