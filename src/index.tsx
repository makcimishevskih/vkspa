import "./index.css";

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./router";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);

// MY PROFILE LINK TO MY PAGE;
// ADD POSTS AND ADD IMAGES WITH IT;

root.render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
