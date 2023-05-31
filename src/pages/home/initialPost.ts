import { IPost } from "../../types/types";

export const initialPost: IPost = {
	author: {
		id: Math.random(),
		name: "National",
		surname: "Geographic",
		avatar:
			"https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/63f4d38bfedb830fe829834b_national-geographic-logo-p-1080.png",
	},
	createdAt: new Date().toString(),
	content: "Осенняя подборка лучших фотографий",
	images: [
		"https://i.natgeofe.com/n/af840d08-90d2-4d46-8b18-d1cbc39f08ab/family_16x9.jpg?w=767&h=431",
		"https://i.natgeofe.com/n/230e7369-58ac-404b-a5a2-73c6c2a887de/nationalgeographic_1740210_16x9.jpg?w=767&h=431",
		"https://i.natgeofe.com/n/43767514-e029-4629-af4d-21efa6f72b8b/science_16x9.jpg?w=767&h=431",
	],
};

