import { Dispatch, SetStateAction } from "react";
import mylogo from "../assets/img/me.png";

export type TypeSetState<T> = Dispatch<SetStateAction<T>>;

export interface IUser {
	id: number;
	name: string;
	surname: string;
	avatar: typeof mylogo;
	isOnline?: boolean;
}

export interface IPost {
	author: IUser;
	createdAt: string;
	content: string;
	images?: string[];
	description?: string;
}

export interface IItemInfo {
	linkItem: any;
	label: string;
	textColor: string;
	icon: React.ReactNode;
}
