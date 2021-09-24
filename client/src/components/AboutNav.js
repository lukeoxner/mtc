import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import InfoIcon from "@mui/icons-material/Info";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import MapIcon from "@mui/icons-material/Map";
import HelpIcon from "@mui/icons-material/Help";

export default function BasicList() {
	return (
		<Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
			<nav aria-label="main mailbox folders">
				<List>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<HistoryEduIcon />
							</ListItemIcon>
							<ListItemText primary="Introduction" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<MapIcon />
							</ListItemIcon>
							<ListItemText primary="Track Map" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<MapIcon />
							</ListItemIcon>
							<ListItemText primary="Track Map" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<MapIcon />
							</ListItemIcon>
							<ListItemText primary="Track Map" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<HelpIcon />
							</ListItemIcon>
							<ListItemText primary="Tips & FAQ" />
						</ListItemButton>
					</ListItem>
				</List>
			</nav>
		</Box>
	);
}
