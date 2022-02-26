
import React, { } from 'react';

/* third party packages */
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';

/* icons */
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
//import MenuBookIcon from '@material-ui/icons/MenuBook';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

/* routing */
import { Link } from 'react-router-dom';

/* intellectual property */
import { ThemeContext } from '../../helpers/themeContext/themeContext';
//list of items from drawer
import { menu } from '../../main/menu_options'

export default function TecnotopiaDrawer(props) {

  const { t } = useTranslation('common');
  const matches = useMediaQuery('(min-width:600px)');

  const [contextTheme] = React.useContext(ThemeContext);

  const mainListItems = (
    <div>
      {menu.map((item) =>
        <Link to={item.route} style={{ textDecoration: 'none', color:contextTheme.foreground }} key={item.text} >
          <ListItem button>
            <ListItemIcon style={{ color: contextTheme.foreground }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={t(item.text)} />
          </ListItem>
        </Link>
      )}
      <Divider />
      {props.games.map((game) =>
        <Link to={game.route} style={{ textDecoration: 'none', color: contextTheme.foreground }} key={game.gameId} >
          <ListItem button>
            <ListItemIcon style={{ color: contextTheme.foreground }}>
            <SportsEsportsIcon />
            </ListItemIcon>
            <ListItemText primary={game.title} />
          </ListItem>
        </Link>
      )}
    </div>
  );

  return (
    <>{matches ?
      /* tablet and desktop drawer */
      <Drawer
        variant="permanent" //mmm
        classes={{
          paper: clsx(props.classes.drawerPaper, !props.openDrawer && props.classes.drawerPaperClose),
        }}
        open={props.openDrawer}
      >
        <div className={props.classes.toolbarIcon}>
          <IconButton onClick={props.handleDrawerClose}>
            <ChevronLeftIcon style={{ color: contextTheme.foreground }}/>
          </IconButton>
        </div>
        <Divider />
        <List style={{ overflowY: "auto", overflowX: "hidden" }}>{mainListItems}</List>
      </Drawer> :
      /* phone drawer */
      <Drawer
        variant="temporary"
        classes={{
          paper: props.classes.drawerPaper,
        }}
        onClose={props.handleDrawerClose}
        open={props.openDrawer}
      >
        <div className={props.classes.toolbarIcon}>
        </div>
        <Divider />
        <List onClick={props.handleDrawerClose} style={{ overflowY: "auto", overflowX: "hidden" }}>{mainListItems}</List>
      </Drawer>}</>
  );
}














