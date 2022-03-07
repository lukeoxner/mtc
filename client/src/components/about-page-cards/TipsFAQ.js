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
		fontWeight: 500,
		marginBottom: '30px',
	},
	FAQGridItem: {
		// marginBottom: '15px',
	},
	question: {
		fontWeight: 500,
		marginBottom: '10px',
	},
	answer: {
		// answer styling here
		marginLeft: '25px',
		marginBottom: '30px',
	},
}));

function TipsFAQ() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<>
			<br />
			<Grid container direction='row' justifyContent='center'>
				<Grid item xs={10}>
					<Grid container direction='row'>
						<Grid item xs={12}>
							<Typography variant='h5' className={classes.heading}>
								Frequently Asked Questions
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography className={classes.question}>
								What all do I need to bring to the track?
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography className={classes.answer}>
								As much as we'd love to see your pooch, it's best to leave them
								at home.
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography className={classes.question}>
								Can I bring my dog?
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography className={classes.answer}>
								As much as we'd love to see your pooch, it's best to leave them
								at home.
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
}

export default TipsFAQ;
