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
import VideoBlock from '../resource-blocks/VideoBlock';

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
		// marginBottom: '5px',
	},
}));

function Videos() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<>
			<Grid container direction='row'>
				<Grid item xs={12}>
					<Typography variant='h6' className={classes.subHeading}>
						Videos
					</Typography>
				</Grid>
				<Grid item xs={12} md={6}>
					<Typography className={classes.resource}>
						{' '}
						- Onboard lap of Hallett (CCW)
					</Typography>
				</Grid>
				<Grid item xs={12} md={6} className={classes.resourceGridItem}>
					<Link
						href='https://youtu.be/E6GBDc7h_bw'
						target='_blank'
						rel='noopener'
						color='inherit'
						underline='always'
						className={classes.link}
					>
						https://youtu.be/E6GBDc7h_bw
					</Link>{' '}
				</Grid>
				<Grid item xs={12} md={6}>
					<Typography className={classes.resource}>
						{' '}
						- The proper race track 'Driving Line'
					</Typography>
				</Grid>
				<Grid item xs={12} md={6} className={classes.resourceGridItem}>
					<Link
						href='https://youtu.be/2kY58DP6mPk'
						target='_blank'
						rel='noopener'
						color='inherit'
						underline='always'
						className={classes.link}
					>
						https://youtu.be/2kY58DP6mPk
					</Link>{' '}
				</Grid>
				<Grid item xs={12} md={6}>
					<Typography className={classes.resource}>
						{' '}
						- Understeer vs Oversteer + how to respond
					</Typography>
				</Grid>
				<Grid item xs={12} md={6} className={classes.resourceGridItem}>
					<Link
						href='https://youtu.be/m5xn36CHkN0'
						target='_blank'
						rel='noopener'
						color='inherit'
						underline='always'
						className={classes.link}
					>
						https://youtu.be/m5xn36CHkN0
					</Link>{' '}
				</Grid>

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
		</>
	);
}

export default Videos;
