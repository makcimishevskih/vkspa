import { Dispatch, SetStateAction } from "react";
import mylogo from "../assets/img/me.png";

export type TypeSetState<T> = Dispatch<SetStateAction<T>>;

export interface IUser {
	id: string;
	name: string;
	avatar: typeof mylogo;
	about?: string;
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

export interface IMessage {
	user: IUser;
	message: string;
	createdAt?: string;
}

export interface IStyle {
	[key: string]: string;
}

export interface IFile {
	url: string;
	name: string;
	id: string;
	size: number;
	file: File;
}

export interface IMetadata {
	customMetadata: {
		id?: string;
	};
}