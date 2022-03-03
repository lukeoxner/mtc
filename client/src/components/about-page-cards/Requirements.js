import React from 'react';
import {
	Button,
	makeStyles,
	useTheme,
	Container,
	Grid,
	Typography,
	Link,
} from '@material-ui/core';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import PerfectionPlusLogo from '../../images/perfection-plus-logo.jpeg';

const useStyles = makeStyles((theme) => ({
	heading: {
		textAlign: 'center',
		marginBottom: '15px',
	},
	subHeading: {
		// textAlign: 'center',
		marginTop: '15px',
		marginBottom: '15px',
	},
	note: {
		textIndent: '15px',
		fontSize: '14px',
		fontStyle: 'italic',
	},
	inspectionAdContainer: {
		marginTop: '35px',
		marginBottom: '50px',
	},
	perfectionPlusLogoContainer: {
		marginTop: '15px',
		marginBottom: '50px',
		// height: '200px',
	},
	perfectionPlusLogo: {
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
		height: '80px',
		width: '310px',
	},
	address: {
		textAlign: 'end',
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
				{/* <Grid item xs={10} className={classes.heading}>
					<Typography>
						Here are the essentials you'll need to participate in a track day
						with McPherson Track Center.
					</Typography>
				</Grid> */}
				<Grid item sm={10} md={10}>
					<Typography variant='h5' className={classes.subHeading}>
						Driver
					</Typography>
					<Typography>
						Whether you're a professional racing driver, or a complete beginner
						to high performance driving - we welcome drivers of all experience
						levels. If you are at least 18 years old, have a valid driver's
						license, and a good attitude - our track events are for you!
					</Typography>
					<br />
					<Typography>
						We try to keep things simple in terms of driver gear. You'll just
						need a long sleeve cotton shirt, full length cotton pants, closed
						toe shoes, and a helmet with a Snell rating of SA2015 or higher.
						Motorcycle helmets are not allowed. If you don't have a SA2015-rated
						helmet, you can rent one for $25/day.
					</Typography>
					<br />
					<Typography variant='h5' className={classes.subHeading}>
						Car
					</Typography>
					<Typography>
						Almost all street legal cars are eligible to participate in our
						events! While our groups trend towards modern German sports cars, we
						have had everything from Japanese exotics to classic American muscle
						get out on track with us. Convertibles are welcome to participate,
						provided they have factory or aftermarket rollover protection. SUVs,
						trucks, vans, and wagons are not allowed without specific prior
						approval.
					</Typography>
					<br />
					<Typography>
						The most important thing is that your car is well maintained and in
						good, safe running order. It's best to have a thorough inspection
						performed by a mechanic experienced with race cars and high
						performance driving events.
					</Typography>
					<Grid
						container
						direction='row'
						justifyContent='space-between'
						className={classes.inspectionAdContainer}
					>
						<Grid item xs={10} md={6}>
							<Typography>
								We recommend having this inspection performed by Perfection Plus
								- the official provider of maintenance, repair, and race prep
								for McPherson Track Center. Operated by father / son duo Steve
								and Rick McPherson, Perfection Plus has been Arkansas' premier
								independent service facility for Porsche&reg; and other exotics
								for nearly two decades.
							</Typography>
						</Grid>

						<Grid item xs={8} md={5}>
							<Card sx={{ marginBottom: '20px' }}>
								<CardMedia
									component='img'
									height='70'
									image={PerfectionPlusLogo}
									alt='perfection plus logo'
								/>
								<CardContent>
									<Grid container direction='row'>
										<Grid item xs={6}>
											<Typography variant='h6' color='text.secondary'>
												501-565-1911
											</Typography>
										</Grid>
										<Grid item xs={6} align='center'>
											<Typography variant='body2' color='text.secondary'>
												9 Trigon Place
											</Typography>
											<Typography variant='body2' color='text.secondary'>
												Little Rock, AR
											</Typography>
										</Grid>
									</Grid>
								</CardContent>
								<CardActions sx={{ justifyContent: 'space-evenly' }}>
									<Link
										href='http://www.perfection-plus.com/'
										target='_blank'
										rel='noopener'
										underline='none'
									>
										<Button size='small'>Website</Button>
									</Link>
									<Link
										href='https://www.facebook.com/people/Perfection-Plus/100063736413093/'
										target='_blank'
										rel='noopener'
										underline='none'
									>
										<Button size='small'>Facebook</Button>
									</Link>
								</CardActions>
							</Card>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
}

export default Requirements;
