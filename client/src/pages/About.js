import React from 'react';
import {
	Button,
	makeStyles,
	useTheme,
	Container,
	Grid,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Background from '../images/two-cars-back.jpg';
import Typography from '@material-ui/core/Typography';
import MediaCard from '../components/MediaCard';
import AboutNav from '../components/AboutNav';
import IntroCard from '../components/about-page-cards/Intro';
import TrackCard from '../components/about-page-cards/Track';

const useStyles = makeStyles((theme) => ({
	mainDiv: {
		position: 'relative',
		backgroundColor: '#fff',
		width: '100',
		height: '100vh',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
		backgroundAttachment: 'fixed',
		overflow: 'hidden',
	},
	root: {
		minWidth: 275,
		// maxHeight: "90",
		marginTop: '7%',
		backgroundColor: `rgba(0,0,0,.0)`,
		overflow: 'hidden',
	},
	hero: {
		marginTop: '50px',
		marginBottom: '20px',
		// paddingTop: "50px",
		height: '400px',
		width: '100',
		backgroundImage: `linear-gradient(to left, rgba(000, 000, 000, 0.6), rgba(000, 000, 000, 0.70)), url(${Background})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: '50% 80%',
		backgroundAttachment: 'fixed',
	},
	heroText: {
		fontSize: '2.5rem',
		fontWeight: '600',
		color: '#fff',
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			fontSize: '2.0rem',
		},
		paddingTop: '70px',
	},
	gridSection: {
		// padding: "20px",
		color: '#444',
		// justifyContent: "center",
		// alignItems: "center",
	},
}));

function About() {
	const classes = useStyles();
	const theme = useTheme();

	let activeCard = 'TrackCard';

	return (
		<>
			<div className={classes.hero}>
				<Typography className={classes.heroText}>About Us</Typography>
			</div>
			<div className={classes.mainDiv}>
				<Container className={classes.root}>
					<Grid
						container
						direction='row'
						justifyContent='center'
						// alignItems="center"
					>
						<Grid className={classes.gridSection} item sm={10} lg={3}>
							<AboutNav />
						</Grid>
						<Grid className={classes.gridSection} item sm={10} lg={9}>
							{(() => {
								switch (activeCard) {
									case 'IntroCard':
										return <IntroCard />;
									case 'TrackCard':
										return <TrackCard />;
									default:
										return null;
								}
							})()}
						</Grid>
					</Grid>
				</Container>
			</div>
		</>
	);
}

export default About;
