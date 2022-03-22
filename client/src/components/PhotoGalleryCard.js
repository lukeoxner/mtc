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
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const useStyles = makeStyles((theme) => ({
	cardContent: {
		textAlign: 'center',
	},
	cardActions: {
		justifyContent: 'center',
		marginBottom: '20px',
	},
}));

function PhotoGalleryCard() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<>
			<Card>
				<CardMedia
					component='img'
					height='160'
					image='https://lh3.googleusercontent.com/SrlEkVKX4SMBQH0oMZeVPvj2SjcMl6nm0U1c0022HQfQWUkvWDjmOKb9uETEuehLEgMlkwmB6YWdBBP0Uck5wO4s8ZWX78UlR6Woe1as5LJBAsNhny7W7Cqp5sxuId3O5zBrNyI9=w917-h611-no'
					alt='gallery thumbnail'
				/>
				<CardContent className={classes.cardContent}>
					<Typography gutterBottom variant='h5'>
						March 14, 2022
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Hallett Motor Racing Circuit
					</Typography>
				</CardContent>
				<CardActions className={classes.cardActions}>
					<Link
						href='https://photos.app.goo.gl/LiERhENFWA2HxP6q6'
						target='_blank'
						rel='noopener'
						color='inherit'
						underline='none'
					>
						<Button size='small' variant='outlined'>
							View Photos
						</Button>
					</Link>
				</CardActions>
			</Card>
		</>
	);
}

export default PhotoGalleryCard;
