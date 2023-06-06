import { FC, useState, MouseEvent, useEffect } from "react";
import { Alert, Avatar, Box, Button, Typography } from "@mui/material";

import ModeEditIcon from "@mui/icons-material/ModeEdit";

import useAuth from "../../providers/useAuth";

import MyCard from "../../components/ui/MyCard";

import {
	listAll,
	ref,
	uploadBytesResumable,
	getDownloadURL,
	getMetadata,
} from "firebase/storage";
import { updateProfile } from "firebase/auth";

import { auth, storage } from "../../firebase/firebaseInit";

import Preview from "./Preview";
import ProgressBar from "./ProgressBar";
import { IFile, IMetadata } from "../../types/types";
import { setSourceMapRange } from "typescript";

// CHANGE AVATAR AFTER HANDLE
const ProfilePage: FC = () => {
	const { user } = useAuth();

	const [currentFile, setCurrentFile] = useState<IFile | null>(null);
	const [imageError, setImageError] = useState<string>("");
	const [percentage, setPercentage] = useState<number>(0);

	const handleSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = event.target;

		if (files) {
			Array.from(files).forEach((fl: any) => {
				const reader = new FileReader();

				reader.onload = () => {
					setCurrentFile((state: any) => ({
						...state,
						file: fl,
						id: user?.id,
						name: fl.name,
						size: fl.size,
						url: reader.result,
					}));
				};

				reader.readAsDataURL(fl);
			});
		}
	};

	const handleUpload = async (e: MouseEvent<HTMLButtonElement>) => {
		setImageError("");
		if (!currentFile) return;

		const metadata: IMetadata = {
			customMetadata: {
				id: currentFile.id,
			},
		};

		const storageRef = ref(storage, `images/${user?.id}`);
		const uploadTask = uploadBytesResumable(
			storageRef,
			currentFile.file,
			metadata,
		);

		uploadTask.on(
			"state_changed",
			ss => {
				const progress = (ss.bytesTransferred / ss.totalBytes) * 100;
				setPercentage(progress);
			},
			err => {
				setImageError(`Error: ${err.message}`);
				throw new Error(`Error: ${err.message}`);
			},
		);

		const url = await getDownloadURL(storageRef);

		console.log(user?.name);

		if (url && auth.currentUser) {
			await updateProfile(auth?.currentUser, {
				displayName: user?.name,
				photoURL: url,
			});
		}

		setTimeout(() => {
			setPercentage(0);
			setCurrentFile(null);
			handleDeletePreview();
		}, 3000);
	};

	const handleDeletePreview = () => {
		setCurrentFile(null);
	};

	return (
		<MyCard style={{ padding: "30px 20px", display: "flex" }}>
			<>
				{currentFile && (
					<Box mt={-3} textAlign="center">
						<>
							<Preview
								file={currentFile}
								handleDeletePreview={handleDeletePreview}
							/>
							<ProgressBar percentage={percentage} />
						</>
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
					{user?.name ? user?.name : null}
				</Typography>

				{imageError ? <Alert severity="error">{imageError}</Alert> : null}

				<label htmlFor="hidden-input" style={{ marginRight: "12px" }}>
					<input
						type="file"
						accept="image/*"
						style={{ display: "none" }}
						id="hidden-input"
						onChange={handleSelectFile}
						// multiple
					/>
					<Button variant="outlined" component="span">
						Upload
					</Button>
				</label>

				<Button onClick={handleUpload} variant="contained">
					<ModeEditIcon></ModeEditIcon>
				</Button>
			</Box>
		</MyCard>
	);
};

export default ProfilePage;
