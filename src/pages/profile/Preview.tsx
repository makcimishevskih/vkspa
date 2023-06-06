import { CSSProperties, FC, MouseEvent } from "react";

import { Box, Button } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { IFile } from "../../types/types";

interface IProps {
	file: IFile;
	handleDeletePreview: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Preview: FC<IProps> = ({ file, handleDeletePreview }: IProps) => {
	const { name, url } = file;

	const imgStyles: CSSProperties = {
		width: 150,
		height: 150,
		objectFit: "cover",
		borderRadius: "50%",
	};

	return (
		<Box mb={5.4}>
			<div
				style={{
					marginBottom: 10,
					fontSize: 16,
					fontWeight: "bold",
					textAlign: "left",
				}}
			>
				Image Preview:
			</div>
			<img src={url} alt={name} style={imgStyles} />
			<Button onClick={handleDeletePreview}>
				<CloseIcon />
			</Button>
		</Box>
	);
};

export default Preview;
