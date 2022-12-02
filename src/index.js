import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App'
import PortContextProvider from './Components/Context/PortContextProvider';
import ErrorBoundary from './Components/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <PortContextProvider>
        <App />
      </PortContextProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

