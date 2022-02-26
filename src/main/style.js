import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 254;
const useStyles = makeStyles(theme => ({
    "@global": {
        body: {
            display: "flex",
            flexDirection: "column",
            color: "black"
        },
        p: {
            //fontFamily: "FuturaBook",
            lineHeight: "150%",
            fontFamily: "OpenSans",
            fontSize: "20px"            
        },
        h1: {
            //fontFamily: "Futura Bold font",
            fontFamily: "OpenSans",
            fontSize: "30px"
        },
        h4: {
            //fontFamily: "Futura Bold font",
            fontFamily: "OpenSans",
            fontSize: "20px"
        },
        h2: {
            //fontFamily: "Futura Medium font",
            fontFamily: "OpenSans",
            fontSize: "16px"
        },
    },
    root: contextTheme => ({
        //display: 'flex',
        backgroundColor: contextTheme.background,
        color: contextTheme.foreground,
        transition: "all 0.50s linear",
    }),
    toolbar: contextTheme => ({
        backgroundColor: "#001433",//"#0C254D",
        paddingRight: 24, // keep right padding when drawer closed
        borderBottom: `1px solid ${contextTheme.elements1} !important`
    }),
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
        //overflow: "hidden",
        overflow: "visible",
        backgroundColor: contextTheme.background,
        color: contextTheme.foreground,
        transition: "all 0.50s linear",
        //height: '100vh',
        
    }),
    drawerPaperClose: contextTheme => ({
        //overflowX: 'hidden',
        overflow: "visible",
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    }),
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        //height: '100vh',
        //overflow: 'auto', //"mmmmmmmmmmmmm"
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