import React from 'react';
import {
	Button,
	makeStyles,
	useTheme,
	Container,
	Grid,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({}));

function Requirements() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<div>
			<h2>Requirements Page</h2>
		</div>
	);
}

export default Requirements;
