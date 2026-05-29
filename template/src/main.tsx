import { appRouter } from "@app/router/app.router";
import { store } from "@app/store/store.ts";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import "./index.css";

const container = document.getElementById("root");

if (!container) {
	throw new Error(
		"Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
	);
}

const root = createRoot(container);

root.render(
	<StrictMode>
		<Provider store={store}>
			<RouterProvider router={appRouter} />
		</Provider>
	</StrictMode>,
);
