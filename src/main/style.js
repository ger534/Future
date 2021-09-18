import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 254;
const useStyles = makeStyles(theme => ({
    "@global": {
        body: {
            //backgroundColor: '#363537'
            //minHeight: "100vh"
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
        }
    },
    /*"@global": contextTheme => ({
      body: {
        backgroundColor: contextTheme.background
      }
    }),*/
    root: contextTheme => ({
        display: 'flex',
        backgroundColor: contextTheme.background,
        color: contextTheme.foreground,
        transition: "all 0.50s linear",

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
        zIndex: theme.zIndex.drawer + 1 + "!important", //to override the reorganize that the build is doing
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px) !important`, //to override the reorganize that the build is doing
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
        position: 'relative !important', //to override the reorganize that the build is doing
        whiteSpace: 'nowrap',
        width: drawerWidth,
        overflow: "hidden",
        backgroundColor: contextTheme.background,
        color: contextTheme.foreground,
        transition: "all 0.50s linear",
        //height: '100vh',
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
        //height: '100vh',
        overflow: 'auto', //"mmmmmmmmmmmmm"
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
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

export default useStyles;