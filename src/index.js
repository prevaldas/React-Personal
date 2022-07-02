import React from 'react';
// import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

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
<BrowserRouter>
<App />
</BrowserRouter>
);


// ReactDOM.render(
//   <h1><App /></h1>,
//   document.getElementById("root")
// );