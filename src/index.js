import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle=createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  background-color:ivory;
  color: white;
  min-height: 100vh;

}
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);


