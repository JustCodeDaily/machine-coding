import styled from "styled-components";
import CodeBlock from "./CodeBlock";
import TableOfContents from "./TableOfContents";

/* ===================================================
   Layout
   =================================================== */
const ArticleLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (min-width: 1025px) {
    flex-direction: row;
  }
`;

const ArticleColumn = styled.div`
  flex: 1;
  max-width: 56rem;
`;

/* ===================================================
   Header
   =================================================== */
const HeaderSection = styled.header`
  margin-bottom: 3rem;
`;

const BadgeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Badge = styled.span`
  padding: 0.25rem 0.5rem;
  background: var(--tertiary-container);
  color: var(--on-tertiary-container);
  font-size: 0.625rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  border-radius: 0.25rem;
`;

const MetaText = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--on-surface-variant);
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: var(--on-surface);
  letter-spacing: -0.05em;
  line-height: 1.1;
  margin-bottom: 1.5rem;

  @media (min-width: 1025px) {
    font-size: 3.75rem;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(to right, var(--secondary), var(--secondary-container));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: var(--on-surface-variant);
  line-height: 1.6;
  max-width: 40rem;
`;

/* ===================================================
   Visual Anchor (Hero Image)
   =================================================== */
const VisualAnchor = styled.section`
  margin-bottom: 4rem;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 10px 40px -10px var(--shadow-ambient);
  background: var(--surface-container-high);
  aspect-ratio: 16 / 9;
  position: relative;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1);
  opacity: 0.8;
  transition: filter 0.7s ease, opacity 0.7s ease;

  ${VisualAnchor}:hover & {
    filter: grayscale(0);
    opacity: 1;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(44, 47, 49, 0.4), transparent);
  display: flex;
  align-items: flex-end;
  padding: 2rem;
`;

const PlayGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
`;

const PlayButton = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: var(--secondary-container);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--on-secondary-container);
`;

const PlayLabel = styled.div`
  p:first-child {
    font-weight: 700;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
  }
  p:last-child {
    font-size: 0.75rem;
    opacity: 0.8;
  }
`;

/* ===================================================
   The Problem Section
   =================================================== */
const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 800;
  color: var(--on-surface);
  letter-spacing: -0.02em;
  margin-bottom: 2rem;
`;

const ProblemCard = styled.div`
  background: var(--surface-container-lowest);
  padding: 2.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 10px 40px -10px var(--shadow-ambient);
`;

const ProblemText = styled.p`
  margin-bottom: 2rem;
  color: var(--on-surface-variant);
  line-height: 1.7;

  code {
    background: var(--surface-container);
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    color: var(--secondary);
    font-weight: 700;
    font-family: var(--font-mono);
    font-size: 0.875rem;
  }
`;

const RequirementsLabel = styled.h3`
  font-weight: 700;
  color: var(--on-surface);
  margin-bottom: 1rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;

const RequirementsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RequirementItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;

  &:hover {
    background: var(--surface-container-low);
  }

  .material-symbols-outlined {
    color: var(--tertiary);
    margin-top: 0.125rem;
    flex-shrink: 0;
  }
`;

const ReqTitle = styled.span`
  display: block;
  font-weight: 700;
  color: var(--on-surface);
`;

const ReqDesc = styled.span`
  display: block;
  font-size: 0.875rem;
  color: var(--on-surface-variant);
  margin-top: 0.25rem;
`;

/* ===================================================
   Edge Cases
   =================================================== */
const EdgeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const EdgeCard = styled.div`
  background: var(--surface-container-low);
  padding: 2rem;
  border-radius: 0.75rem;
  border-left: 4px solid ${(props) => props.$accent || "var(--secondary)"};
`;

const EdgeTitle = styled.h4`
  font-weight: 700;
  color: var(--on-surface);
  margin-bottom: 0.5rem;
`;

const EdgeText = styled.p`
  font-size: 0.875rem;
  color: var(--on-surface-variant);
  line-height: 1.6;
`;

/* ===================================================
   Floating Action Button
   =================================================== */
const FAB = styled.button`
  position: fixed;
  bottom: 2.5rem;
  right: 2.5rem;
  z-index: 50;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: var(--secondary);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.95);
  }
