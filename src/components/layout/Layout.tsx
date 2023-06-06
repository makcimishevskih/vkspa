import { Grid } from "@mui/material";
import { FC, ReactElement, ReactNode, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../providers/useAuth";

import AuthPage from "../../pages/auth/AuthPage";
import Header from "./header";
import Sidebar from "./sidebar";

interface IProps {
	children?: ReactElement | ReactNode;
}

const Layout: FC<IProps> = ({ children }: IProps) => {
	const { user } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) {
			navigate("/auth");
		}
		// eslint-disable-next-line
	}, [user, navigate]);

	return (
		<>
			<Header />
			<Grid
				container
				marginTop={2}
				borderRadius={8}
				paddingX={8}
				sx={{ fontSize: 14 }}
				wrap="nowrap"
			>
				<Grid item md={4} lg={2} xl={2}>
					{user ? <Sidebar /> : null}
				</Grid>
				<Grid item md={8} lg={10} xl={10} sx={{ marginLeft: 2 }}>
					{!user ? <AuthPage /> : <Outlet />}
				</Grid>
			</Grid>
		</>
	);
};

export default Layout;
