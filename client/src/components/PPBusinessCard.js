import React from 'react';
import {
	Button,
	makeStyles,
	useTheme,
	Container,
	Grid,
	Typography,
	Link,
} from '@material-ui/core';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import PerfectionPlusLogo from '../images/perfection-plus-logo.jpeg';

function PPBusinessCard() {
	return (
		<>
			<Card sx={{ marginBottom: '20px' }}>
				<CardMedia
					component='img'
					height='70'
					image={PerfectionPlusLogo}
					alt='perfection plus logo'
				/>
				<CardContent>
					<Grid container direction='row'>
						<Grid item xs={6}>
							<Typography variant='h6' color='text.secondary'>
								501-565-1911
							</Typography>
						</Grid>
						<Grid item xs={6} align='center'>
							<Typography variant='body2' color='text.secondary'>
								9 Trigon Place
							</Typography>
							<Typography variant='body2' color='text.secondary'>
								Little Rock, AR
							</Typography>
						</Grid>
					</Grid>
				</CardContent>
				<CardActions sx={{ justifyContent: 'space-evenly' }}>
					<Link
						href='http://www.perfection-plus.com/'
						target='_blank'
						rel='noopener'
						underline='none'
					>
						<Typography variant='body2'>www.perfection-plus.com</Typography>
					</Link>
				</CardActions>
			</Card>
		</>
	);
}

export default PPBusinessCard;
