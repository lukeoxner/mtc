import React from 'react';
import {
	Button,
	makeStyles,
	useTheme,
	Container,
	Grid,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import BackgroundDesktop from '../images/gt4-background.jpg';
import BackgroundMobile from '../images/mobile-landing.png';
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
			fontSize: '1.9rem',
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
	button: {
		borderColor: '#ad0a0a',
		marginTop: '20px',
		[theme.breakpoints.down('sm')]: {
			marginTop: '400px',
		},
		[theme.breakpoints.only('sm')]: {
			marginTop: '450px',
		},
	},
	link: {
		textDecoration: 'none',
	},
	linkText: {
		color: '#ad0a0a',
		textDecoration: 'none',
		fontSize: '1rem',
		fontStyle: 'italic',
		fontWeight: '500',
	},
}));

function Home() {
	const classes = useStyles();
	const theme = useTheme();

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
									<Button variant='outlined' className={classes.button}>
										<Link className={classes.link} to='/about'>
											<Typography className={classes.linkText}>
												Learn More
											</Typography>
										</Link>
									</Button>
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
