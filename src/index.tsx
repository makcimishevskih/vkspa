import "./index.css";

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./router";
import AuthProvider from "./providers/AuthProvider";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);

// ORDER MESSAGES +++
// MY PROFILE LINK TO MY PAGE +++
// MY PROFILE NAME AFTER SIGN IN NOT DISPLAY - FIX IT +++

// MY PROFILE UPDATE AVATAR
// Add profile info user
// Get user profile by query id /profile/:id

// ADD POSTS AND ADD IMAGES WITH IT
// LOCAL STORAGE POSTS useGetFBData

// PROFILE COMPONENT {CHILDREN} CREATE NEW PARENT COMP

// CARDSTYLE OBJECT - CARD COMP

// LOADERS

// friends/:id page
// profile page access by guest
// Search function in header
// Make user status
// Make different conversation to all users
// USESCROLL HOOK AFTER SEND A MESSAGE

// Custom useQuery hook get and post data
// const {data, loading, error} = useQuery('Запрос');

root.render(
	<StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</StrictMode>,
);
