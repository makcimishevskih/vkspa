import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();

	if (isRouteErrorResponse(error)) {
		return (
			<div id="error-page">
				<h1>Oops!</h1>
				<p>Sorry, an unexpected error has occurred.</p>
				<p>
					<i>{error.data?.statusText || error.data?.message}</i>
				</p>
			</div>
		);
	} else {
		return (
			<>
				<h1>Oops!</h1>
				<p>Sorry, an unexpected error has occurred.</p>
			</>
		);
	}
};

export default ErrorPage;