`;

/* ===================================================
   Component
   =================================================== */
export default function BlogArticle() {
  return (
    <>
      <ArticleLayout>
        <ArticleColumn>
          {/* Header */}
          <HeaderSection>
            <BadgeRow>
              <Badge>Intermediate</Badge>
              <MetaText>React &bull; Performance</MetaText>
            </BadgeRow>
            <Title>
              Build a <GradientText>Virtualized List</GradientText>
            </Title>
            <Subtitle>
              A masterclass in DOM optimization. Learn how to render thousands of
              items without sacrificing a single frame of performance through the
              power of windowing.
            </Subtitle>
          </HeaderSection>

          {/* Visual Anchor */}
          <VisualAnchor>
            <HeroImage
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEiZbuhFB8vRbI_Y3xVKlXaCIJP3x6rtdbZyCeHexmBpgIH_ozbXUO7mVh_07wOB12yEzDLYHIZOLBudQwt6TvVDf22NsP0KzV_KeUWYDtpPXKu4kO0BcE-dfLBPlXpyYG7ShjMVUivO0fggJ5Ty0fM3_PvYBQ-SnUDhbzqaxLtvsE0pqbwRgEiwcW9aa69TPaohwHHVt5fk5QSCP98BTa9UdAZmkm4XOcuWnQVIvwQLilipbW7MoquTDj-S7UeTDiV4qXvrgN_hqs"
              alt="Code editor visualization"
            />
            <HeroOverlay>
              <PlayGroup>
                <PlayButton>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_arrow
                  </span>
                </PlayButton>
                <PlayLabel>
                  <p>Core Concept Video</p>
                  <p>Understanding the Viewport Boundary (4:12)</p>
                </PlayLabel>
              </PlayGroup>
            </HeroOverlay>
          </VisualAnchor>

          {/* The Problem */}
          <Section id="the-problem">
            <SectionTitle>The Problem</SectionTitle>
            <ProblemCard>
              <ProblemText>
                Standard mapping of large datasets leads to massive DOM nodes,
                resulting in &ldquo;Jank&rdquo;—the stuttering scroll experience that
                frustrates users and destroys lighthouse scores. Your task is to
                implement a <code>List</code> component that only renders what is
                visible.
              </ProblemText>
              <RequirementsLabel>Core Requirements</RequirementsLabel>
              <RequirementsList>
                <RequirementItem>
                  <span className="material-symbols-outlined">check_circle</span>
                  <div>
                    <ReqTitle>Dynamic Viewport Calculation</ReqTitle>
                    <ReqDesc>
                      Compute the visible range based on the parent
                      container&apos;s scroll position.
                    </ReqDesc>
                  </div>
                </RequirementItem>
                <RequirementItem>
                  <span className="material-symbols-outlined">check_circle</span>
                  <div>
                    <ReqTitle>Absolute Positioning Logic</ReqTitle>
                    <ReqDesc>
                      Maintain a ghost container height to preserve scrollbar
                      behavior while translating active items.
                    </ReqDesc>
                  </div>
                </RequirementItem>
                <RequirementItem>
                  <span className="material-symbols-outlined">check_circle</span>
                  <div>
                    <ReqTitle>Buffer Management</ReqTitle>
                    <ReqDesc>
                      Render 3-5 items above and below the viewport to prevent
                      white flashes during fast scrolling.
                    </ReqDesc>
                  </div>
                </RequirementItem>
              </RequirementsList>
            </ProblemCard>
          </Section>

          {/* Implementation */}
          <Section id="implementation">
            <SectionTitle>Implementation</SectionTitle>
            <CodeBlock />
          </Section>

          {/* Edge Cases */}
          <Section id="edge-cases">
            <SectionTitle>Edge Cases</SectionTitle>
            <EdgeGrid>
              <EdgeCard $accent="var(--secondary)">
                <EdgeTitle>Dynamic Heights</EdgeTitle>
                <EdgeText>
                  Handling items with varying heights requires a resize observer
                  and a binary search lookup table for offset calculation.
                </EdgeText>
              </EdgeCard>
              <EdgeCard $accent="var(--tertiary)">
                <EdgeTitle>Scroll Velocity</EdgeTitle>
                <EdgeText>
                  At high scroll speeds, the UI may lag behind data fetching.
                  Consider using a &ldquo;placeholder&rdquo; skeletal state for
                  off-screen chunks.
                </EdgeText>
              </EdgeCard>
            </EdgeGrid>
          </Section>
        </ArticleColumn>

        {/* Right Sidebar TOC */}
        <TableOfContents />
      </ArticleLayout>

      {/* FAB */}
      <FAB aria-label="Open chat">
        <span className="material-symbols-outlined">chat</span>
      </FAB>
    </>
  );
}
