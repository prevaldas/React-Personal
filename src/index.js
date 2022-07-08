import React from 'react';
// import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { HashRouter } from 'react-router-dom';

// const container = document.getElementById('app');
// const root = createRoot(rootElement);
// root.render(<App tab="home" />);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter hashType="hashbang">
    <App />
  </HashRouter>
);

// ReactDOM.render(
//   <h1><App /></h1>,
//   document.getElementById("root")
// );
