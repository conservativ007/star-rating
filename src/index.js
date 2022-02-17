import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ColorProvider from "./hooks/ColorProvider";

ReactDOM.render(
  <ColorProvider>
    <App />
  </ColorProvider>,
  document.getElementById('root')
);


