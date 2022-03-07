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
	},
	subHeading: {
		marginBottom: '10px',
	},
	link: {
		marginLeft: '30px',
	},
	resource: {
		marginBottom: '5px',
	},
}));

function Resources() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<>
			<Grid container direction='row' justifyContent='center'>
				{/* <Grid item xs={12} className={classes.heading}>
					<Typography variant='h4'>Event Info</Typography>
				</Grid> */}
				<Grid item xs={10}>
					<br />
					<Typography variant='h5' className={classes.heading}>
						High Performance Driving Resource Library
					</Typography>
					<br />
					<Typography>
						Whether you're newcomer to the world of high performance driving, or
						an experienced track day junkie who just want a little refresher -
						there's something for you in this collection of driving resources.
					</Typography>
					<br />
					<Typography variant='h6' className={classes.subHeading}>
						Videos
					</Typography>
					<Typography className={classes.resource}>
						{' '}
						- Onboard lap of Hallett (CCW)
						<Link
							href='https://youtu.be/E6GBDc7h_bw'
							target='_blank'
							rel='noopener'
							color='inherit'
							underline='always'
							className={classes.link}
						>
							https://youtu.be/E6GBDc7h_bw
						</Link>
					</Typography>
					<Typography className={classes.resource}>
						{' '}
						- The proper race track 'Driving Line'
						<Link
							href='https://youtu.be/2kY58DP6mPk'
							target='_blank'
							rel='noopener'
							color='inherit'
							underline='always'
							className={classes.link}
						>
							https://youtu.be/2kY58DP6mPk
						</Link>
					</Typography>
					<Typography className={classes.resource}>
						{' '}
						- Understeer vs Oversteer + how to respond
						<Link
							href='https://youtu.be/m5xn36CHkN0'
							target='_blank'
							rel='noopener'
							color='inherit'
							underline='always'
							className={classes.link}
						>
							https://youtu.be/m5xn36CHkN0
						</Link>
					</Typography>
					<Typography className={classes.resource}>
						{' '}
						- Should you turn traction control off?
						<Link
							href='https://youtu.be/rqT-t4YVhL4'
							target='_blank'
							rel='noopener'
							color='inherit'
							underline='always'
							className={classes.link}
						>
							https://youtu.be/rqT-t4YVhL4
						</Link>
					</Typography>
					<Typography className={classes.resource}>
						{' '}
						- How to pass other cars on track
						<Link
							href='https://youtu.be/KeMFannmtQY'
							target='_blank'
							rel='noopener'
							color='inherit'
							underline='always'
							className={classes.link}
						>
							https://youtu.be/KeMFannmtQY
						</Link>
					</Typography>
					<Typography className={classes.resource}>
						{' '}
						- Drive faster by 'Looking Ahead'
						<Link
							href='https://youtu.be/_p63hxS6vl8'
							target='_blank'
							rel='noopener'
							color='inherit'
							underline='always'
							className={classes.link}
						>
							https://youtu.be/_p63hxS6vl8
						</Link>
					</Typography>
				</Grid>
			</Grid>
		</>
	);
}

export default Resources;
