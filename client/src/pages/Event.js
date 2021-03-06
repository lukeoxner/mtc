import React, { useState, useEffect, useContext } from 'react';
import {
	Button,
	makeStyles,
	useTheme,
	Container,
	Grid,
	Typography,
} from '@material-ui/core';
import EventDetailCard from '../components/EventDetailCard';

const useStyles = makeStyles((theme) => ({
	mainDiv: {
		position: 'relative',
		backgroundColor: '#292929',
		width: '100',
		// height: '100vh',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
		backgroundAttachment: 'fixed',
		overflow: 'hidden',
	},
	root: {
		minWidth: 275,
		maxHeight: '100',
		marginTop: '100px',
		marginBottom: '100px',
		backgroundColor: `rgba(0,0,0,.0)`,
		color: 'white',
		overflow: 'hidden',
	},
	hero: {
		fontSize: '2.3rem',
		fontWeight: '600',
		textShadow: '2px 2px #000000',
		textAlign: 'center',
		marginTop: '40px',
		marginBottom: '40px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '2.0rem',
		},
	},
}));

function Event() {
	const classes = useStyles();
	const theme = useTheme();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// Get event id from url
	let eventId = window.location.pathname.split('/').filter(Boolean).pop();

	console.log(eventId);

	return (
		<>
			<div className={classes.mainDiv}>
				<Container className={classes.root}>
					<Grid
						container
						direction='row'
						justifyContent='center'
						alignItems='center'
					>
						<Grid item sm={10} lg={8}>
							<EventDetailCard eventId={eventId} />
						</Grid>
					</Grid>
				</Container>
			</div>
		</>
	);
}

export default Event;
