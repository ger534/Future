

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


import Badge from '@material-ui/core/Badge';
import Drawer from '@material-ui/core/Drawer';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';


/* third party packages */
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';

/**
 * icons
 */
import LanguageIcon from '@material-ui/icons/Language';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
//import DashboardIcon from '@material-ui/icons/Dashboard';
//import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import Brightness6Icon from '@material-ui/icons/Brightness6';
//import FormatPaintIcon from '@material-ui/icons/FormatPaint';
import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';
import MenuBookIcon from '@material-ui/icons/MenuBook';

import tecnotopia_black_v2 from './assets/tecnotopia_black_v2.png'

/* intellectual property */
import Home from '../src/components/home/Home'
import Chapter from './components/Chapter/Chapter'
import Cards from '../src/components/cards/cards'
import Plots from '../src/components/plots/plots'
import Characters from '../src/components/characters/characters'
import { flags } from './flags'
import { ThemeContext, themes } from './contexts/theme-context';
import Test from './assets/Test2.png'
import Aniristuv from './assets/Aniristuv.png'
import OCT from './assets/803.png'
import Irvus from './assets/503.png'


const drawerWidth = 254;
const useStyles = makeStyles(theme => ({
  root: contextTheme => ({
    display: 'flex',
    backgroundColor: contextTheme.background,
    color: contextTheme.foreground,
    transition: "all 0.50s linear"
  }),
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
  drawerPaper: contextTheme => ({
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    overflow: "hidden",
    backgroundColor: contextTheme.background,
    color: contextTheme.foreground,
    transition: "all 0.50s linear"
  }),
  drawerPaperClose: contextTheme => ({
    overflowX: 'hidden',
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  }),
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto', //"mmmmmmmmmmmmm"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: contextTheme => ({
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    backgroundColor: contextTheme.background,
    color: contextTheme.foreground,
    transition: "all 0.50s linear"
  }),
  fixedHeight: {
    height: 540,
  },
}));

let chapters = [
  { title: "Términos y condiciones", file_name: "0-terms_and_conditions", route: "/0-terms_and_conditions", next: "/1-hello_world" },
  { title: "Hola mundo", file_name: "1-hello_world", route: "/1-hello_world", next: "/2-post_mortem" },
  { title: "Post mortem", file_name: "2-post_mortem", route: "/2-post_mortem", next: "/3-cognitive_dissonance" },
  { title: "Disonancia cognitiva", file_name: "3-cognitive_dissonance", route: "/3-cognitive_dissonance", next: "/4-histology" },
  { title: "Histología", file_name: "4-histology", route: "/4-histology", next: "/5-faraday_cage" },
  { title: "Jaula de Faraday", file_name: "5-faraday_cage", route: "/5-faraday_cage", next: "/6-madness_for_two" },
  { title: "Locura para dos", file_name: "6-madness_for_two", route: "/6-madness_for_two", next: "/7-gamblers" },
  { title: "Ludópatas", file_name: "7-gamblers", route: "/7-gamblers", next: "/8-ambivalence" },
  { title: "Ambivalencia", file_name: "8-ambivalence", route: "/8-ambivalence", next: "/" },
]

//array for menu
let menu = [
  {
    icon: <HomeIcon />,
    text: 'drawer.home',
    route: '/'
  },
  /*{
    icon: <InfoIcon />,
    text: 'drawer.about',
    route: '/about'
  },*/
  {
    icon: <RecentActorsIcon />,
    text: 'drawer.cards',
    route: '/cards'
  },
  {
    icon: <SportsKabaddiIcon />,
    text: 'drawer.plots',
    route: '/plots'
  },
]

//characters array
let mainCards = [
  {
      title: "Aniristuv", 
      //text: "El supervisor",
      image: Aniristuv,
  },
  {
      title: "503",
      //text: "El antagonista",
      image: Irvus,
  },
  {
      title: "803",
      //text: "El antagonista",
      image: OCT,
  },
  {
      title: "Letenci Alestopor", 
      //text: "El soporte",
      image: Test,
  },
  {
      title: "Masram Zitesti", 
      //text: "La máquina",
      image: Test,
  }
]


