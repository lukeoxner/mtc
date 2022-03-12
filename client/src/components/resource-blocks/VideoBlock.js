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
						- Hallett onboard lap with Luke Oxner
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
				<Grid item xs={12} md={6}>
					<Typography className={classes.resource}>
						{' '}
						- Safely passing other cars on track
					</Typography>
				</Grid>
				<Grid item xs={12} md={6} className={classes.resourceGridItem}>
					<Link
						href='https://youtu.be/KeMFannmtQY'
						target='_blank'
						rel='noopener'
						color='inherit'
						underline='always'
						className={classes.link}
					>
						https://youtu.be/KeMFannmtQY
					</Link>{' '}
				</Grid>
				<Grid item xs={12} md={6}>
					<Typography className={classes.resource}>
						{' '}
						- Drive faster by 'Looking Ahead'
					</Typography>
				</Grid>
				<Grid item xs={12} md={6} className={classes.resourceGridItem}>
					<Link
						href='https://youtu.be/_p63hxS6vl8'
						target='_blank'
						rel='noopener'
						color='inherit'
						underline='always'
						className={classes.link}
					>
						https://youtu.be/_p63hxS6vl8
					</Link>{' '}
				</Grid>
			</Grid>
		</>
	);
}

export default Videos;
