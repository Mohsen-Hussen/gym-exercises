import React from "react";
import { Typography, Box, Stack } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
	return (
		<Box sx={{ marginTop: { lg: "1rem", xs: "20px" } }} p="20px">
			<Typography
				sx={{ fontSize: { lg: "44px", xs: "25px" } }}
				fontWeight={700}
				color="#000"
				mb="33px"
			>
				Watch{" "}
				<span style={{ color: "#FF2625", textTransform: "capitalize" }}>
					{name}
				</span>{" "}
				exercise videos
			</Typography>
			<Stack
				sx={{ flexDirection: { lg: "row" }, gap: { lg: "80px", xs: "0px" } }}
				justifyContent="flex-start"
				flexWrap="wrap"
				alignItems="center"
			>
				{exerciseVideos?.slice(0, 3).map((item, index) => (
					<a
						key={index}
						className="exercise-video"
						target="_blank"
						rel="noreferrer"
						href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
					>
						<img
							style={{
								borderTopLeftRadius: "20px",
								borderTopRightRadius: "20px",
							}}
							src={item.video.thumbnails[0].url}
							alt={item.video.title}
						/>
						<Box>
							<Typography
								sx={{ fontSize: { lg: "25px", xs: "18px" } }}
								fontWeight={600}
								color="#000"
							>
								{item.video.title}
							</Typography>
							<Typography fontSize="14px" color="#000">
								{item.video.channelName}
							</Typography>
						</Box>
					</a>
				))}
			</Stack>
		</Box>
	);
};

export default ExerciseVideos;
