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
			<Card>
				<CardMedia
					component='img'
					height='60'
					image={PerfectionPlusLogo}
					alt='perfection plus logo'
				/>
				<CardContent
					sx={{ paddingBottom: '5px !important', paddingTop: '5px' }}
				>
					<Typography variant='h6' color='textPrimary' align='center'>
						Rick McPherson
					</Typography>
					<br />
					<Grid container direction='row'>
						<Grid item xs={8}>
							<Typography variant='subtitle2' color='textPrimary'>
								501-565-1911
							</Typography>
							<Link
								href='http://www.perfection-plus.com/'
								target='_blank'
								rel='noopener'
								color='inherit'
							>
								<Typography variant='subtitle2' color='textPrimary'>
									Perfection-Plus.com
								</Typography>
							</Link>
						</Grid>
						<Grid item xs={4} align='center'>
							<Typography variant='subtitle2' color='textPrimary'>
								9 Trigon Place
							</Typography>
							<Typography variant='subtitle2' color='textPrimary'>
								Little Rock, AR
							</Typography>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</>
	);
}

export default PPBusinessCard;
