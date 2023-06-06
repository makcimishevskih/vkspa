import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

import {
	List,
	ListItem,
	ListItemButton,
	Stack,
	Typography,
} from "@mui/material";

import UserItems from "./UserItems";

import { communicateItems, itemLinks } from "../../../store/store";
import useAuth from "../../../providers/useAuth";
import { auth } from "../../../firebase/firebaseInit";
import ProfileSignOut from "./ProfileSignOut";
import MyCard from "../../ui/MyCard";

const Sidebar: FC = () => {
	const navigate = useNavigate();
	const { user, handleUserChange } = useAuth();

	function createList<T>(items: T): ReactNode {
		if (items instanceof Array) {
			return items.map(el => (
				<ListItem key={el.label} disablePadding>
					<ListItemButton onClick={() => navigate(el.linkItem)}>
						<Stack direction="row" alignItems="center" gap={2}>
							{el.icon}
							<Typography variant="caption" color={el.textColor}>
								{el.label}
							</Typography>
						</Stack>
					</ListItemButton>
				</ListItem>
			));
		}
	}

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				console.log("Quit");
				handleUserChange(null);
				navigate("/auth");
			})
			.catch(error => {
				throw new Error(error.message);
			});
	};

	return (
		<>
			{user ? (
				<ProfileSignOut user={user} handleSignOut={handleSignOut} />
			) : null}

			<MyCard>
				<UserItems />

				<List>{createList(communicateItems)}</List>
			</MyCard>

			<MyCard>
				<List>{createList(itemLinks)}</List>
			</MyCard>
		</>
	);
};

export default Sidebar;
