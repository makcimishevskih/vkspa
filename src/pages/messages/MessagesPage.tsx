import {
	Grid,
	ListItem,
	Typography,
	List,
	Avatar,
	TextField,
	Divider,
	ListItemText,
	Fab,
	Alert,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import { addDoc, collection } from "@firebase/firestore";
import { ChangeEvent, FC, useState } from "react";

import { db } from "../../firebase/firebaseInit";
import useScroll from "./useScroll";
import useAuth from "../../providers/useAuth";
// import useSnapshot from "../../utils/useSnapshot";
import useGetFBData from "../../firebase/useGetFBData";
import { IMessage } from "../../types/types";
// 
const MessagesPage: FC = () => {
	const [oneMessage, setOneMessage] = useState("");
	// const [messagesDB, setMessagesDB] = useState<any[]>([]); // IMessage[]
	const [messagesError, setMessagesError] = useState("");
// 
	const { user } = useAuth();
	const { innerData: messagesData } = useGetFBData<IMessage>(
		"messages",
		"createdAt",
	);

	// 
	useScroll(messagesData, "scroll");

	const handleChangeMessage = async (e: ChangeEvent<HTMLTextAreaElement>) => {
		setOneMessage(() => e.target.value);
	};

	const handleSendMessage = async (e: any) => {
		e.preventDefault();

		try {
			const messageData = {
				user,
				createdAt: new Date().toLocaleTimeString(),
				message: oneMessage,
			};

			await addDoc(collection(db, "messages"), messageData);

			setOneMessage("");
		} catch (err: any) {
			setMessagesError(err.message);
		}
	};

	// const messages = messagesDB.map((el, i) => (
	const messages = messagesData.map((el, i) => (
		<ListItem key={i}>
			<Grid container>
				<Grid
					item
					sm={12}
					sx={
						user?.id !== el.user.id
							? { color: "black", textAlign: "left" }
							: { color: "red", textAlign: "right" }
					}
				>
					<Avatar
						src={user?.avatar}
						sx={
							user?.id === el.user.id
								? {
										width: 30,
										height: 30,
										marginLeft: "auto",
								  }
								: { widht: 30, height: 30 }
						}
					/>
					<ListItemText primary={el.message}></ListItemText>
					<ListItemText secondary={el.createdAt}></ListItemText>
				</Grid>
			</Grid>
		</ListItem>
	));

	const cardStyle = {
		marginBottom: 15,
		background: "#F1F1F7",
		border: "1px solid #F1F1F7",
		borderRadius: 8,
	};

	return (
		<>
			{messagesError ? <Alert severity="error">{messagesError}</Alert> : null}

			<div>
				<Grid container>
					<Grid item sm={12}>
						<Typography variant="h5" className="header-message">
							Chat
						</Typography>
					</Grid>
				</Grid>
				<Grid
					style={cardStyle}
					container
					sx={{ width: "100%", height: "75vh" }}
				>
					<Grid item sm={12}>
						<List
							className="scroll"
							sx={{
								height: "60vh",
								overflowY: "auto",
								scrollBehavior: "smooth",
							}}
						>
							{messages}
						</List>
						<Divider />
						<Grid container style={{ padding: "20px" }}>
							<Grid item sm={10}>
								<TextField
									id="outlined-basic-email"
									placeholder="Type Something"
									fullWidth
									value={oneMessage}
									sx={{ height: 10 }}
									onChange={handleChangeMessage}
								/>
							</Grid>
							<Grid item sm={1} sx={{ textAlign: "right", marginLeft: 2 }}>
								<Fab
									color="primary"
									aria-label="add"
									onClick={handleSendMessage}
								>
									<SendIcon />
								</Fab>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</>
	);
};

export default MessagesPage;
