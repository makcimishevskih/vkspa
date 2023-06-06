import { Box } from "@mui/material";
import { FC } from "react";

interface IProps {
	percentage: number;
}

const ProgressBar: FC<IProps> = ({ percentage }: IProps) => {
	const percentageFloored = Math.floor(percentage);

	return (
		<Box
			mt={2}
			sx={{
				position: "relative",
				backgroundColor: "rgba(25, 118, 210, 0.08)",
				borderRadius: "8px",
			}}
		>
			<Box
				sx={{
					position: "relative",
					zIndex: 2,
					fontSize: 16,
					padding: 1,
				}}
			>
				<span>Progress:{percentageFloored}%</span>
			</Box>
			<Box
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					width: `${percentageFloored}%`,
					height: 30,
					backgroundColor: "red",
				}}
			></Box>
		</Box>
	);
};

export default ProgressBar;
