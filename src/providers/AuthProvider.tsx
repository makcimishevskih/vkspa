import {
	FC,
	createContext,
	useState,
	ReactNode,
	useEffect,
	useMemo,
	useCallback,
} from "react";

import { onAuthStateChanged } from "firebase/auth";

import { IUser, TypeSetState } from "../types/types";

import noAvatar from "../assets/img/noAvatar.png";

import { auth } from "../firebase/firebaseInit";

export interface IContext {
	user: IUser | null;
	handleUserChange: TypeSetState<IUser | null> | Function;
}

export const AuthContext = createContext<IContext>({} as IContext);

interface IProps {
	children: ReactNode;
}

const AuthProvider: FC<IProps> = ({ children }: IProps) => {
	const [user, setUser] = useState<IUser | null>(null);

	const handleUserChange = useCallback((user: IUser) => {
		setUser(user);
	}, []);

	useEffect(() => {
		const unListen = onAuthStateChanged(auth, authUser => {
			authUser
				? setUser({
						id: authUser.uid,
						name: authUser.displayName || "Без имени",
						avatar: authUser.photoURL || noAvatar,
						about: "",
				  })
				: setUser(null);
		});

		return () => {
			unListen();
		};
	}, []);

	const values = useMemo(
		() => ({ user, handleUserChange }),
		[user, handleUserChange],
	);

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
