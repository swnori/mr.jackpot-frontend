import { QueryClient, QueryClientProvider } from 'react-query';
import ReactDOM from 'react-dom/client';
import React from 'react';

import App from './App';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
);
