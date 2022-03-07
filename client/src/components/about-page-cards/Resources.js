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
import GeneralBlock from '../resource-blocks/GeneralBlock';
import VideoBlock from '../resource-blocks/VideoBlock';
import EbookBlock from '../resource-blocks/EbookBlock';

const useStyles = makeStyles((theme) => ({
	heading: {
		textAlign: 'center',
		fontWeight: 500,
	},
	subHeading: {
		marginBottom: '10px',
	},
	link: {
		// marginLeft: '30px',
		// marginBottom: '15px',
	},
	resource: {
		marginBottom: '5px',
	},
}));

function Resources() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<>
			<Grid container direction='row' justifyContent='center'>
				<Grid item xs={10}>
					<br />
					<Typography variant='h5' className={classes.heading}>
						High Performance Driving Resource Library
					</Typography>
					<br />
					<Typography>
						Whether you're newcomer to the world of high performance driving, or
						an experienced track day junkie who just want a little refresher -
						there's something for you in this collection of driving resources.
					</Typography>
					<br />
					<GeneralBlock />
					<br />
					<VideoBlock />
					<br />
					<EbookBlock />
				</Grid>
			</Grid>
		</>
	);
}

export default Resources;
