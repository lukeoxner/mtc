import React from 'react';
import {
	Button,
	Card,
	CardActions,
	CardActionArea,
	CardContent,
	CardMedia,
	makeStyles,
	useTheme,
	Container,
	Grid,
	Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		// maxWidth: 500,
		justifyContent: 'center',
		margin: 'auto',
		marginTop: '30px',
		backgroundColor: '#eee',
	},
	media: {
		maxWidth: 300,
		margin: 'auto',
		padding: '10px',
		paddingTop: '20px',
		paddingBottom: '20px',
		objectFit: 'fill',
		[theme.breakpoints.down('sm')]: {
			maxWidth: 250,
			padding: '10px',
		},
	},
	cardContent: {
		paddingBottom: '5px',
		textAlign: 'center',
	},
	date: {
		fontSize: '1.5rem',
		fontWeight: '500',
	},
	trackName: {
		fontSize: '1.2rem',
		fontWeight: '400',
	},
	cardActions: {
		justifyContent: 'center',
	},
	button: {
		marginBottom: '10px',
		color: '##ad0a0a',
		borderColor: '#ad0a0a',
	},
	link: {
		textDecoration: 'none',
		color: '#ad0a0a',
	},
}));

export default function MediaCard(props) {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<Card className={classes.root}>
			<Grid
				container
				direction='row'
				justifyContent='space-around'
				alignItems='center'
			>
				<Grid item xs={3}>
					<CardMedia
						component='img'
						className={classes.media}
						image='https://www.hallettracing.net/wp-content/uploads/2021/05/logo.png'
						title='Hallett'
					/>
				</Grid>
				<Grid item xs={7}>
					<CardContent className={classes.cardContent}>
						<Typography gutterBottom className={classes.date}>
							{props.date}
						</Typography>
						<Typography gutterBottom className={classes.trackName}>
							{props.track} - {props.cityState}
						</Typography>
					</CardContent>

					<CardActions className={classes.cardActions}>
						<Button className={classes.button} size='medium' variant='outlined'>
							<Link className={classes.link} to='/event'>
								Event Details
							</Link>
						</Button>
					</CardActions>
				</Grid>
			</Grid>
		</Card>
	);
}
