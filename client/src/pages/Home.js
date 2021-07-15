import React from "react";
import { Button, makeStyles, useTheme, Container } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import Background from "../images/girls-with-beers.jpg";
import Typography from "@material-ui/core/Typography";

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
		textAlign: "left",
		marginBottom: "30px",
		[theme.breakpoints.down("sm")]: {
			fontSize: "2.0rem",
		},
	},
}));

function Landing() {
	const classes = useStyles();
	const theme = useTheme();
	const { loginWithRedirect } = useAuth0();

	return (
		<>
			<div
				style={{
					position: "relative",
					backgroundImage: `linear-gradient(to left, rgba(000, 000, 000, 0), rgba(000, 000, 000, 0.90)), url(${Background})`,
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
						position: "absolute",
						bottom: "25%",
						left: "7%",
						width: "45%",
						maxHeight: "90",
						marginTop: "2rem",
						backgroundColor: `rgba(0,0,0,.0)`,
						color: "white",
						overflow: "hidden",
					}}
				>
					<Typography className={classes.hero}>
						BrewCrew helps you find great local breweries!
					</Typography>
					<Button variant="outlined" style={{ borderColor: "#f1a922" }}>
						<Link
							className={classes.mobileMenuItem}
							to="/search"
							style={{ textDecoration: "none" }}
						>
							<Typography
								style={{
									color: "#f1a922",
									textDecoration: "none",
									fontSize: "1rem",
									position: "relative",
									fontStyle: "italic",
									fontWeight: "500",
								}}
							>
								Search Breweries
							</Typography>
						</Link>
					</Button>
				</Container>
			</div>
		</>
	);
}

export default Landing;
