import {
	Grid,
	ListItem,
	List,
	Avatar,
	TextField,
	Divider,
	ListItemText,
	Fab,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useEffect } from "react";
import { getDataFromDB } from "../../utils/getPostsFromDB";

const Chat = () => {
	// const [messagesDB, setMessagesDB] = useState<IMessage[] | any[]>([]);

	// useEffect(() => {
	// 	getDataFromDB("messages", "createdAt").then(dataDB =>
	// 		setMessagesDB(() => [...dataDB]),
	// 	);
	// 	// eslint-disable-next-line
	// }, []);

	// const messages = messagesDB.map((el, i) => (
	// 	<ListItem key={i}>
	// 		<Grid container>
	// 			<Grid
	// 				item
	// 				sm={12}
	// 				sx={
	// 					user?.id !== el.user.id
	// 						? { color: "black", textAlign: "left" }
	// 						: { color: "red", textAlign: "right" }
	// 				}
	// 			>
	// 				<Avatar
	// 					src={user?.avatar}
	// 					sx={
	// 						user?.id === el.user.id
	// 							? {
	// 									width: 30,
	// 									height: 30,
	// 									marginLeft: "auto",
	// 							  }
	// 							: { widht: 30, height: 30 }
	// 					}
	// 				></Avatar>
	// 				<ListItemText primary={el.message}></ListItemText>
	// 				<ListItemText secondary={el.createdAt}></ListItemText>
	// 			</Grid>
	// 		</Grid>
	// 	</ListItem>
	// ));

	return (
		<List
			className="scroll"
			sx={{
				height: "70vh",
				overflowY: "auto",
				scrollBehavior: "smooth",
			}}
		>
			{/* {messages} */}
		</List>
	);
};

export default Chat;
