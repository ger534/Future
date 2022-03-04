import React, { useState } from 'react';

/* third party packages */
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import { Box, Tab, Tabs, useMediaQuery } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Button } from '@material-ui/core';

/* icons */
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import Person from '@material-ui/icons/Person';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LanguageIcon from '@material-ui/icons/Language';

/* intellectual property */
import tecnotopia from '../../assets/tecnotopia.svg'
import { ThemeContext } from '../../helpers/themeContext/themeContext';
import Modal from '../../libs/modal/modal';

/* routing */
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';



export default function TecnotopiaAppBar(props) {

    const contextUser = JSON.parse(sessionStorage.getItem('user'));

    const history = useHistory();

    const matches = useMediaQuery('(min-width:1200px)');

    //WIP language dialog
    const [openLanWIP, setOpenLanWIP] = useState(false);

    //language
    const { i18n } = useTranslation('common');

    const [languageAnchorEl, setLanguageAnchorEl] = useState(null);
    const handleLanguageOpen = (event) => {
        setLanguageAnchorEl(event.currentTarget);
    };
    const handleLanguageClose = (lan, event) => {
        if (typeof lan === 'string') {
            console.log("lan", lan)
            if(lan.toString() !== 'es'){
                //open WIP modal here
                setOpenLanWIP(true)
            }else{
                i18n.changeLanguage(lan.toString())
            }
        }
        setLanguageAnchorEl(null);
    };

    const [openDrawer, setOpenDrawer] = useState(false);

    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };
    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };

    const [contextTheme] = React.useContext(ThemeContext);

    //main options for appbar 
    const mainOptions = [
        { title: <h2 onClick={() => { history.push("/") }}>Inicio</h2>, route: "/" },
        { title: <h2 onClick={() => { history.push("/plays") }}>Obras disponibles</h2>, route: "/plays" },
        { title: <h2>Objetivos</h2>, route: "/project_presentation" },
        { title: <h2>Autores</h2>, route: "/authors" },
        { title: <h2>¿Quieres publicar?</h2>, route: "/info" },
    ]

    /* CURRENT TAB NEEDS TO BE A COOKIE */
    //useState(JSON.parse(localStorage.getItem('currentTabCookie')) ? JSON.parse(localStorage.getItem('currentTabCookie')) : 0)
    const [currentTab, setCurrentTab] = useState(JSON.parse(localStorage.getItem('currentTabCookie')) ? JSON.parse(localStorage.getItem('currentTabCookie')) : 0)

    const handleTabChange = (event, newTab) => {
        setCurrentTab(newTab);
        localStorage.setItem('currentTabCookie', newTab)
    };

    return (
        <>
            <Modal
                open={openLanWIP} setOpen={setOpenLanWIP}
                description={<span style={{ fontSize: "30px", fontFamily: "OpenSans", fontWeight: "bold" }}>Contenido en desarrollo</span>}
                //description={<h1>Contenido en desarrollo</h1>}
                actions={<Button onClick={() => { setOpenLanWIP(false) }} color="primary" autoFocus>Ok</Button>} />

            <AppBar position="fixed" className={clsx(props.classes.appBar, props.openDrawer && props.classes.appBarShift)} >
                <Toolbar className={props.classes.toolbar}>

                    {/* logo */}
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={props.classes.title}>
                        <IconButton color="inherit" href="/">
                            <img src={tecnotopia} width="235px" height="51px" style={{ paddingTop: "0px" }} alt="tecnotopia logo" />
                        </IconButton>
                    </Typography>

                    {/* main options */}
                    {matches ? <>
                        <Tabs value={currentTab} onChange={handleTabChange} aria-label="main options tabs">
                            {mainOptions.map((option, i) =>
                                <Tab key={i} value={i} onClick={() => { history.push(option.route) }} label={option.title} id={`simple-tab-${i}`} aria-controls={`simple-tabpanel-${i}`}></Tab>
                            )}
                        </Tabs>

                        {/* authentication */}
                        <IconButton color="inherit" onClick={() => { history.push("/login") }}>
                            <Badge color="secondary" >
                                {contextUser ? <Person /> : <PersonOutlineIcon />}
                            </Badge>
                        </IconButton>

                        {/*dark-light theme*/}
                        <IconButton color="inherit" onClick={props.toggleTheme}>
                            <Badge color="secondary" >
                                <Brightness6Icon />
                            </Badge>
                        </IconButton>

                        {/* language */}
                        <IconButton color="inherit" onClick={handleLanguageOpen}>
                            <Badge color="secondary" >
                                <LanguageIcon />
                            </Badge>
                        </IconButton>

                    </> :
                        <>
                            {/* mobile */}
                            <IconButton color="inherit" onClick={handleDrawerOpen}>
                                <Badge color="secondary" >
                                    <MenuIcon />
                                </Badge>
                            </IconButton>
                            <Drawer
                                variant="temporary"
                                classes={{
                                    paper: props.classes.drawerPaper,
                                }}
                                onClose={handleDrawerClose}
                                open={openDrawer}
                            >
                                {/* logo */}
                                <div style={{ paddingTop: "15%", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                    <img src={tecnotopia} width="235px" height="51px" style={{}} alt="tecnotopia logo" />

                                    {/* authentication */}
                                    <IconButton color="inherit" onClick={() => { history.push("/login") }}>
                                        <Badge color="secondary" >
                                            {contextUser ? <Person /> : <PersonOutlineIcon />}
                                        </Badge>
                                        Ingresar
                                    </IconButton>
                                </div>



                                <Divider />
                                <List onClick={handleDrawerClose} style={{ overflowY: "auto", overflowX: "hidden" }}>
                                    {/*mainOptions*/}
                                    {mainOptions.map((item, i) =>
                                        <Link key={item.text} to={item.route} style={{ textDecoration: 'none', color: contextTheme.foreground }} >
                                            <ListItem button>
                                                <ListItemText primary={item.title} />
                                            </ListItem>
                                        </Link>
                                    )}
                                </List>
                                <Divider />
                                <div style={{ display: "flex" }}>
                                    {/*dark-light theme*/}
                                    <IconButton color="inherit" onClick={props.toggleTheme}>
                                        <Badge color="secondary" >
                                            <Brightness6Icon />
                                        </Badge>
                                    </IconButton>

                                    {/* language */}
                                    <IconButton color="inherit" onClick={handleLanguageOpen}>
                                        <Badge color="secondary" >
                                            <LanguageIcon />
                                        </Badge>
                                    </IconButton>
                                </div>
                                <Divider />
                                <div style={{ padding: "10px", fontSize: "15px", whiteSpace: "pre-wrap" }}>
                                    <span style={{}}>Este trabajo se encuentra bajo la licencia &nbsp;
                                        <a style={contextTheme.foreground === "#000000" ? {} : { color: contextTheme.details }} rel="license noopener noreferrer" href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es" target="_blank">
                                            Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
                                        </a>.    </span>
                                    <br />
                                    <Box textAlign={'right'}>
                                        <img alt="Creative Commons License" style={{ borderWidth: 0 }} src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" />
                                    </Box>
                                </div>
                            </Drawer>
                        </>
                    }

                    {/* language */}
                    <Menu
                        id="language-menu"
                        anchorEl={languageAnchorEl}
                        keepMounted
                        open={Boolean(languageAnchorEl)}
                        onClose={handleLanguageClose}
                    >
                        {i18n.languages.map((lan) =>
                            <MenuItem key={lan} onClick={(event) => handleLanguageClose(lan, event)} >{lan}</MenuItem>
                        )}
                    </Menu>

                </Toolbar>
            </AppBar>
        </>
    );
}