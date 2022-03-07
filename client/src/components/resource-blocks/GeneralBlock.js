import React from 'react';
import {
	Button,
	makeStyles,
	useTheme,
	Container,
	Grid,
	Link,
	Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	resourceGridItem: {
		marginBottom: '15px',
	},
	subHeading: {
		marginBottom: '10px',
	},
	link: {
		marginLeft: '30px',
		// marginBottom: '15px',
	},
	resource: {
		marginBottom: '5px',
	},
}));

function GeneralInfo() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<>
			<Grid container direction='row'>
				<Grid item xs={12}>
					<Typography variant='h6' className={classes.subHeading}>
						General Info
					</Typography>
				</Grid>
				<Grid item xs={12} md={6}>
					<Typography className={classes.resource}>
						{' '}
						- Corner marshall flags and their meanings
					</Typography>
				</Grid>
				<Grid item xs={12} md={6} className={classes.resourceGridItem}>
					<Link
						href='https://bit.ly/3tFXVNu'
						target='_blank'
						rel='noopener'
						color='inherit'
						underline='always'
						className={classes.link}
					>
						https://bit.ly/3tFXVNu
					</Link>{' '}
				</Grid>
				<Grid item xs={12} md={6}>
					<Typography className={classes.resource}>
						{' '}
						- Track map of Hallett Motor Racing Circuit
					</Typography>
				</Grid>
				<Grid item xs={12} md={6} className={classes.resourceGridItem}>
					<Link
						href='https://bit.ly/3sLMxQZ'
						target='_blank'
						rel='noopener'
						color='inherit'
						underline='always'
						className={classes.link}
					>
						https://bit.ly/3sLMxQZ
					</Link>{' '}
				</Grid>
			</Grid>
		</>
	);
}

export default GeneralInfo;
