import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
      margin: 0;
      background: #fafafa;
      font-family: roboto;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    };

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
    };

    :root {
      --bg:  #242526;
      --bg-accent: #484a4d;
      --text-color: #dadce1;
      --nav-size: 60px;
      --border: 1px solid #474a4d;
      --border-radius: 8px;
      --speed: 500ms; 
    };

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    };

    a {
      color: var(--text-color);
      text-decoration: none;
    };

    p {
      font-size: 16px;
    }

    p, h2 {
      color: #424242;
    }

    button {
      cursor: pointer;
      outline: none;
      border: none;
    }
`;