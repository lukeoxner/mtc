import React from 'react';
import {
	Button,
	makeStyles,
	useTheme,
	Container,
	Grid,
	Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	heading: {
		textAlign: 'center',
		marginBottom: '15px',
	},
	subHeading: {
		textAlign: 'center',
		marginTop: '15px',
	},
	large: {
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	small: {
		display: 'none',
		[theme.breakpoints.down('sm')]: {
			display: 'inline',
		},
	},
}));

function Introduction() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<>
			<Grid container direction='row' justifyContent='center'>
				<Grid item xs={10}>
					<br />
					<Typography variant='h6' fontStyle='italic'>
						McPherson Track Center events allow you to sharpen your driving
						skills and push your high performance car to its limits, safely and
						legally, on{' '}
						<span className={classes.large}>a real race track.</span>
						<span className={classes.small}>the track.</span>
					</Typography>
					<br />
					<Typography>
						Our ultimate goal is to give you as much quality track time as
						possible. To that end, we limit these exclusive events to only 20
						participants, which results in no more than 5 cars on track at a
						time. This allows our drivers to focus on having fun and improving
						their lap times, rather than being stuck behind slower cars for most
						of the session.
					</Typography>
					<br />
					<Typography>
						In addition to tons of quality track time, we host a welcome dinner
						at a local restaurant the evening before, and provide a
						complimentary catered lunch during the event as well.
					</Typography>
					<br />
					<Typography>
						Learn more about our track events by clicking through the tabs{' '}
						<span className={classes.large}>on the left.</span>
						<span className={classes.small}>above.</span>
					</Typography>
				</Grid>
			</Grid>
		</>
	);
}

export default Introduction;
