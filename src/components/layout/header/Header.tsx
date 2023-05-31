import { Badge, Grid, Container, InputBase } from "@mui/material";
import { ChangeEvent, FC, useState } from "react";
import { Link } from "react-router-dom";

import NotificationsIcon from "@mui/icons-material/Notifications";

import vklogo from "../../../assets/img/vklogo.png";

import SearchIcon from "@mui/icons-material/Search";

const Header: FC = () => {
	const [search, setSearch] = useState("");

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(() => e.target.value);
	};

	return (
		<div
			style={{
				height: 70,
				backgroundColor: "#486c99",
				padding: "0 65px",
				width: "100%",
			}}
		>
			<div
				style={{
					height: "95%",
					display: "flex",
					alignItems: "flex-end",
				}}
			>
				<div
					style={{
						width: "52%",
					}}
				>
					<Link
						style={{
							display: "flex",
						}}
						to="/"
					>
						<img
							style={{
								height: 40,
								width: 40,
								borderRadius: "50%",
								backgroundColor: "#FFF",
							}}
							src={vklogo}
							alt="vk-logo"
						/>
					</Link>
				</div>
				<div style={{ position: "relative", width: "100%" }}>
					<InputBase
						sx={{
							position: "relative",
							width: "100%",
							paddingLeft: "45%",
							background: "#24416b",
							borderRadius: 8,
							color: "#FFF",
							textAlign: "center",
						}}
						placeholder="Поиск"
						inputProps={{ "aria-label": "Поиск по сайту" }}
						value={search}
						onChange={handleChange}
					/>
					{!search ? (
						<SearchIcon
							color="info"
							sx={{
								position: "absolute",
								top: "45%",
								right: "53%",
								transform: "translate(-53%, -45%)",
							}}
						/>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Header;
