import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "./theme";
import { useTOC } from "./hooks/useTOC";

import {
  AppWrapper,
  TopNav,
  TopNavContainer,
  AppTitle,
  NavActions,
  NavIconBtn,
  SideBarWrapper,
  SidebarHeader,
  SidebarTitle,
  SidebarSubtitle,
  NavGroup,
  NavCategory,
  SubNavList,
  SubNavItem,
  BottomActions,
  ChallengeBtn,
  MainCanvas,
  ArticleColumn,
  RightSidebar,
  StickyNav,
  Badge,
  ContentTitle,
  CodeSection,
  CodeHeader,
  CodePre,
  TOCList,
  TOCLink,
  SidebarFooter,
  FooterItem
} from "./App.styles";

// --- Icons ---
const Icon = ({ name, fill = false }) => (
  <span 
    className="material-symbols-outlined" 
    style={{ fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 24` }}
  >
    {name}
  </span>
);

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-3-7-2"/></svg>
);

// --- Virtualized List Live Component ---
const VirtualizedListPreview = ({ items, itemHeight, containerHeight }) => {
  const [scrollTop, setScrollTop] = useState(0);

  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    items.length - 1,
    Math.floor((scrollTop + containerHeight) / itemHeight)
  );

  const visibleItems = items.slice(startIndex, endIndex + 1);

  return (
    <div 
      style={{ height: containerHeight, overflow: 'auto', border: '1px solid #e5e9eb', borderRadius: '8px', backgroundColor: '#ffffff' }}
      onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
    >
      <div style={{ height: items.length * itemHeight, position: 'relative' }}>
        {visibleItems.map((item, index) => (
          <div 
            key={item.id}
            style={{ 
              position: 'absolute', 
              top: (startIndex + index) * itemHeight,
              width: '100%',
              padding: '12px 20px',
              borderBottom: '1px solid #f0f2f4',
              fontSize: '14px'
            }}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Page Content ---
const VirtualizedListPage = () => {
  const location = useLocation();
  const { headings, activeId } = useTOC(location.pathname);
  
  const items = Array.from({ length: 1000 }).map((_, i) => ({
    id: i,
    content: `Item ${i + 1} - Architectural Sample Data ${Math.random().toString(36).substring(7)}`
  }));

  return (
    <MainCanvas>
      <ArticleColumn className="doc-content">
        <header style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
            <Badge>Intermediate</Badge>
            <span style={{ fontSize: '14px', fontWeight: 500, color: '#595c5e' }}>React • Performance</span>
          </div>
          <ContentTitle>
            Build a <span className="accent">Virtualized List</span>
          </ContentTitle>
          <p style={{ fontSize: '1.25rem', lineHeight: 1.6, color: '#595c5e', maxWidth: '42rem' }}>
            A masterclass in DOM optimization. Learn how to render thousands of items efficiently through the power of windowing.
          </p>
        </header>

        <section style={{ marginBottom: '4rem' }}>
          <h2 id="the-problem" style={{ fontSize: '1.875rem', fontWeight: 800, marginBottom: '2rem' }}>The Problem</h2>
          <div style={{ backgroundColor: '#ffffff', padding: '2.5rem', borderRadius: '0.75rem', border: '1px solid #eef1f3' }}>
            <p style={{ marginBottom: '2rem', color: '#595c5e', lineHeight: 1.7 }}>
              Standard mapping of large datasets leads to massive DOM nodes, resulting in "Jank"—the stuttering scroll experience that frustrates users. This solution only renders what is visible in the viewport.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { title: 'Dynamic Viewport Calculation', desc: 'Compute visible range based on current scroll position.' },
                { title: 'Absolute Positioning Logic', desc: 'Maintain ghost height to preserve scrollbar behavior.' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', padding: '1rem', backgroundColor: '#f5f7f9', borderRadius: '8px' }}>
                  <Icon name="check_circle" />
                  <div>
                    <span style={{ fontWeight: 700, display: 'block' }}>{item.title}</span>
                    <span style={{ fontSize: '14px', color: '#595c5e' }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <h2 id="implementation" style={{ fontSize: '1.875rem', fontWeight: 800, marginBottom: '2rem' }}>Implementation</h2>
          <CodeSection>
            <CodeHeader>
              <span style={{ fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#595c5e' }}>VirtualizedList.tsx</span>
            </CodeHeader>
            <CodePre>
{`const VirtualizedList = ({ items, itemHeight, containerHeight }) => {
  const [scrollTop, setScrollTop] = useState(0);

  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    items.length - 1,
    Math.floor((scrollTop + containerHeight) / itemHeight)
  );

  const visibleItems = items.slice(startIndex, endIndex + 1);

  return (
    <div onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}>
      <div style={{ height: items.length * itemHeight }}>
        {visibleItems.map((item, index) => (
          <div style={{ top: (startIndex + index) * itemHeight }}>
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};`}
            </CodePre>
          </CodeSection>
          
          <div style={{ marginTop: '2.5rem' }}>
            <h4 style={{ fontSize: '12px', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Live Preview</h4>
            <VirtualizedListPreview items={items} itemHeight={46} containerHeight={360} />
          </div>
        </section>
      </ArticleColumn>

      <RightSidebar>
        <StickyNav>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
            <Icon name="menu_open" />
            <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--on-surface)' }}>On this page</span>
          </div>
          <TOCList>
            {headings.map(h => (
              <TOCLink key={h.id} href={`#${h.id}`} $active={activeId === h.id}>
                {h.text}
              </TOCLink>
            ))}
          </TOCList>
        </StickyNav>
      </RightSidebar>
    </MainCanvas>
  );
};

