import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PizzaPage from './pages/PizzaPage';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import DevErrorPage from './pages/ErrorPageDev';
import ProdErrorPage from './pages/ErrorPageProd';

const isDevelopment = process.env.NODE_ENV === 'development';
const ErrorPage = isDevelopment ? DevErrorPage : ProdErrorPage;

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/cart',
		element: <Cart />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/pizza/:id',
		element: <PizzaPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: '*',
		element: <NotFound />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
);

{
	/* <React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode> */
}
