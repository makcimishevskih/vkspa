import { FC } from "react";

import Posts from "./Posts";
import AddPostForm from "./AddPostForm";

const HomePage: FC<any> = () => {
	return (
		<div className="home">
			<AddPostForm />
			<Posts />
		</div>
	);
};

export default HomePage;
