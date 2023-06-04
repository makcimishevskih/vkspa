import { ChangeEvent, KeyboardEvent, useState } from "react";
import { collection, addDoc } from "firebase/firestore";

import { IPost } from "../../types/types";

import useAuth from "../../providers/useAuth";

import { db } from "../../firebase/firebaseInit";

import { Alert, Card, TextField } from "@mui/material";

const AddPostForm = () => {
	const { user } = useAuth();

	const [content, setContent] = useState("");
	const [addPostError, setAddPostError] = useState("");

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setContent(e.target.value);
	};

	const handleKeyPress = async (e: KeyboardEvent<HTMLInputElement>) => {
		const key = e.code;
		if (user) {
			if (!content) return;
			if (key !== "Enter") return;

			try {
				const post: IPost = {
					author: user,
					content: content,
					createdAt: new Date().toLocaleTimeString(),
					images: [
						"https://plus.unsplash.com/premium_photo-1673641895483-2119e6d9fd75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
						"https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW5pbWFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
						"https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
					],
				};

				await addDoc(collection(db, "posts"), post);

				setContent("");
			} catch (err: any) {
				setAddPostError(`Error adding document:  ${err}`);
			}
		}
	};

	return (
		<>
			{addPostError ? <Alert severity="error">{addPostError}</Alert> : null}

			{user ? (
				<Card
					variant="outlined"
					sx={{ borderRadius: 2, padding: 2, marginBottom: 2 }}
				>
					<TextField
						className="inputsome"
						variant="outlined"
						sx={{
							backgroundColor: "#eaebee",
							width: "100%",
						}}
						inputProps={{
							sx: {
								height: 2,
								fontSize: 14,
							},
						}}
						placeholder={`${user.name}, расскажите, что у вас нового...`}
						value={content}
						onChange={handleChange}
						onKeyUp={handleKeyPress}
					/>
				</Card>
			) : null}
		</>
	);
};

export default AddPostForm;
