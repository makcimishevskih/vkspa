import { ChangeEvent, FC, FormEvent, MouseEvent, useState } from "react";

import { Button, TextField } from "@mui/material";

interface IAuthUserData {
	email: string;
	password: string;
}

const AuthPage: FC = () => {
	const [isUserAuth, setIsUserAuth] = useState(false);

	const [userData, setUserData] = useState<IAuthUserData>({
		email: "",
		password: "",
	});

	const handleSubmitAuth = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!userData.password || !userData.email) return;
		if (userData.password.length < 4) return;
		if (userData.email.length < 4) return;

		console.log(userData.email, userData.password);
		// setUserData({ email: "", password: "" });
	};

	const handlePasswordtAuth = (e: ChangeEvent<HTMLInputElement>) => {
		setUserData(state =>
			Object.assign({}, state, {
				password: e.target.value,
			}),
		);
	};

	const handleEmailAuth = (e: ChangeEvent<HTMLInputElement>) => {
		setUserData(state => ({ ...state, email: e.target.value }));
	};

	return (
		<form
			onSubmit={handleSubmitAuth}
			style={{ padding: "50px 0", textAlign: "center" }}
		>
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
				onChange={handlePasswordtAuth}
			/>
			<Button type="submit" variant="contained" sx={{ marginRight: 2 }}>
				Login In
			</Button>
			<Button type="submit" variant="outlined">
				Sign Up
			</Button>
		</form>
	);
};

export default AuthPage;
