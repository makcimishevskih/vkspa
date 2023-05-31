import { Link } from "react-router-dom";

import { IUser } from "../../../types/types";

import { Avatar } from "@mui/material";
import { Box } from "@mui/system";

const UserItem = ({ name, surname, avatar, id, isOnline }: IUser) => {
	return (
		<Box
			sx={{
				padding: 1,
			}}
		>
			<Link
				className="profile-link"
				to={`/profile/${id}`}
				style={{
					display: "flex",
					alignItems: "center",
				}}
			>
				<Box
					sx={{
						position: "relative",
						marginRight: 2,
					}}
				>
					<Avatar
						alt={`${name} ${surname}`}
						title={`${name} ${surname}`}
						src={avatar}
						sx={{
							width: 40,
							height: 40,
						}}
					/>
					{isOnline ? (
						<Box
							sx={{
								position: "absolute",
								bottom: 0,
								right: 0,
								height: 11,
								width: 11,
								backgroundColor: "#4FB14F",
								border: "1px solid #F1F7F1",
								borderRadius: "50%",
							}}
						/>
					) : null}
				</Box>
				<span className="userName">
					{name} {surname}
				</span>
			</Link>
		</Box>
	);
};

export default UserItem;
