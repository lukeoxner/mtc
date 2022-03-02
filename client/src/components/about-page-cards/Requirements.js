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

function Requirements() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<>
			<Grid container direction='row' justifyContent='center'>
				<Grid item xs={10} className={classes.heading}>
					<Typography variant='h4'>Track Day Requirements</Typography>
				</Grid>
				<Grid item xs={10} className={classes.heading}>
					<Typography>
						Here is a list of the things you'll need to participate in a track
						day with McPherson Track Center.
					</Typography>
				</Grid>
				<Grid item sm={10} md={6}>
					<Typography variant='h5' className={classes.subHeading}>
						Driver
					</Typography>
				</Grid>
				<Grid item sm={10} md={6}>
					<Typography variant='h5' className={classes.subHeading}>
						Car
					</Typography>
				</Grid>
			</Grid>
		</>
	);
}

export default Requirements;
