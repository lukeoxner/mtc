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
		marginBottom: '15px',
	},
	note: {
		textIndent: '15px',
		fontSize: '14px',
		fontStyle: 'italic',
	},
}));

function TipsFAQ() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<>
			<Grid container direction='row' justifyContent='center'>
				<Grid item xs={10} className={classes.heading}>
					<Typography variant='h4'>Tips and FAQs</Typography>
				</Grid>
				<Grid item xs={10} className={classes.heading}>
					<Typography>
						Here is a list of the things you'll need to participate in a track
						day with McPherson Track Center.
					</Typography>
				</Grid>
				<Grid item sm={10} md={5}>
					<Typography variant='h5' className={classes.subHeading}>
						Driver
					</Typography>
					<Grid container justifyContent='center'>
						<Grid item sm={12} md={8}>
							<Typography> - At least 18 years old</Typography>
							<Typography> - Current driver's license </Typography>
							<Typography> - Helmet with Snell SA2015+ rating</Typography>
							<Typography> - Long sleeve cotton shirt</Typography>
							<Typography> - Full length cotton pants</Typography>
							<Typography> - Cotton socks</Typography>
							<Typography> - Closed toe shoes</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item sm={10} md={5}>
					<Typography variant='h5' className={classes.subHeading}>
						Car
					</Typography>
					<Grid container justifyContent='center'>
						<Grid item sm={12} md={8}>
							<Typography> - Almost ANY street legal car!</Typography>
							<Typography className={classes.note}>
								{' '}
								SUVs, trucks, vans prohibited
							</Typography>
							<Typography className={classes.note}>
								{' '}
								Convertibles require rollover protection
							</Typography>
							<Typography> - Helmet with Snell SA2015+ rating</Typography>
							<Typography> - Long sleeve cotton shirt</Typography>
							<Typography> - Full length cotton pants</Typography>
							<Typography> - Cotton socks</Typography>
							<Typography> - Closed toe shoes</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
}

export default TipsFAQ;
