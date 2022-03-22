import React, { useState, useEffect, useContext } from 'react';
import {
	Button,
	makeStyles,
	useTheme,
	Container,
	Grid,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Background from '../images/group-edit.jpg';
import Typography from '@material-ui/core/Typography';
import EventCard from '../components/EventCard';
import EventsData from '../data/event-list.json';

const useStyles = makeStyles((theme) => ({
	mainDiv: {
		position: 'relative',
		backgroundImage: `linear-gradient(to left, rgba(000, 000, 000, 0.8), rgba(000, 000, 000, 0.80)), url(${Background})`,
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
		maxHeight: '90',
		marginTop: '70px',
		marginBottom: '50px',
		backgroundColor: `rgba(0,0,0,.0)`,
		color: '#ddd',
		overflow: 'hidden',
	},
	hero: {
		textAlign: 'center',
		margin: '10px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '2.3rem',
		},
	},
}));

function Schedule() {
	const classes = useStyles();
	const theme = useTheme();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<div className={classes.mainDiv}>
				<Container className={classes.root}>
					<Typography variant='h3' className={classes.hero}>
						Event Schedule
					</Typography>
					<Grid
						container
						direction='row'
						justifyContent='center'
						alignItems='center'
					>
						{EventsData
							? EventsData.map((event) => (
									<Grid item sm={10} lg={8} key={event.id}>
										<EventCard
											id={event.id}
											key={event.id}
											date={event.date}
											track={event.track}
											cityState={event.cityState}
											cost={event.cost}
											format={event.format}
											description={event.description}
										/>
									</Grid>
							  ))
							: console.log('No results')}
					</Grid>
				</Container>
			</div>
		</>
	);
}

export default Schedule;

// {/* <Details
// 								id={result.id}
// 								key={result.id}
// 								name={result.name}
// 								street={result.street}
// 								city={result.city}
// 								state={result.state}
// 								website={result.website_url}
// 								type={result.brewery_type}
// 							/> */}
