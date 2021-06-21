import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppState from './context/AppState';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <AppState>
        <App />
      </AppState>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);