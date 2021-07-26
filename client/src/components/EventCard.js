import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 800,
		justifyContent: "center",
		margin: "auto",
		// marginBottom: 20,
		[theme.breakpoints.down("sm")]: {
			marginTop: "40px",
			marginBottom: "30px",
		},
	},
	media: {
		maxWidth: 300,
		margin: "auto",
		padding: "10px",
		paddingTop: "20px",
		paddingBottom: "20px",
		objectFit: "fill",
		[theme.breakpoints.down("sm")]: {
			maxWidth: 250,
			padding: "10px",
		},
	},
	cardContent: {
		marginTop: 20,
		textAlign: "center",
	},
	date: {
		fontSize: "2rem",
		fontWeight: "500",
	},
	trackName: {
		fontSize: "1.5rem",
		fontWeight: "400",
		textAlign: "center",
	},
	eventInfo: {
		fontSize: "1.2rem",
		fontWeight: "300",
		margin: 30,
	},
	cardActions: {
		justifyContent: "center",
	},
	button: {
		marginBottom: "20px",
		color: "#e00000",
		borderColor: "#e00000",
	},
	link: {
		textDecoration: "none",
		color: "#e00000",
	},
}));

export default function MediaCard() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<Card className={classes.root}>
			<Grid container direction="row" justifyContent="center">
				<Grid item sm={4} lg={6}>
					<CardMedia
						component="img"
						className={classes.media}
						image="https://www.hallettracing.net/wp-content/uploads/2021/05/logo.png"
						title="Hallett"
					/>
				</Grid>
				<Grid className={classes.cardContent} item sm={4} lg={6}>
					<Typography gutterBottom className={classes.date}>
						September 13, 2021
					</Typography>
					<Typography gutterBottom className={classes.trackName}>
						Hallett Motor Racing Circuit
					</Typography>
					<Typography gutterBottom className={classes.trackName}>
						Tulsa, OK
					</Typography>
				</Grid>
				<Typography className={classes.eventInfo}>
					Come join us for another fun track day at Hallett! September track
					days often produce some of the best driving conditions and fastest lap
					times, as the weather is cooling off and the track is more rubbered
					in. Space is limited as usual, so be sure to contact us soon to sign
					up and guarantee your spot!
				</Typography>
				<br />
				<Grid item sm={10}>
					<Typography className={classes.trackName} style={{ fontWeight: 500 }}>
						Event Details
					</Typography>
				</Grid>
				<Grid item sm={10}>
					<Typography className={classes.eventInfo} style={{ marginTop: 15 }}>
						<span style={{ fontWeight: 400 }}>Format:</span> 5 run groups / 5
						cars per run group / 20min sessions
					</Typography>
				</Grid>
				<Grid item sm={10}>
					<Typography className={classes.eventInfo} style={{ marginTop: 0 }}>
						<span style={{ fontWeight: 400 }}>Cost:</span> $xxx per driver
					</Typography>
				</Grid>
				<Grid item sm={10}>
					<Typography className={classes.eventInfo} style={{ marginTop: 0 }}>
						<span style={{ fontWeight: 400 }}>Lodging:</span>{" "}
						<a
							href="https://www.ihg.com/holidayinnexpress/hotels/us/en/sand-springs/tulrp/hoteldetail"
							target="blank"
						>
							Holiday Inn Express in Sand Springs
						</a>
					</Typography>
				</Grid>
			</Grid>

			<CardActions className={classes.cardActions}>
				<Button className={classes.button} size="medium" variant="outlined">
					<Link className={classes.link} to="/event">
						Learn More
					</Link>
				</Button>
			</CardActions>
		</Card>
	);
}
