import { useRouteError } from 'react-router-dom';

const DevErrorPage: React.FC = function () {
	const error = useRouteError() as { statusText?: string; message?: string };
	console.error(error);

	return (
		<div id="error-page">
			<h1>Oops! (Development Mode)</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
};

export default DevErrorPage;
