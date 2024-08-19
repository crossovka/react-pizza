import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PizzaPage from './pages/PizzaPage';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
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
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);

{
	/* <React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode> */
}
