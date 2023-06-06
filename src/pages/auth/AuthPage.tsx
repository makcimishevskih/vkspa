import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
	updateProfile,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";

import { Alert, Button, TextField } from "@mui/material";

import { auth } from "../../firebase/firebaseInit";

import useAuth from "../../providers/useAuth";

import noAvatar from "../../assets/img/noAvatar.png";

interface IAuthUserData {
	name: string;
	email: string;
	password: string;
}

const AuthPage: FC = () => {
	const { user } = useAuth();

	const [isUserAuth, setIsUserAuth] = useState(false);
	const [formError, setFormError] = useState("");

	const [userData, setUserData] = useState<IAuthUserData>({
		name: "",
		email: "",
		password: "",
	});

	const navigate = useNavigate();

	useEffect(() => {
		if (user) navigate("/");
		// eslint-disable-next-line
	}, [user]);

	// ПЕРЕПИСАТЬ НА 1 ФУНКЦИЮ
	const handlePasswordAuth = (e: ChangeEvent<HTMLInputElement>) => {
		setUserData(state =>
			Object.assign({}, state, {
				password: e.target.value,
			}),
		);
	};
	const handleNameAuth = (e: ChangeEvent<HTMLInputElement>) => {
		setUserData(state => ({ ...state, name: e.target.value }));
	};
	const handleEmailAuth = (e: ChangeEvent<HTMLInputElement>) => {
		setUserData(state => ({ ...state, email: e.target.value }));
	};

	const handleSubmitAuth = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setFormError("");

		if (isUserAuth) {
			console.log("reg");
			createUserWithEmailAndPassword(auth, userData.email, userData.password)
				.then(userCredential => {
					const user = userCredential.user;

					return updateProfile(user, {
						displayName: userData.name,
						photoURL: noAvatar,
					});
				})
				.catch(error => {
					setFormError(error.message);
				})
				.finally(() => {
					setUserData({
						name: "",
						email: "",
						password: "",
					});
				});
		} else if (!isUserAuth) {
			console.log("sign");

			signInWithEmailAndPassword(auth, userData.email, userData.password)
				.then(() => {})
				.catch(error => {
					setFormError(error.message);
				})
				.finally(() => {
					setUserData({
						name: "",
						email: "",
						password: "",
					});
				});
		}
	};

	return (
		<form
			onSubmit={handleSubmitAuth}
			style={{ padding: "50px 0", textAlign: "center" }}
		>
			{formError ? <Alert severity="error">{formError}</Alert> : null}

			<TextField
				size="small"
				sx={{
					fontSize: 14,
					width: "100%",
					marginBottom: 2,
				}}
				variant="standard"
				placeholder="Type name..."
				value={userData.name}
				type="text"
				name="name"
				onChange={handleNameAuth}
			/>
			<TextField
				sx={{
					fontSize: 14,
					width: "100%",
					marginBottom: 2,
				}}
				placeholder="Type email..."
				variant="standard"
				value={userData.email}
				type="email"
				name="email"
				onChange={handleEmailAuth}
				size="small"
			/>
			<TextField
				size="small"
				sx={{
					fontSize: 14,
					width: "100%",
					marginBottom: 2,
				}}
				variant="standard"
				placeholder="Type password..."
				value={userData.password}
				type="text"
				name="password"
				onChange={handlePasswordAuth}
			/>
			<Button
				onClick={() => setIsUserAuth(true)}
				type="submit"
				variant="contained"
				sx={{ marginRight: 2 }}
			>
				Registration
			</Button>
			<Button
				onClick={() => setIsUserAuth(false)}
				type="submit"
				variant="outlined"
			>
				Sign In
			</Button>
		</form>
	);
};

export default AuthPage;
