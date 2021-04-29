import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Avatar, Divider, ListItemIcon, ListItemText } from "@material-ui/core";
import {
  ExitToApp,
  ExpandMore,
  FiberDvr,
  FiberManualRecord,
  FiberNew,
  FiberSmartRecord,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Person,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  profile: {
    display: "flex",
    flexFlow: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  avatar: {
    marginRight: 12,
    marginLeft: 17,
  },
  divider: {
    marginTop: 16,
    marginBottom: 16,
  },
  notification: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    width: 300,
  },
  newNotification: {
    color: "#3C9105",
    fontSize: 8,
  },
  notificationTitle: {
    display: "flex",
    flexFlow: "row",
    alignItems: "center",
    width: 250,
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [
    notificationMoreAnchorEl,
    setNotificationMoreAnchorEl,
  ] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isNotificationMenuOpen = Boolean(notificationMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleNotificationMenuOpen = (event) => {
    setNotificationMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleNotificationMenuClose = () => {
    setNotificationMoreAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenuProfile = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <div className={classes.profile}>
        <Avatar
          className={classes.avatar}
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
        />
        <div>
          <Typography className={classes.title} variant="span">
            Leonardo Palmeiro
          </Typography>
          <Typography className={classes.title} variant="span">
            Dominion
          </Typography>
          <Typography className={classes.title} variant="span">
            Develop
          </Typography>
        </div>

        <IconButton
          aria-label="Profile"
          color="inherit"
          onClick={handleMenuClose}
        >
          <KeyboardArrowUp />
        </IconButton>
      </div>
      <Divider className={classes.divider} variant="middle" />

      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <Person fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <ExitToApp fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </MenuItem>
    </Menu>
  );

  const renderMenuNotifications = (
    <Menu
      anchorEl={notificationMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isNotificationMenuOpen}
      onClose={handleNotificationMenuClose}
    >
      <MenuItem className={classes.notification} onClick={handleMenuClose}>
        <div className={classes.notificationTitle}>
          <Typography variant="span">Nueva API de Retail</Typography>
          <div className={classes.grow} />
          <FiberManualRecord className={classes.newNotification} />
        </div>
        <Typography className={classes.title} variant="span">
          Disponible una nueva API dirigida a Retail. ¡Pruébala ahora!
        </Typography>
        <Typography className={classes.title} variant="span">
          Hace 5 minutos
        </Typography>
      </MenuItem>

      <Divider className={classes.divider} variant="middle" />

      <div className={classes.notification}></div>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="show 11 new notifications"
          color="inherit"
          onClick={handleNotificationMenuOpen}
        >
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          {/* title */}
          <Typography className={classes.title} variant="h6" noWrap>
            Dominion logo
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={handleNotificationMenuOpen}
            >
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            {/* profile */}
            <div className={classes.profile}>
              <Avatar
                className={classes.avatar}
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
              />
              <div>
                <Typography className={classes.title} variant="span">
                  Leonardo Palmeiro
                </Typography>
                <Typography className={classes.title} variant="span">
                  Dominion
                </Typography>
              </div>

              <IconButton
                aria-label="open menu"
                color="inherit"
                onClick={handleProfileMenuOpen}
              >
                <ExpandMore />
              </IconButton>
            </div>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenuProfile}
      {renderMenuNotifications}
    </div>
  );
}
