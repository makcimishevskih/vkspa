import { FC } from "react";

import { Box } from "@mui/system";
import {
	Avatar,
	Card,
	ImageList,
	ImageListItem,
	Typography,
} from "@mui/material";

import { Link } from "react-router-dom";
import useAuth from "../../providers/useAuth";
import useGetFBData from "../../firebase/useGetFBData";

import { IPost } from "../../types/types";

const Posts: FC = () => {
	const { user } = useAuth();

	const { innerData: postData } = useGetFBData<IPost>("posts", "createdAt");

	const postsList = postData
		.filter(el => el.author.id === user?.id)
		.map(
			({
				author: { id, name, avatar },
				images,
				content,
				createdAt,
				description,
			}) => (
				<Card
					key={createdAt}
					variant="outlined"
					sx={{ borderRadius: 2, padding: 2 }}
				>
					<Box>
						<Box>
							<Link
								className="profile-link"
								to={`/profile/${id}`}
								style={{
									display: "flex",
									alignItems: "center",
								}}
							>
								<Box
									sx={{
										position: "relative",
										marginRight: 2,
									}}
								>
									<Avatar
										alt={name}
										title={name}
										src={avatar}
										sx={{
											width: 50,
											height: 50,
										}}
									/>
								</Box>
								<Box sx={{ marginY: 1 }}>
									<Typography variant="body2" sx={{}}>
										{name}
									</Typography>
									<Typography
										variant="body2"
										sx={{ opacity: 0.5, color: "#000" }}
									>
										{createdAt}
									</Typography>
								</Box>
							</Link>
						</Box>

						<Box>
							<Typography variant="h6" sx={{ marginBottom: 2 }}>
								{content}
							</Typography>
						</Box>
						{description ? (
							<Typography variant="body2" sx={{ marginBottom: 2 }}>
								{description}
							</Typography>
						) : null}

						{images ? (
							<ImageList variant="masonry" cols={3} gap={8}>
								{images.map(img => (
									<ImageListItem key={img}>
										<img
											src={`${img}?w=248&fit=crop&auto=format`}
											srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
											alt="national geographic"
											loading="lazy"
										/>
									</ImageListItem>
								))}
							</ImageList>
						) : null}
					</Box>
				</Card>
			),
		);

	return <>{postsList}</>;
};
export default Posts;
