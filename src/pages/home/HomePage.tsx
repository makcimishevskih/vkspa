import { FC, useState } from "react";
import { IPost } from "../../types/types";

import Posts from "./Posts";
import AddPostForm from "./AddPostForm";
import { initialPost } from "./initialPost";

const HomePage: FC = () => {
	const [posts, setPosts] = useState<IPost[]>([initialPost]);

	const handleAddPost = (postData: IPost) => {
		setPosts(state => [...state, postData]);
	};

	return (
		<div className="home">
			<AddPostForm handleAddPost={handleAddPost} />
			<Posts posts={posts} />
		</div>
	);
};

export default HomePage;
