import * as React from 'react';
import { useContext } from 'react';
import AboutContext from '../utils/AboutContext';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
// Icons
import CheckIcon from '@mui/icons-material/FactCheck';
import RegIcon from '@mui/icons-material/HowToReg';
import InfoIcon from '@mui/icons-material/Info';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import MapIcon from '@mui/icons-material/Map';
import HelpIcon from '@mui/icons-material/Help';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import VideoIcon from '@mui/icons-material/OndemandVideo';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiListItem-root': {
			[theme.breakpoints.down('sm')]: {
				padding: '0px',
			},
		},
	},
}));

export default function BasicList() {
	const classes = useStyles();

	const [selectedIndex, setSelectedIndex] = React.useState(0);

	const changeAboutContext = useContext(AboutContext);

	const convertIndex = (index) => {
		let cardName;
		switch (index) {
			case 0:
				cardName = 'introduction';
				break;
			case 1:
				cardName = 'requirements';
				break;
			case 2:
				cardName = 'resources';
				break;
			case 3:
				cardName = 'tipsFAQ';
				break;
			default:
				cardName = 'intro';
				break;
		}
		changeAboutContext(cardName);
	};

	const handleListItemClick = (event, index) => {
		setSelectedIndex(index);
		convertIndex(index);
	};

	return (
		<div className={classes.root}>
			<Box sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>
				<nav aria-label='main mailbox folders'>
					<List>
						<Grid container sx={{ width: '100%' }}>
							<Grid item xs={6} md={12}>
								<ListItem disablePadding>
									<ListItemButton
										value='Intro'
										selected={selectedIndex === 0}
										onClick={(event) => handleListItemClick(event, 0)}
									>
										<ListItemIcon>
											<EmojiPeopleIcon />
										</ListItemIcon>
										<ListItemText primary='Introduction' />
									</ListItemButton>
								</ListItem>
							</Grid>
							<Grid item xs={6} md={12}>
								<ListItem disablePadding>
									<ListItemButton
										selected={selectedIndex === 1}
										onClick={(event) => handleListItemClick(event, 1)}
									>
										<ListItemIcon>
											<CheckIcon />
										</ListItemIcon>
										<ListItemText primary='Requirements' />
									</ListItemButton>
								</ListItem>
							</Grid>
							<Grid item xs={6} md={12}>
								<ListItem disablePadding>
									<ListItemButton
										selected={selectedIndex === 2}
										onClick={(event) => handleListItemClick(event, 2)}
									>
										<ListItemIcon>
											<VideoIcon />
										</ListItemIcon>
										<ListItemText primary='Resources' />
									</ListItemButton>
								</ListItem>
							</Grid>
							<Grid item xs={6} md={12}>
								<ListItem disablePadding>
									<ListItemButton
										selected={selectedIndex === 3}
										onClick={(event) => handleListItemClick(event, 3)}
									>
										<ListItemIcon>
											<HelpIcon />
										</ListItemIcon>
										<ListItemText primary='Tips & FAQ' />
									</ListItemButton>
								</ListItem>
							</Grid>
						</Grid>
					</List>
				</nav>
			</Box>
		</div>
	);
}
