import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

  :root {
    --bgcColor: #F5F6FA;
    --blue: #4459f7;
    --white: #ffffff;
    --grey: #636D7C;
  }

  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 14px;
    height: 18px;
}
::-webkit-scrollbar-thumb {
    height: 6px;
    border: 4px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    -webkit-border-radius: 7px;
    background-color: var(--blue);
    -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);
}
::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: none;
}
::-webkit-scrollbar-corner {
    background-color: transparent;
}
`;

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--bgcColor);
  height: 100vh;
  max-height: 100vh;
`;

export default function Page({ children }) {
  return (
    <StyledPage>
      <GlobalStyle />
      {children}
    </StyledPage>
  );
}