function App() {

  //language
  const { t, i18n } = useTranslation('common');

  
  const [openDrawer, setopenDrawer] = React.useState(false);

  const handleDrawerOpen = () => {
    setopenDrawer(true);
  };
  const handleDrawerClose = () => {
    setopenDrawer(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const matches = useMediaQuery('(min-width:600px)');

  const handleLanguageOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = (lan, event) => {
    if (typeof lan === 'string') {
      i18n.changeLanguage(lan.toString())
    }
    setAnchorEl(null);
  };

  const [contextTheme, themeToggler] = React.useState(themes.dark);
  const classes = useStyles(contextTheme);

  const toggleTheme = () => {
    themeToggler(contextTheme === themes.dark ? themes.light : themes.dark)
  };


  const mainListItems = (
    <div>
      {menu.map((item) =>
        <Link to={item.route} style={{ textDecoration: 'none', color: 'black' }} key={item.text} >
          <ListItem button>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={t(item.text)} />
          </ListItem>
        </Link>
      )}
      <Divider />
      {chapters.map((chapter) =>
        <Link to={chapter.route} style={{ textDecoration: 'none', color: 'black' }} key={chapter.title} >
          <ListItem button>
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary={chapter.title} />
          </ListItem>
        </Link>
      )}
    </div>
  );

  function Footer(props) {
    return (
      <Typography variant="body2" color="textSecondary" align="center" {...props}>
        <a href={flags().moreAboutFuture} style={{ textDecoration: 'none', color: 'gray' }}>{t('footer')}</a>
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  return (
    <>
      <ThemeContext.Provider value={[contextTheme, themeToggler]}>
        <>
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
                    <IconButton color="inherit" href="/">
                      <img src={tecnotopia_black_v2} width="100px" style={{ paddingTop: "10px" }} alt="tecnotopia logo" />
                    </IconButton>
                  </Typography>
                  <IconButton color="inherit" onClick={toggleTheme}>
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

              {matches ?
                /* tablet and desktop drawer */
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
                  <List style={{ overflowY: "auto", overflowX: "hidden" }}>{mainListItems}</List>
                </Drawer> :
                /* phone drawer */
                <Drawer
                  variant="temporary"
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                  onClose={handleDrawerClose}
                  open={openDrawer}

                >
                  <div className={classes.toolbarIcon}>
                  </div>
                  <Divider />
                  <List onClick={handleDrawerClose} style={{ overflowY: "auto", overflowX: "hidden" }}>{mainListItems}</List>
                </Drawer>}


              <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container /*maxWidth="lg"*/ maxWidth={false} className={classes.container}>

                  <Switch onClick={handleDrawerClose}>
                    {/*<Route path="/dashboard" component={Dashbord} />*/}
                    {/*<Route path="/about" component={About} />*/}
                    {/*<Route path="/termsandconditions" component={TermsAndConditions} />*/}

                    <Route path="/cards" component={() => <Cards mainCards={mainCards}/>} onClose={handleDrawerClose} onClick={handleDrawerClose} />
                    <Route path="/plots" component={Plots} onClose={handleDrawerClose} onClick={handleDrawerClose} />

                    {/*characters paths*/}
                    {mainCards.map((character) =>
                      <Route path={`/${character.title}`} key={character.title} render={() => <Characters char={character.title} image={character.image} />} onClose={handleDrawerClose} onClick={handleDrawerClose} />
                    )}
                    {/*chapters paths*/}
                    {chapters.map((chapter) =>
                      <Route key={chapter.title} path={chapter.route} render={() => <Chapter title={chapter.title} file_name={chapter.file_name} route={chapter.route} next={chapter.next} />} onClose={handleDrawerClose} onClick={handleDrawerClose} />
                    )}

                    <Route render={() => <Home />} />
                  </Switch>

                  <Box pt={4}>
                    <Footer />
                  </Box>
                </Container>
              </main>

            </Router>
          </div >
        </>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
