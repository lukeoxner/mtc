import React from 'react';
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
		backgroundColor: `rgba(0,0,0,.0)`,
		color: '#ddd',
		overflow: 'hidden',
	},
	hero: {
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			fontSize: '2.3rem',
		},
	},
}));

function Schedule() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<>
			<div className={classes.mainDiv}>
				<Container className={classes.root}>
					<Typography variant='h2' className={classes.hero}>
						Upcoming Events
					</Typography>
					<Grid
						container
						direction='row'
						justifyContent='center'
						alignItems='center'
					>
						<Grid item sm={10} lg={8}>
							<EventCard date='March 14, 2022' />
						</Grid>
						<Grid item sm={10} lg={8}>
							<EventCard date='May 16, 2022' />
						</Grid>
						<Grid item sm={10} lg={8}>
							<EventCard date='June 13, 2022' />
						</Grid>
						<Grid item sm={10} lg={8}>
							<EventCard date='July 18, 2022' />
						</Grid>
						<Grid item sm={10} lg={8}>
							<EventCard date='September 12, 2022' />
						</Grid>
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
