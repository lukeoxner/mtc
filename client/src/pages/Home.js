import React from 'react';
import { Button, makeStyles, useTheme, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Background from '../images/gt4-background.jpg';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 275,
		position: 'absolute',
		top: '30%',
		left: '7%',
		width: '45%',
		maxHeight: '90',
		marginTop: '2rem',
		backgroundColor: `rgba(0,0,0,.0)`,
		color: '#ddd',
		overflow: 'hidden',
	},
	hero: {
		fontSize: '2.3rem',
		fontWeight: '600',
		fontStyle: 'italic',
		textShadow: '2px 2px #000000',
		textAlign: 'left',
		marginBottom: '30px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.5rem',
		},
	},
	textDiv: {
		position: 'relative',
		backgroundImage: `linear-gradient(to left, rgba(000, 000, 000, 0), rgba(000, 000, 000, 0.40)), url(${Background})`,
		width: '100',
		height: '100vh',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
		backgroundAttachment: 'fixed',
		overflow: 'hidden',
	},
	button: {
		borderColor: '#ad0a0a',
	},
	link: {
		textDecoration: 'none',
	},
	linkText: {
		color: '#ad0a0a',
		textDecoration: 'none',
		fontSize: '1rem',
		position: 'relative',
		fontStyle: 'italic',
		fontWeight: '500',
	},
}));

function Home() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<>
			<div className={classes.textDiv}>
				<Container className={classes.root}>
					<Typography className={classes.hero}>
						Satisfy your need for speed with McPherson Track Center!
					</Typography>
					<Button variant='outlined' className={classes.button}>
						<Link className={classes.link} to='/about'>
							<Typography className={classes.linkText}>Learn More</Typography>
						</Link>
					</Button>
				</Container>
			</div>
		</>
	);
}

export default Home;
