import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ProdErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div id="error-page">
			<h1>Oops! (Production Mode)</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<Link to="/" className="button">
				back home
			</Link>
		</div>
	);
}
