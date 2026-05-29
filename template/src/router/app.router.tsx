import PageLoader from "@app/components/ui/page-loader/page-loader.component";
import RootLayout from "@app/layouts/root-layout.component";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const HomePage = lazy(() => import("@app/pages/index.page"));
const NotFoundPage = lazy(() => import("@app/pages/not-found.page"));

export const appRouter = createBrowserRouter([
	{
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<PageLoader />}>
						<HomePage />
					</Suspense>
				),
			},
			{
				path: "*",
				element: (
					<Suspense fallback={<PageLoader />}>
						<NotFoundPage />
					</Suspense>
				),
			},
		],
	},
]);
