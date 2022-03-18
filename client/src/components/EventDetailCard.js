import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import EventsData from '../data/event-list.json';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 800,
		height: '100%',
		justifyContent: 'center',
		margin: '5px',
		padding: '10px',
		// marginBottom: 20,
		[theme.breakpoints.down('sm')]: {
			marginTop: '40px',
			marginBottom: '30px',
		},
	},
	media: {
		maxWidth: 300,
		margin: 'auto',
		padding: '10px',
		paddingTop: '20px',
		paddingBottom: '20px',
		objectFit: 'fill',
		[theme.breakpoints.down('sm')]: {
			maxWidth: 250,
			padding: '10px',
		},
	},
	cardContent: {
		marginTop: 20,
		textAlign: 'center',
	},
	date: {
		fontSize: '2rem',
		fontWeight: '500',
	},
	trackName: {
		fontSize: '1.5rem',
		fontWeight: '400',
		textAlign: 'center',
	},
	eventInfo: {
		fontSize: '1.2rem',
		fontWeight: '300',
		margin: 30,
	},
	cardActions: {
		justifyContent: 'center',
	},
	button: {
		marginBottom: '20px',
		color: '#e00000',
		borderColor: '#e00000',
	},
	link: {
		textDecoration: 'none',
		color: '#e00000',
	},
}));

export default function EventDetailCard(props) {
	const classes = useStyles();
	const theme = useTheme();

	let eventDataArr = EventsData.filter((event) => event.id == props.eventId);

	console.log(eventDataArr);

	let eventData = eventDataArr[0];

	console.log(eventData);

	return (
		<>
			{eventData ? (
				<Card className={classes.root}>
					<Grid container direction='row' justifyContent='center'>
						<Grid item sm={4} lg={6}>
							<CardMedia
								component='img'
								className={classes.media}
								image='https://www.hallettracing.net/wp-content/uploads/2021/05/logo.png'
								title='Hallett'
							/>
						</Grid>
						<Grid className={classes.cardContent} item sm={4} lg={6}>
							<Typography gutterBottom className={classes.date}>
								{eventData.date}
							</Typography>
							<Typography gutterBottom className={classes.trackName}>
								{eventData.track}
							</Typography>
							<Typography gutterBottom className={classes.trackName}>
								{eventData.cityState}
							</Typography>
						</Grid>
						<Typography className={classes.eventInfo}>
							{eventData.description}
						</Typography>
						<br />
						<Grid item sm={10}>
							<Typography
								className={classes.trackName}
								style={{ fontWeight: 500 }}
							>
								Event Details
							</Typography>
						</Grid>
						<Grid item sm={10}>
							<Typography
								className={classes.eventInfo}
								style={{ marginTop: 15 }}
							>
								<span style={{ fontWeight: 400 }}>Format:</span>{' '}
								{eventData.format}
							</Typography>
						</Grid>
						<Grid item sm={10}>
							<Typography
								className={classes.eventInfo}
								style={{ marginTop: 0 }}
							>
								<span style={{ fontWeight: 400 }}>Cost:</span> {eventData.cost}{' '}
								per driver
							</Typography>
						</Grid>
						<Grid item sm={10}>
							<Typography
								className={classes.eventInfo}
								style={{ marginTop: 0 }}
							>
								<span style={{ fontWeight: 400 }}>Lodging:</span>{' '}
								<a
									href='https://www.ihg.com/holidayinnexpress/hotels/us/en/sand-springs/tulrp/hoteldetail'
									target='blank'
								>
									Holiday Inn Express in Sand Springs
								</a>
							</Typography>
						</Grid>
						<Grid item sm={10}>
							<Typography
								className={classes.eventInfo}
								style={{ marginTop: 0 }}
							>
								<span style={{ fontWeight: 400 }}>Track Info:</span>{' '}
								<a href='https://www.hallettracing.net/' target='blank'>
									Hallett Motor Racing Circuit
								</a>
							</Typography>
						</Grid>
						<Grid item sm={10}>
							<Typography
								className={classes.eventInfo}
								style={{ marginTop: 0 }}
							>
								<span style={{ fontWeight: 400 }}>Track Video Lap:</span>{' '}
								<a href='https://youtu.be/Ir0MgKkjWAY' target='blank'>
									Porsche Cayman GT4 at Hallett
								</a>
							</Typography>
						</Grid>
						<Grid item sm={10}>
							<Typography
								className={classes.eventInfo}
								style={{ marginTop: 0 }}
							>
								<span style={{ fontWeight: 400 }}>How to Register:</span> Call
								Rick at 501-565-1911
							</Typography>
						</Grid>
					</Grid>
				</Card>
			) : (
				<Redirect to='/schedule' />
			)}
		</>
	);
}
