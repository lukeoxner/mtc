import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	root: {
		maxWidth: 600,
		justifyContent: "center",
	},
	media: {
		height: 200,
		width: 400,
		margin: "auto",
	},
});

export default function MediaCard() {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					component="img"
					className={classes.media}
					image="https://www.hallettracing.net/wp-content/uploads/2021/05/logo.png"
					title="Hallett"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						Hallett Motor Racing Circuit - Tulsa, OK
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						Hallett Motor Racing Circuit is a track in Oklahoma.
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					Share
				</Button>
				<Button size="small" color="primary">
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
}
