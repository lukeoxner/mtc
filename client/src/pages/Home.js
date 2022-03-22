import React, { useState, useEffect, useContext } from 'react';
import {
	Button,
	makeStyles,
	useTheme,
	Container,
	Grid,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import BackgroundDesktop from '../images/gt4-background.jpg';
import BackgroundMobile from '../images/mobile-landing.jpg';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	background: {
		position: 'relative',
		backgroundImage: `linear-gradient(to left, rgba(000, 000, 000, 0), rgba(000, 000, 000, 0.40)), url(${BackgroundDesktop})`,
		width: '100',
		height: '100vh',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
		backgroundAttachment: 'fixed',
		overflow: 'hidden',
		[theme.breakpoints.down('sm')]: {
			backgroundImage: `url(${BackgroundMobile})`,
		},
	},
	root: {
		color: '#ddd',
		overflow: 'hidden',
		marginTop: '200px',
		[theme.breakpoints.down('sm')]: {
			// small version stuff here
			marginTop: '170px',
		},
	},
	grid: {
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
		},
	},
	subGrid: {
		justifyContent: 'center',
		textAlign: 'center',
	},
	hero: {
		fontSize: '2.1rem',
		fontWeight: '600',
		fontStyle: 'italic',
		textShadow: '2px 2px #000000',
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.5rem',
		},
		[theme.breakpoints.between('sm', 'md')]: {
			fontSize: '1.7rem',
		},
	},
	mtc: {
		fontSize: '2.7rem',
		fontWeight: '700',
		fontStyle: 'italic',
		textShadow: '2px 2px #000000',
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.8rem',
		},
		[theme.breakpoints.between('sm', 'md')]: {
			fontSize: '2.5rem',
		},
	},
	hpde: {
		fontSize: '1.5rem',
		fontWeight: '600',
		fontStyle: 'italic',
		textShadow: '2px 2px #000000',
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.2rem',
		},
		[theme.breakpoints.between('sm', 'md')]: {
			fontSize: '1.9rem',
		},
	},
	button: {
		backgroundColor: 'rgba(0,0,0,0.5)',
		borderColor: '#8f0707',
		borderStyle: 'solid',
		borderWidth: '2px',
		marginTop: '40px',
		'&:hover': {
			backgroundColor: 'rgba(0,0,0,0.7)',
			color: '#000',
			boxShadow: 'none',
			borderColor: '#cf0c0c',
		},
		'&:focus': {
			// boxShadow: '0 0 0 0.4rem rgba(0,123,255,.5)',
		},
		[theme.breakpoints.down('sm')]: {
			marginTop: '320px',
			backgroundColor: 'rgba(0,0,0,0.7)',
		},
	},
	link: {
		textDecoration: 'none',
	},
	linkText: {
		color: '#cf0c0c',
		textDecoration: 'none',
		fontSize: '1rem',
		fontStyle: 'italic',
		fontWeight: '500',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.3rem',
		},
	},
}));

function Home() {
	const classes = useStyles();
	const theme = useTheme();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<div className={classes.background}>
				<Container className={classes.root}>
					<Grid container direction='row' className={classes.grid}>
						<Grid item sm={10} md={6}>
							<Grid container direction='row' className={classes.subGrid}>
								<Grid item xs={12}>
									<Typography className={classes.hero}>
										Satisfy your need for speed with
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography className={classes.mtc}>
										McPherson Track Center
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography className={classes.hpde}>
										High Performance Driving Events
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to='/about'>
										<Button variant='contained' className={classes.button}>
											<Typography className={classes.linkText}>
												Learn More
											</Typography>
										</Button>
									</Link>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</div>
		</>
	);
}

export default Home;
