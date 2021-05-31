

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import IconButton from '@material-ui/core/IconButton';
import LanguageIcon from '@material-ui/icons/Language';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


import DashboardIcon from '@material-ui/icons/Dashboard';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import Brightness6Icon from '@material-ui/icons/Brightness6';

import Badge from '@material-ui/core/Badge';
import Drawer from '@material-ui/core/Drawer';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useState, useEffect } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { flags } from './flags'

import Dashbord from '../src/components/dashboard/Dashboard'
import About from '../src/components/about/About'
import TermsAndConditions from '../src/components/TermsAndConditions/TermsAndConditions'

import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyle";
import { lightTheme, darkTheme } from "./components/Themes"
import  {useDarkMode} from "./components/useDarkMode"


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    overflow: "hidden",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 540,
  },
}));

//array for menu
let menu = [
  {
    icon: <DashboardIcon />,
    text: 'drawer.dashboard',
    route: '/'
  },
  {
    icon: <InfoIcon />,
    text: 'drawer.about',
    route: '/about'
  },
  {
    icon: <HomeIcon />,
    text: 'drawer.termsandconditions',
    route: '/termsandconditions'
  }
]

function App() {

  //language
  const { t, i18n } = useTranslation('common');

  const classes = useStyles();
  const [openDrawer, setopenDrawer] = React.useState(true);

  const handleDrawerOpen = () => {
    setopenDrawer(true);
  };
  const handleDrawerClose = () => {
    setopenDrawer(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleLanguageOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = (lan, event) => {
    if (typeof lan === 'string') {
      i18n.changeLanguage(lan.toString())
    }
    setAnchorEl(null);
  };

  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const mainListItems = (
    <div>
      {menu.map((item) =>
        <Link to={item.route} style={{ textDecoration: 'none', color: 'black' }} key={item.text}>
          <ListItem button>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={t(item.text)} />
          </ListItem>
        </Link>
      )}
    </div>
  );

  function Footer(props) {
    return (
      <Typography variant="body2" color="textSecondary" align="center" {...props}>
        <a href={flags().moreAboutCliniserveTest} style={{ textDecoration: 'none', color: 'gray' }}>{t('footer')}</a>
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  return (


    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className={classes.root}>
          <CssBaseline />
          <Router>

            <AppBar position="absolute" className={clsx(classes.appBar, openDrawer && classes.appBarShift)}>
              <Toolbar className={classes.toolbar}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  aria-controls="language-menu"
                  onClick={handleDrawerOpen}
                  className={clsx(classes.menuButton, openDrawer && classes.menuButtonHidden)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                  {t('title')}
                </Typography>
                <IconButton color="inherit" onClick={themeToggler}>
                  <Badge color="secondary" >
                    <Brightness6Icon />
                  </Badge>
                </IconButton>
                <IconButton color="inherit" onClick={handleLanguageOpen}>
                  <Badge color="secondary" >
                    <LanguageIcon />
                  </Badge>
                </IconButton>

                <Menu
                  id="language-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleLanguageClose}
                >
                  {i18n.languages.map((lan) =>
                    <MenuItem key={lan} onClick={(event) => handleLanguageClose(lan, event)} >{lan}</MenuItem>
                  )}
                </Menu>

              </Toolbar>
            </AppBar>

            <Drawer
              variant="permanent"
              classes={{
                paper: clsx(classes.drawerPaper, !openDrawer && classes.drawerPaperClose),
              }}
              open={openDrawer}
            >
              <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
              <List>{mainListItems}</List>
            </Drawer>


            <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              <Container maxWidth="lg" className={classes.container}>

                <Switch>
                  <Route path="/dashboard" component={Dashbord} />

                  <Route path="/about" component={About} />

                  <Route path="/termsandconditions" component={TermsAndConditions} />

                  <Route render={() => <Dashbord />} />
                </Switch>

                <Box pt={4}>
                  <Footer />
                </Box>
              </Container>
            </main>

          </Router>
        </div >
      </>
    </ThemeProvider>
  );
}

export default App;
