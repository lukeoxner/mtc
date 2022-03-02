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

	above: {
		display: 'none',
	},
	left: {
		display: 'inline',
	},

	[theme.breakpoints.down('sm')]: {
		left: {
			display: 'none',
		},
		above: {
			display: 'inline',
		},
	},
}));

function Intro() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<>
			<Grid container direction='row' justifyContent='center'>
				<Grid item xs={12} className={classes.heading}>
					<Typography variant='h4'>
						Introduction to McPherson Track Center
					</Typography>
				</Grid>
				<Grid item xs={10}>
					<Typography>
						Whether you're a seasoned track day veteran, or brand new to the
						world of high performance driving - you'll have a blast at McPherson
						Track Center track day events.
					</Typography>
				</Grid>
			</Grid>
		</>
	);
}

export default Intro;
