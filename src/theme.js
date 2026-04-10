import { createGlobalStyle } from "styled-components";

export const theme = {
  typography: {
    headline: "'Manrope', sans-serif",
    body: "'Plus Jakarta Sans', sans-serif",
    label: "'Inter', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  radius: {
    default: "0.125rem",
    lg: "0.25rem",
    xl: "0.5rem",
    full: "0.75rem",
  }
};

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&family=Plus+Jakarta+Sans:wght@400;500;600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

  :root {
    --bg-surface: #f5f7f9;
    --on-surface: #2c2f31;
    --on-surface-variant: #595c5e;
    --border-color: #e5e9eb;
    --accent: #815100;
    --accent-container: #ffc885;
    --code-bg: #dfe3e6;
    --surface-white: #ffffff;
  }

  .dark {
    --bg-surface: #0b0f10;
    --on-surface: #f0f2ff;
    --on-surface-variant: #9a9d9f;
    --border-color: rgba(255, 255, 255, 0.1);
    --accent: #ffc885;
    --accent-container: #4c2e00;
    --code-bg: #1a1e1f;
    --surface-white: #161a1b;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--bg-surface);
    color: var(--on-surface);
    font-family: ${props => props.theme.typography.body};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    transition: background-color 0.2s, color 0.2s;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.typography.headline};
    color: var(--on-surface);
    letter-spacing: -0.02em;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  code {
    font-family: ${props => props.theme.typography.mono};
  }
`;
