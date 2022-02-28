import * as React from 'react';
import { useContext } from 'react';
import AboutContext from '../utils/AboutContext';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
// Icons
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import InfoIcon from '@mui/icons-material/Info';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import MapIcon from '@mui/icons-material/Map';
import HelpIcon from '@mui/icons-material/Help';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

export default function BasicList() {
	const [selectedIndex, setSelectedIndex] = React.useState(0);

	const changeAboutContext = useContext(AboutContext);

	const convertIndex = (index) => {
		let cardName;
		switch (index) {
			case 0:
				cardName = 'intro';
				break;
			case 1:
				cardName = 'eventInfo';
				break;
			case 2:
				cardName = 'track';
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
		<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
			<nav aria-label='main mailbox folders'>
				<List>
					<ListItem disablePadding>
						<ListItemButton
							value='Intro'
							selected={selectedIndex === 0}
							onClick={(event) => handleListItemClick(event, 0)}
						>
							<ListItemIcon>
								<HistoryEduIcon />
							</ListItemIcon>
							<ListItemText primary='Introduction' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton
							selected={selectedIndex === 1}
							onClick={(event) => handleListItemClick(event, 1)}
						>
							<ListItemIcon>
								<InfoIcon />
							</ListItemIcon>
							<ListItemText primary='Event Info' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton
							selected={selectedIndex === 2}
							onClick={(event) => handleListItemClick(event, 2)}
						>
							<ListItemIcon>
								<MapIcon />
							</ListItemIcon>
							<ListItemText primary='Track Details' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton
							selected={selectedIndex === 3}
							onClick={(event) => handleListItemClick(event, 3)}
						>
							<ListItemIcon>
								<DirectionsCarIcon />
							</ListItemIcon>
							<ListItemText primary='Car Requirements' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton
							selected={selectedIndex === 4}
							onClick={(event) => handleListItemClick(event, 4)}
						>
							<ListItemIcon>
								<EmojiPeopleIcon />
							</ListItemIcon>
							<ListItemText primary='Driver Essentials' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton
							selected={selectedIndex === 5}
							onClick={(event) => handleListItemClick(event, 5)}
						>
							<ListItemIcon>
								<HelpIcon />
							</ListItemIcon>
							<ListItemText primary='Tips & FAQ' />
						</ListItemButton>
					</ListItem>
				</List>
			</nav>
		</Box>
	);
}
