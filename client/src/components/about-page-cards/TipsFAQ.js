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
	heading: {
		textAlign: 'center',
		fontWeight: 500,
		// marginBottom: '30px',
	},
	FAQGridItem: {
		// marginBottom: '15px',
	},
	question: {
		fontWeight: 500,
		marginBottom: '10px',
		marginTop: '30px',
	},
	answer: {
		// answer styling here
		marginLeft: '25px',
	},
	answerIndent: {
		// answer styling here
		marginLeft: '50px',
	},
	answerBold: {
		fontWeight: 500,
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
								What should I bring with me to the event?
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography className={classes.answer}>
								In addition to the gear listed on the Requirements page, we
								recommend bringing the following:
							</Typography>
							<Typography className={classes.answerIndent}>
								<span className={classes.answerBold}>For your car:</span> high
								quality air pressure gauge, 12v air compressor, torque wrench,
								basic tools, extra fluids (engine oil, coolant, brake fluid),
								glass cleaner, microfiber towels
							</Typography>
							<Typography className={classes.answerIndent}>
								<span className={classes.answerBold}>For you:</span> bottled
								water, Gatorade, sunscreen, umbrella or rain jacket, folding
								chair, driving shoes
							</Typography>
							<Typography className={classes.answerIndent}>
								<span className={classes.answerBold}>Misc:</span> printed{' '}
								<Link
									href='https://bit.ly/3sLMxQZ'
									target='_blank'
									rel='noopener'
									color='inherit'
									underline='always'
								>
									Hallett Track Map
								</Link>
								, printed and completed{' '}
								<Link
									href='https://www.hallettracing.net/wp-content/uploads/2021/12/Tech-form-2022.pdf'
									target='_blank'
									rel='noopener'
									color='inherit'
									underline='always'
								>
									Tech Form
								</Link>
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography className={classes.question}>
								Can I bring friends, and can they ride along with me on track?
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography className={classes.answer}>
								Yes, and yes! There's no cost for friends to join you at the
								event. They are welcome to ride along on track, provided they
								are wearing the same safety gear as required for the driver (see
								Requirements page). Passengers must keep their hands and arms
								inside the car at all times, and are NOT allowed to hold
								anything like a phone or camera while on track.
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography className={classes.question}>
								Is fuel available to purchase at the track?
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography className={classes.answer}>
								Yes! Hallett has a self-service fuel station that accepts credit
								cards, and features several octanes of fuel. You're also welcome
								to bring in your own fuel in jugs as well.
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography className={classes.question}>
								How can I see my lap times?
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography className={classes.answer}>
								One way is by renting a transponder from Hallett - this allows
								you to see your lap times on a printout at the end of each
								session. Another method is to use an in-car GPS lap timer. There
								are apps available for your smartphone such as Harry's Lap
								Timer, but if you really want to get serious about improving
								your lap times, we recommend purchasing a dedicated GPS lap
								timer device. One of the most popular options is the{' '}
								<Link
									href='https://winecountrymotorsports.com/product_info.php/products_id/2110'
									target='_blank'
									rel='noopener'
									color='inherit'
									underline='always'
									className={classes.link}
								>
									AiM Solo2 DL GPS lap timer with RAM mount
								</Link>
								. This device will give you real-time feedback as you're
								driving, comparing your current lap to your best lap, allowing
								you to learn and make adjustments on the fly. The DL model
								integrates with your car's OBD2 port so you can overlay engine
								data with your lap data. If your car is older and lacks an OBD2
								port, you can save money and buy the base model Solo2. Another
								new option is the{' '}
								<Link
									href='https://discover.garmin.com/en-US/catalyst/'
									target='_blank'
									rel='noopener'
									color='inherit'
									underline='always'
									className={classes.link}
								>
									Garmin Catalyst
								</Link>{' '}
								- this device enhances the driver feedback with voice responses
								that talk you through your performance during the session.
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
}

export default TipsFAQ;
