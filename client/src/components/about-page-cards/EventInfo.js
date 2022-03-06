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
}));

function EventInfo() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<>
			<Grid container direction='row' justifyContent='center'>
				<Grid item xs={12} className={classes.heading}>
					<Typography variant='h4'>Event Info</Typography>
				</Grid>
				<Grid item xs={10}>
					<br />
					<Typography className={classes.heading}>
						Here you will find info about our event format - coming soon!
					</Typography>
				</Grid>
			</Grid>
		</>
	);
}

export default EventInfo;
