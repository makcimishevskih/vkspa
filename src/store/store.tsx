import FeedIcon from "@mui/icons-material/Feed";
import GroupIcon from "@mui/icons-material/Group";
import HomeIcon from "@mui/icons-material/Home";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import mylogo from "../assets/img/me.png";

import { IItemInfo, IUser } from "../types/types";

export const communicateItems: IItemInfo[] = [
	{
		linkItem: "/messages",
		label: "Сообщения",
		icon: <MailOutlineIcon color="primary" />,
		textColor: "primary",
	},
];

export const itemLinks: IItemInfo[] = [
	{
		linkItem: "/",
		label: "Моя страница",
		icon: <HomeIcon color="primary" />,
		textColor: "primary",
	},
	{
		linkItem: "/friends",
		label: "Друзья",
		icon: <GroupIcon color="primary" />,
		textColor: "primary",
	},
	{
		linkItem: "/news",
		label: "Новости",
		icon: <FeedIcon color="primary" />,
		textColor: "primary",
	},
];

export const usersInfo: IUser[] = [
	{
		id: 1,
		name: "Max",
		surname: "Surname",
		avatar: mylogo,
		isOnline: true,
	},
	{
		id: 2,
		name: "Max2",
		surname: "Surname2",
		avatar:
			"https://randomwordgenerator.com/img/picture-generator/57e6d2404a5ab10ff3d8992cc12c30771037dbf85254794e702673d4934f_640.jpg",
		isOnline: false,
	},
	{
		id: 3,
		name: "Max3",
		surname: "Surname3",
		avatar:
			"https://randomwordgenerator.com/img/picture-generator/53e0d5424b57b10ff3d8992cc12c30771037dbf85254794e732a7ddd9645_640.jpg",
		isOnline: true,
	},
];
