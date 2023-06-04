import { FC, useState, MouseEvent, createElement, useEffect } from "react";
import { Alert, Avatar, Box, Button, Typography } from "@mui/material";

import useAuth from "../../providers/useAuth";

import MyCard from "../../components/ui/MyCard";

import ModeEditIcon from "@mui/icons-material/ModeEdit";

// FIREBASEUPDATE
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebaseInit";

export interface IFile {
	url: string;
	name: string;
}

// CHANGE AVATAR AFTER HANDLE
const ProfilePage: FC = () => {
	const { user } = useAuth();

	const [currentFile, setCurrentFile] = useState<any>(null);
	const [imageUrl, setImageUrl] = useState<any>(null);
	const [imageError, setImageError] = useState<string>("");

	const handleSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = event.target;
		if (files) {
			const selectedFile = files[0];

			setCurrentFile(selectedFile);
		}
	};

	useEffect(() => {
		if (currentFile) {
			console.log(URL.createObjectURL(currentFile));
			setImageUrl(URL.createObjectURL(currentFile));
		}
	}, [currentFile]);

	const handle = (e: MouseEvent<HTMLButtonElement>) => {
		setImageError("");
		console.log("click");

		if (!currentFile || !imageUrl || !auth.currentUser) return;

		updateProfile(auth.currentUser, {
			displayName: user?.name,
			photoURL: imageUrl,
		})
			.then(() => {
				console.log(user?.name, imageUrl);
				setImageUrl(null);
				setCurrentFile(null);
			})
			.catch((error: any) => {
				setImageError(`Error, ${error.message}`);
			});
	};

	return (
		<MyCard style={{ padding: "8px", display: "flex" }}>
			<>
				<input
					accept="image/*"
					type="file"
					id="select-image"
					style={{ display: "none" }}
					onChange={(e: any) =>
						setCurrentFile(() => {
							return e.target.files[0];
						})
					}
				/>
				<label htmlFor="select-image">
					<Button variant="contained" color="primary" component="span">
						Upload Image
					</Button>
				</label>
				{imageUrl && currentFile && (
					<Box mt={2} textAlign="center">
						<div>Image Preview:</div>
						<img src={imageUrl} alt={currentFile.name} height="100px" />
					</Box>
				)}
			</>

			<Box sx={{ width: 200, textAlign: "center" }} mr={2}>
				<Avatar
					sx={{ width: 150, height: 150, margin: "0 auto 12px" }}
					src={user?.avatar}
				/>

				<Typography
					variant="h5"
					component="h2"
					sx={{ fontWeight: "bold", letterSpacing: 1.2 }}
					mb={2}
				>
					{user?.name ? `name: ${user?.name}` : null}
				</Typography>

				{imageError ? <Alert severity="error">{imageError}</Alert> : null}

				<input
					style={{ marginBottom: "12px" }}
					type="file"
					accept="image/*"
					onChange={handleSelectFile}
				/>

				<Button onClick={handle} variant="contained">
					<ModeEditIcon></ModeEditIcon>
				</Button>
			</Box>
		</MyCard>
	);
};

export default ProfilePage;
