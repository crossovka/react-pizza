import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import App from './App';

import DevErrorPage from './pages/ErrorPageDev';
import ProdErrorPage from './pages/ErrorPageProd';

// React-loadable / Loadable-component for SSR
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/NotFound'));
const PizzaPage = React.lazy(() => import(/* webpackChunkName: "PizzaPage" */ './pages/PizzaPage'));
const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */'./pages/Cart'));

// const isDevelopment = process.env.NODE_ENV === 'development';
const isDevelopment = import.meta.env.MODE === 'development'; // Vite
const ErrorPage = isDevelopment ? DevErrorPage : ProdErrorPage;

const router = createBrowserRouter([
	{
		path: '/react-pizza/',
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/cart',
		element: <Suspense fallback={<div>Loading...</div>}>{<Cart />}</Suspense>,
		errorElement: <ErrorPage />,
	},
	{
		path: '/pizza/:id',
		element: <Suspense fallback={<div>Loading...</div>}>{<PizzaPage />}</Suspense>,
		errorElement: <ErrorPage />,
	},
	{
		path: '*',
		element: <Suspense fallback={<div>Loading...</div>}>{<NotFound />}</Suspense>,
		errorElement: <ErrorPage />,
	},
]);

const rootEl = document.getElementById('root');

if (rootEl) {
	const root = ReactDOM.createRoot(rootEl);
	root.render(
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
}

{
	/* <React.StrictMode>
	<RouterProvider router={router} />
</React.StrictMode> */
}
