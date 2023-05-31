import { FC } from "react";
import { IPost } from "../../types/types";

import { Box } from "@mui/system";
import {
	Avatar,
	Card,
	ImageList,
	ImageListItem,
	Typography,
} from "@mui/material";

import { Link } from "react-router-dom";
import { addZero } from "../../utils/utils";

interface IProps {
	posts: IPost[];
}

const Posts: FC<IProps> = ({ posts }: IProps) => {
	const postsList = posts.map(el => {
		const {
			author: { id, name, surname, avatar },
			images,
			content,
			createdAt,
			description,
		} = el;

		const hours = addZero(new Date(createdAt).getHours());
		const minutes = addZero(new Date(createdAt).getMinutes());

		return (
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
									alt={`${name} ${surname}`}
									title={`${name} ${surname}`}
									src={avatar}
									sx={{
										width: 50,
										height: 50,
									}}
								/>
							</Box>
							<Box sx={{ marginY: 1 }}>
								<Typography variant="body2" sx={{}}>
									{name} {surname}
								</Typography>
								<Typography
									variant="body2"
									sx={{ opacity: 0.5, color: "#000" }}
								>
									{hours}:{minutes}
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
		);
	});

	return <>{postsList}</>;
};
export default Posts;
