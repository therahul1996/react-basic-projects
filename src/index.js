import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// for context sidebar-modal
// import { AppProvider } from '../src/components/sidebar-modal/final/context';

// for context cocktails
// import { AppProvider } from '../src/components/cocktails/final/context';

// for context cocktails
import { AppProvider } from '../src/components/movie-db/final/context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
// for context use
<React.StrictMode>
<AppProvider>
  <App />
</AppProvider>
</React.StrictMode>
);
reportWebVitals();

