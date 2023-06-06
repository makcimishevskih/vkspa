import "./index.css";

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./router";
import AuthProvider from "./providers/AuthProvider";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);

// LOADERS
// Custom useQuery hook get and post data
// const {data, loading, error} = useQuery('Запрос');

// Add profile info user
// Get user profile by query id /profile/:id

// ADD POSTS AND ADD IMAGES WITH IT
// LOCAL STORAGE POSTS useGetFBData

// friends/:id page

// Search function in header
// Make user status
// Make different conversation to all users

root.render(
	<StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</StrictMode>,
);
