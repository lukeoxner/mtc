import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 500,
		justifyContent: 'center',
		margin: 'auto',
		marginTop: '30px',
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
		// margin: 20,
		textAlign: 'center',
	},
	date: {
		fontSize: '2rem',
		fontWeight: '500',
	},
	trackName: {
		fontSize: '1.5rem',
		fontWeight: '400',
	},
	cardActions: {
		justifyContent: 'center',
	},
	button: {
		marginBottom: '20px',
		color: '#e00000',
		borderColor: '#e00000',
	},
	link: {
		textDecoration: 'none',
		color: '#e00000',
	},
}));

export default function MediaCard(props) {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<Card className={classes.root}>
			<CardMedia
				component='img'
				className={classes.media}
				image='https://www.hallettracing.net/wp-content/uploads/2021/05/logo.png'
				title='Hallett'
			/>
			<CardContent className={classes.cardContent}>
				<Typography gutterBottom className={classes.date}>
					{props.date}
				</Typography>
				<Typography gutterBottom className={classes.trackName}>
					Hallett Motor Racing Circuit - Tulsa, OK
				</Typography>
			</CardContent>

			<CardActions className={classes.cardActions}>
				<Button className={classes.button} size='medium' variant='outlined'>
					<Link className={classes.link} to='/event'>
						Learn More
					</Link>
				</Button>
			</CardActions>
		</Card>
	);
}
