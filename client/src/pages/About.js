import React, { useState, useEffect, useContext } from 'react';
import {
	Button,
	makeStyles,
	useTheme,
	Container,
	Grid,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Background from '../images/two-cars-back.png';
import Typography from '@material-ui/core/Typography';
import AboutContext from '../utils/AboutContext';
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
		marginTop: '20px',
		backgroundColor: `rgba(0,0,0,.0)`,
		overflow: 'hidden',
	},
	hero: {
		marginTop: '50px',
		marginBottom: '20px',
		// paddingTop: "50px",
		height: '250px',
		width: '100',
		// backgroundImage: `linear-gradient(to left, rgba(000, 000, 000, 0.6), rgba(000, 000, 000, 0.70)), url(${Background})`,
		backgroundImage: `url(${Background})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: '50% 70%',
		backgroundAttachment: 'relative',
		[theme.breakpoints.down('sm')]: {
			backgroundImage: 'none',
			height: '10px',
		},
	},
	heroText: {
		fontSize: '3.5rem',
		fontWeight: '600',
		color: '#fff',
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			fontSize: '2.0rem',
			color: '#000',
		},
		paddingTop: '110px',
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

	const [card, setCard] = useState('intro');

	const handleCardChange = (newCard) => {
		setCard(newCard);
	};

	return (
		<>
			<AboutContext.Provider value={handleCardChange}>
				<div className={classes.hero}>
					{/* <Typography className={classes.heroText}>About Us</Typography> */}
				</div>
				<div className={classes.mainDiv}>
					<Container className={classes.root}>
						<Grid
							container
							direction='row'
							justifyContent='center'
							// alignItems="center"
						>
							<Grid className={classes.gridSection} item sm={10} md={3}>
								<AboutNav />
							</Grid>
							<Grid className={classes.gridSection} item sm={10} md={9}>
								{(() => {
									switch (card) {
										case 'intro':
											return <IntroCard />;
										case 'track':
											return <TrackCard />;
										default:
											return null;
									}
								})()}
							</Grid>
						</Grid>
					</Container>
				</div>
			</AboutContext.Provider>
		</>
	);
}

export default About;
