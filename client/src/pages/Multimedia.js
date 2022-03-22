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
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Background from '../images/two-cars-front.jpg';
import PhotoGalleryCard from '../components/PhotoGalleryCard';

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

function Multimedia() {
	const classes = useStyles();
	const theme = useTheme();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

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
							<PhotoGalleryCard />
						</Grid>
					</Grid>
				</Container>
			</div>
		</>
	);
}

export default Multimedia;