// --- Main Layout ---
const SidebarContent = () => (
  <SideBarWrapper>
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', textAlign: 'left' }}>
      <NavGroup>
        <NavCategory>Get started</NavCategory>
        <SubNavList>
          <SubNavItem to="#" $active>Welcome</SubNavItem>
          <SubNavItem to="#">Quickstart</SubNavItem>
          <SubNavItem to="#">Cloud</SubNavItem>
        </SubNavList>
      </NavGroup>

      <NavGroup>
        <NavCategory>Capabilities</NavCategory>
        <SubNavList>
          <SubNavItem to="#">Streaming</SubNavItem>
          <SubNavItem to="#">Thinking</SubNavItem>
          <SubNavItem to="#">Structured Outputs</SubNavItem>
          <SubNavItem to="#">Vision</SubNavItem>
        </SubNavList>
      </NavGroup>

      <NavGroup>
        <NavCategory>Integrations</NavCategory>
        <SubNavList>
          <SubNavItem to="#">Overview</SubNavItem>
          <SubNavItem to="#">Assistants</SubNavItem>
        </SubNavList>
      </NavGroup>
    </div>

    <SidebarFooter>
      <FooterItem href="#">
        Sign in <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>north_east</span>
      </FooterItem>
      <FooterItem href="#">
        Download <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>north_east</span>
      </FooterItem>
    </SidebarFooter>
  </SideBarWrapper>
);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <AppWrapper>
          <TopNav>
            <TopNavContainer>
              <AppTitle>The Editorial Architect</AppTitle>
              <NavActions>
                <NavIconBtn as="a" href="https://github.com" target="_blank">
                  <GitHubIcon />
                </NavIconBtn>
                <NavIconBtn onClick={toggleTheme}>
                  <Icon name={isDarkMode ? "light_mode" : "dark_mode"} />
                </NavIconBtn>
              </NavActions>
            </TopNavContainer>
          </TopNav>

          <SidebarContent />

          <Routes>
            <Route path="/" element={<VirtualizedListPage />} />
            <Route path="*" element={<VirtualizedListPage />} />
          </Routes>
        </AppWrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
