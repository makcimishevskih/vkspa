import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/layout/Layout";
import ErrorPage from "../pages/error/ErrorPage";
import HomePage from "../pages/home/HomePage";
import MessagesPage from "../pages/messages/MessagesPage";
import ProfilePage from "../pages/profile/ProfilePage";
import AuthPage from "../pages/auth/AuthPage";
import ConversationPage from "../pages/messages/ConversationPage";
import NewsPage from "../pages/news/NewsPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <HomePage />,
				errorElement: <ErrorPage />,
			},
			{
				path: "/profile/:id",
				element: <ProfilePage />,
				errorElement: <ErrorPage />,
			},
			{
				path: "/messages",
				element: <MessagesPage />,
				errorElement: <ErrorPage />,
			},
			{
				path: "/messages/:id",
				element: <ConversationPage />,
				errorElement: <ErrorPage />,
			},
			{
				path: "/auth",
				element: <AuthPage />,
				errorElement: <ErrorPage />,
			},
			{
				path: "/news",
				element: <NewsPage />,
				errorElement: <ErrorPage />,
			},
		],
	},
]);

export default router;
