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
import EventCard from "../components/EventCard";

const useStyles = makeStyles((theme) => ({
	mainDiv: {
		position: "relative",
		backgroundImage: `linear-gradient(to left, rgba(000, 000, 000, 0.8), rgba(000, 000, 000, 0.80)), url(${Background})`,
		width: "100",
		height: "100vh",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		backgroundPosition: "center center",
		backgroundAttachment: "fixed",
		overflow: "hidden",
	},
	root: {
		minWidth: 275,
		maxHeight: "90",
		marginTop: "7%",
		backgroundColor: `rgba(0,0,0,.0)`,
		color: "white",
		overflow: "hidden",
	},
	hero: {
		fontSize: "2.3rem",
		fontWeight: "600",
		textShadow: "2px 2px #000000",
		textAlign: "center",
		marginTop: "40px",
		marginBottom: "40px",
		[theme.breakpoints.down("sm")]: {
			fontSize: "2.0rem",
		},
	},
}));

function Event() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<>
			<div className={classes.mainDiv}>
				<Container className={classes.root}>
					<Typography className={classes.hero}>
						Hallett Motor Racing Circuit - September 13, 2021
					</Typography>
					<Grid
						container
						direction="row"
						justifyContent="center"
						alignItems="center"
					>
						<Grid item sm={10} lg={8}>
							<EventCard />
						</Grid>
					</Grid>
				</Container>
			</div>
		</>
	);
}

export default Event;
