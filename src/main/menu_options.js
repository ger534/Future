
/**
 * icons
 */
import RecentActorsIcon from '@material-ui/icons/RecentActors';
//import DashboardIcon from '@material-ui/icons/Dashboard';
//import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
//import FormatPaintIcon from '@material-ui/icons/FormatPaint';
import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';

//array for menu
const menu = [
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

export {
    menu
}