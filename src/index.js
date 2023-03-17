import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { QueryClientProvider, QueryClient} from '@tanstack/react-query';
import FilterName from './pages/FilterName.js';
import FullCard from './pages/FullCard.js';
import FilterGender from './pages/FilterGender.js';
import Home from './components/Home';
const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />,
    errorElement: <h1>Error</h1>
  },
  {
    path:'/filterbyname',
    element: <FilterName />
  },
  {
    path:'/characterdetail',
    element: <FullCard />
  },
  {
    path:'/filtergender',
    element: <FilterGender />
  }

]);
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient} >
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  </QueryClientProvider>
  
);

reportWebVitals();
