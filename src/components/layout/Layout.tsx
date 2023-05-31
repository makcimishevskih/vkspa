import { Grid } from "@mui/material";
import { FC, ReactElement, ReactNode } from "react";
import { Outlet } from "react-router-dom";
// import { Outlet } from "react-router-dom";

import Header from "./header";
import Sidebar from "./sidebar";

interface IProps {
	children?: ReactElement | ReactNode;
}

const Layout: FC<IProps> = ({ children }: IProps) => {
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
					<Sidebar />
				</Grid>
				<Grid item md={8} lg={10} xl={10} sx={{ marginLeft: 2 }}>
					<Outlet />
					{/* {children} */}
				</Grid>
			</Grid>
		</>
	);
};

export default Layout;
