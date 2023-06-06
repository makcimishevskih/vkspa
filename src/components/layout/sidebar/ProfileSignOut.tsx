import { FC, useEffect, useState } from "react";

import { Avatar, Box, Button, Card } from "@mui/material";

import { Link } from "react-router-dom";
import { IContext } from "../../../providers/AuthProvider";
import MyCard from "../../ui/MyCard";
// import { listAll, ref, getDownloadURL, getMetadata } from "firebase/storage";
// import { storage } from "../../../firebase/firebaseInit";
interface IProps {
	handleSignOut: () => void;
}
type IContextUser = Pick<IContext, "user">;

const ProfileSignOut: FC<IContextUser & IProps> = ({
	user,
	handleSignOut,
}: IContextUser & IProps) => {
	return (
		<>
			{user ? (
				<MyCard>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							marginBottom: 1,
							columnGap: 1,
						}}
					>
						<Button
							variant="contained"
							onClick={handleSignOut}
							sx={{
								height: 45,
								fontSize: 12,
								lineHeight: 1.2,
							}}
						>
							Sign out
						</Button>
						<Link to={user ? `/profile/${user.id}` : "/auth"}>
							<Avatar src={user?.avatar} sx={{ width: 50, height: 50 }} />
						</Link>
					</Box>
					<Box sx={{ textAlign: "center" }}>
						<span
							style={{
								fontWeight: "bold",
								letterSpacing: 1.2,
							}}
						>
							{user.name ? user.name : null}
						</span>
					</Box>
				</MyCard>
			) : null}
		</>
	);
};

export default ProfileSignOut;
