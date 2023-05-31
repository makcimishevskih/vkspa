import { FC } from "react";
import { usersInfo } from "../../../store/store";

import UserItem from "./UserItem";

const UserItems: FC = () => {
	const renderUserItems = usersInfo.map(el => <UserItem key={el.id} {...el} />);

	return <>{renderUserItems}</>;
};

export default UserItems;
