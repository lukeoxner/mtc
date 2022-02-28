import React from 'react';
import {
	Button,
	makeStyles,
	useTheme,
	Container,
	Grid,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	above: {
		display: 'none',
	},
	left: {
		display: 'inline',
	},

	[theme.breakpoints.down('sm')]: {
		left: {
			display: 'none',
		},
		above: {
			display: 'inline',
		},
	},
}));

function Intro() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<div>
			<h2>
				McPherson Track Center offers you the chance to enjoy your high
				performance car in a safe, controlled environment on the race track.
			</h2>
			<br />
			<h4>
				Whether you're brand new to high performance driving, or a seasoned
				track day veteran - you'll have a blast our events. Learn more by
				clicking on the tabs <span className={classes.left}>to the left</span>
				<span className={classes.above}>above</span>.
			</h4>
		</div>
	);
}

export default Intro;
