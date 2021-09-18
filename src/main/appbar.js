import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

/**
 * icons
 */
//import LanguageIcon from '@material-ui/icons/Language';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Brightness6Icon from '@material-ui/icons/Brightness6';

import tecnotopia_black_v2 from '../assets/tecnotopia_black_v2.png'

import { useTranslation } from 'react-i18next';

export default function TecnotopiaAppBar(props) {

    //language
    const { i18n } = useTranslation('common');

    return (

        <AppBar position="absolute" className={clsx(props.classes.appBar, props.openDrawer && props.classes.appBarShift)}>
            <Toolbar className={props.classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    aria-controls="language-menu"
                    onClick={props.handleDrawerOpen}
                    className={clsx(props.classes.menuButton, props.openDrawer && props.classes.menuButtonHidden)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={props.classes.title}>
                    <IconButton color="inherit" href="/">
                        <img src={tecnotopia_black_v2} width="100px" style={{ paddingTop: "10px" }} alt="tecnotopia logo" />
                    </IconButton>
                </Typography>
                <IconButton color="inherit" onClick={props.toggleTheme}>
                    <Badge color="secondary" >
                        <Brightness6Icon />
                    </Badge>
                </IconButton>
                {/*<IconButton color="inherit" onClick={props.handleLanguageOpen}>
                    <Badge color="secondary" >
                        <LanguageIcon />
                    </Badge>
                </IconButton>*/}

                <Menu
                    id="language-menu"
                    anchorEl={props.anchorEl}
                    keepMounted
                    open={Boolean(props.anchorEl)}
                    onClose={props.handleLanguageClose}
                >
                    {i18n.languages.map((lan) =>
                        <MenuItem key={lan} onClick={(event) => props.handleLanguageClose(lan, event)} >{lan}</MenuItem>
                    )}
                </Menu>

            </Toolbar>
        </AppBar>
    );
}














