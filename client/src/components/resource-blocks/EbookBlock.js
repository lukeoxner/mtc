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
	subHeading: {
		marginBottom: '10px',
	},
	link: {
		// marginLeft: '30px',
		// marginBottom: '15px',
	},
	resource: {
		marginBottom: '5px',
	},
}));

function Ebooks() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<>
			<Grid container direction='row'>
				<Grid item xs={12}>
					<Typography variant='h6' className={classes.subHeading}>
						eBooks
					</Typography>
				</Grid>
				<Typography className={classes.resource}>
					{' '}
					- HPDE First Timer's Guide by Ross Bentley
					<Link
						href='https://bit.ly/3vKT7Jk'
						target='_blank'
						rel='noopener'
						color='inherit'
						underline='always'
						className={classes.link}
					>
						https://bit.ly/3vKT7Jk
					</Link>
				</Typography>
				<Typography className={classes.resource}>
					{' '}
					- How to Learn a Track...FAST! by Ross Bentley
					<Link
						href='https://bit.ly/3HOWuBC'
						target='_blank'
						rel='noopener'
						color='inherit'
						underline='always'
						className={classes.link}
					>
						https://bit.ly/3HOWuBC
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
			</Grid>
		</>
	);
}

export default Ebooks;
