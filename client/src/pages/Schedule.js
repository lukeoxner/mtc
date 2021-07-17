import React from "react";
import {
	Button,
	makeStyles,
	useTheme,
	Container,
	Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Background from "../images/group-edit.jpg";
import Typography from "@material-ui/core/Typography";
import MediaCard from "../components/MediaCard";

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 275,
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	indent: {
		textIndent: "30px",
	},
	hero: {
		fontSize: "2.3rem",
		fontWeight: "600",
		textShadow: "2px 2px #000000",
		textAlign: "center",
		marginTop: "40px",
		marginBottom: "20px",
		[theme.breakpoints.down("sm")]: {
			fontSize: "2.0rem",
		},
	},
}));

function Schedule() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<>
			<div
				style={{
					position: "relative",
					backgroundImage: `linear-gradient(to left, rgba(000, 000, 000, 0.8), rgba(000, 000, 000, 0.80)), url(${Background})`,
					width: "100",
					height: "100vh",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center center",
					backgroundAttachment: "fixed",
					overflow: "hidden",
				}}
			>
				<Container
					className={classes.root}
					style={{
						// position: "absolute",
						// top: "10%",
						// left: "50%",
						// width: "50%",
						maxHeight: "90",
						marginTop: "7%",
						backgroundColor: `rgba(0,0,0,.0)`,
						color: "white",
						overflow: "hidden",
					}}
				>
					<Typography className={classes.hero}>Upcoming Events</Typography>
					<Grid
						container
						direction="row"
						justifyContent="center"
						alignItems="center"
					>
						<Grid item sm={8} lg={6}>
							<MediaCard />

							{/* <Details
								id={result.id}
								key={result.id}
								name={result.name}
								street={result.street}
								city={result.city}
								state={result.state}
								website={result.website_url}
								type={result.brewery_type}
							/> */}
						</Grid>
					</Grid>
				</Container>
			</div>
		</>
	);
}

export default Schedule;
