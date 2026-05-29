import Button from "@app/components/ui/button/button.component";
import { ROUTES } from "@app/constants/routes.const";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
	<div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
		<p className="medium-14-20 text-ds-fg-primary/60">404</p>
		<h1 className="medium-32-34 mt-2 text-ds-fg-primary">Page not found</h1>
		<p className="regular-16-24 mt-4 max-w-md text-ds-fg-primary/75">
			The route you requested does not exist. Head back to the home page to
			continue exploring the starter.
		</p>
		<Link className="mt-8" to={ROUTES.HOME}>
			<Button type="button">Back to home</Button>
		</Link>
	</div>
);

export default NotFoundPage;
