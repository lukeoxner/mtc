import React from 'react';
import {
	Button,
	makeStyles,
	useTheme,
	Container,
	Grid,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({}));

function TipsFAQ() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<div>
			<h2>Tips and FAQs Page</h2>
		</div>
	);
}

export default TipsFAQ;
