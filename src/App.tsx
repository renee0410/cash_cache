import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './app/routes';

function App() {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
