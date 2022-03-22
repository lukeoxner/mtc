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
		// height: '100vh',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
		backgroundAttachment: 'fixed',
		overflow: 'hidden',
	},
	mainDiv: {},
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
	heading: {
		fontWeight: 500,
	},
	gridContainer: {
		marginBottom: '50px',
		marginTop: '20px',
		[theme.breakpoints.down('sm')]: {
			marginTop: '0px',
		},
	},
	gridSection: {
		color: '#444',
		marginTop: '20px',
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			marginBottom: '30px',
		},
	},
	gridSubSection: {
		color: '#444',
		marginTop: '20px',
		textAlign: 'center',
	},
	video: {
		width: '100%',
		height: '300px',
		[theme.breakpoints.down('sm')]: {
			height: '200px',
		},
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
			<div className={classes.hero}></div>
			<div className={classes.root}>
				<Container className={classes.mainDiv}>
					<Grid
						container
						direction='row'
						justifyContent='center'
						className={classes.gridContainer}
					>
						<Grid className={classes.gridSection} item xs={12} md={6}>
							<Grid container justifyContent='center'>
								<Grid item xs={10}>
									<Typography variant='h4' className={classes.heading}>
										Photos
									</Typography>
								</Grid>
								<Grid className={classes.gridSubSection} item xs={10} md={8}>
									<PhotoGalleryCard />
								</Grid>
							</Grid>
						</Grid>
						<Grid className={classes.gridSection} item xs={12} md={6}>
							<Grid container justifyContent='center'>
								<Grid item xs={10}>
									<Typography variant='h4' className={classes.heading}>
										Videos
									</Typography>
								</Grid>
								<Grid className={classes.gridSubSection} item xs={10}>
									<iframe
										className={classes.video}
										src='https://www.youtube.com/embed/xY-lUGSWrUc'
										title='YouTube video player'
										frameborder='0'
										allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
										allowfullscreen
									></iframe>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</div>
		</>
	);
}

export default Multimedia;
