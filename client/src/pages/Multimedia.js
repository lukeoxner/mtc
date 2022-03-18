import React, { useState, useEffect, useContext } from 'react';
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
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Background from '../images/two-cars-front.jpg';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'relative',
		backgroundColor: '#fff',
		width: '100',
		height: '100vh',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
		backgroundAttachment: 'fixed',
		overflow: 'hidden',
	},
	mainDiv: {
		// minWidth: 275,
		// marginTop: '20px',
		// overflow: 'hidden',
	},
	hero: {
		marginTop: '50px',
		height: '250px',
		width: '100',
		backgroundImage: `linear-gradient(to left, rgba(000, 000, 000, 0.3), rgba(000, 000, 000, 0.3)), url(${Background})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: '50% 55%',
		backgroundAttachment: 'relative',
		[theme.breakpoints.down('sm')]: {
			height: '100px',
		},
	},
	gridContainer: {
		marginBottom: '50px',
		marginTop: '30px',
	},
	gridSection: {
		color: '#444',
		marginTop: '20px',
	},
	cardContent: {
		textAlign: 'center',
	},
	cardActions: {
		justifyContent: 'center',
		marginBottom: '20px',
	},
}));

function About() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<>
			<div className={classes.hero}>
				{/* <Typography className={classes.heroText}>About Us</Typography> */}
			</div>
			<div className={classes.root}>
				<Container className={classes.mainDiv}>
					<Grid
						container
						direction='row'
						justifyContent='center'
						className={classes.gridContainer}
					>
						<Grid className={classes.gridSection} item xs={10}>
							<Typography variant='h4'>Photo Galleries</Typography>
						</Grid>
						<Grid className={classes.gridSection} item xs={10} md={3}>
							<Card sx={{ maxWidth: 400 }}>
								<CardMedia
									component='img'
									height='140'
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
											Learn More
										</Button>
									</Link>
								</CardActions>
							</Card>
						</Grid>
					</Grid>
				</Container>
			</div>
		</>
	);
}

export default About;
