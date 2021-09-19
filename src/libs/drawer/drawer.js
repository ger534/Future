
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


import Drawer from '@material-ui/core/Drawer';
import { menu } from '../../main/menu_options'

/**
 * icons
 */
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import MenuBookIcon from '@material-ui/icons/MenuBook';


/* third party packages */
import { Link } from 'react-router-dom';

export default function TecnotopiaDrawer(props) {

  const { t } = useTranslation('common');
  const matches = useMediaQuery('(min-width:600px)');


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
      {props.chapters.map((chapter) =>
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

  return (
    <>{matches ?
      /* tablet and desktop drawer */
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(props.classes.drawerPaper, !props.openDrawer && props.classes.drawerPaperClose),
        }}
        open={props.openDrawer}
      >
        <div className={props.classes.toolbarIcon}>
          <IconButton onClick={props.handleDrawerClose}>
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














