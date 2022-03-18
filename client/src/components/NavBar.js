import React, { useState, useEffect, useContext } from 'react';
import NavContext from '../utils/NavContext';
import { Link } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { fontSize, fontWeight } from '@material-ui/system';
import Logo from '../images/mtc-logo.png';

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	navLink: {
		color: '#ddd',
		textDecoration: 'none',
		marginRight: '2rem',
		fontWeight: '500',
		fontSize: '1.2rem',
		'&:hover': {
			color: '#ad0a0a',
		},
	},

	mobileMenuItem: {
		margin: '5px',
		textDecoration: 'none',
		color: '#000000',
	},
	title: {
		fontFamily: 'Cairo, sans-serif',
		fontWeight: '500',
		fontSize: '29px',
		letterSpacing: '1px',
		letterSpacing: '0.5px',
		color: '#ddd',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.0rem',
		},
	},
	mcPherson: {
		color: '#ad0a0a',
		fontFamily: 'Cairo, sans-serif',
		fontWeight: '700',
		letterSpacing: '0.5px',
		fontSize: '30px',
	},
	logo: {
		height: '50px',
	},
}));

export default function PrimarySearchAppBar() {
	const classes = useStyles();

	const changeNavContext = useContext(NavContext);

	const handleNavClick = (e) => {
		e.preventDefault();

		console.log(e.target.textContent);
	};

	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const menuId = 'primary-search-account-menu';

	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>
				<Link className={classes.mobileMenuItem} to='/about'>
					About
				</Link>
			</MenuItem>
			<MenuItem onClick={handleMenuClose}>
				<Link className={classes.mobileMenuItem} to='/schedule'>
					Schedule
				</Link>
			</MenuItem>
			<MenuItem onClick={handleMenuClose}>
				<Link className={classes.mobileMenuItem} to='/multimedia'>
					Multimedia
				</Link>
			</MenuItem>
		</Menu>
	);

	return (
		<div className={(classes.grow, classes.toolbar)}>
			<AppBar
				position='fixed'
				style={{
					backgroundColor: '#000000',
				}}
			>
				<Toolbar>
					<Link
						to='/'
						style={{
							color: '#ffffff',
							textDecoration: 'none',
						}}
					>
						<img className={classes.logo} src={Logo} />
						{/* <Typography className={classes.title} variant='h5' noWrap>
							<span className={classes.mcPherson}>McPherson</span> Track Center
						</Typography> */}
					</Link>
					<div className={classes.grow} />
					<div
						className={classes.sectionDesktop}
						style={{
							alignItems: 'center',
						}}
					>
						<Link className={classes.navLink} id='about' to='/about'>
							About
						</Link>
						<Link className={classes.navLink} id='schedule' to='/schedule'>
							Schedule
						</Link>
						<Link className={classes.navLink} id='multimedia' to='/multimedia'>
							Multimedia
						</Link>
					</div>
					<div className={classes.sectionMobile}>
						<IconButton
							aria-label='show more'
							aria-controls={mobileMenuId}
							aria-haspopup='true'
							onClick={handleMobileMenuOpen}
							color='inherit'
						>
							<MoreIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
		</div>
	);
}
