import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import {
	Card,
	List,
	ListItem,
	ListItemButton,
	Stack,
	Typography,
} from "@mui/material";

import UserItems from "./UserItems";

import { communicateItems, itemLinks } from "../../../store/store";

const Sidebar: FC = () => {
	const navigate = useNavigate();

	const cardStyle = {
		marginBottom: 15,
		background: "#F1F1F7",
		border: "1px solid #F1F1F7",
		borderRadius: 8,
	};

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

	return (
		<>
			<Card variant="outlined" style={cardStyle}>
				<UserItems />

				<List>{createList(communicateItems)}</List>
			</Card>

			<Card variant="outlined" style={cardStyle}>
				<List>{createList(itemLinks)}</List>
			</Card>
		</>
	);
};

export default Sidebar;
