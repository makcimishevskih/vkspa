import { Card } from "@mui/material";
import { FC, ReactNode } from "react";
import { IStyle } from "../../types/types";

interface IProps {
	children: ReactNode;
	style?: IStyle;
}

const MyCard: FC<IProps> = ({ children, style = {} }: IProps) => {
	const cardStyle = {
		marginBottom: 15,
		background: "#F1F1F7",
		border: "1px solid #F1F1F7",
		borderRadius: 8,
		padding: 8,
	};

	const styles = { ...cardStyle, ...style };

	return (
		<Card style={styles} variant="outlined">
			{children}
		</Card>
	);
};

export default MyCard;
