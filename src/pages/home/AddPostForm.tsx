import { ChangeEvent, KeyboardEvent, useState } from "react";

import { Card, TextField } from "@mui/material";

import { IPost } from "../../types/types";

import { usersInfo } from "../../store/store";

interface IProps {
	handleAddPost: Function;
}

// ПРИКРЕПЛЕНИЕ ИЗОБРАЖЕНИЙ ПОСЛЕ ДОБАВЛЕНИЯ ПОСТА

const AddPostForm = ({ handleAddPost }: IProps) => {
	const [content, setContent] = useState("");

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setContent(e.target.value);
	};
	const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
		const key = e.code;

		if (!content) return;
		if (key !== "Enter") return;

		const postData: IPost = {
			author: usersInfo[0],
			content: content,
			createdAt: new Date().toString(),
			images: [
				"https://plus.unsplash.com/premium_photo-1673641895483-2119e6d9fd75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
				"https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW5pbWFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
				"https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
			],
		};

		handleAddPost(postData);
	};

	return (
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
				placeholder={`${usersInfo[0].name}, расскажите, что у вас нового...`}
				value={content}
				onChange={handleChange}
				onKeyUp={handleKeyPress}
			/>
		</Card>
	);
};

export default AddPostForm;
