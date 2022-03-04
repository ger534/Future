import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

/* helpers */
//import { UserContext } from '../../helpers/userContext/userContext';
import { ThemeContext } from '../../helpers/themeContext/themeContext';
import useWindowDimensions from "../../helpers/useWindowDimensions/useWindowDimensions";

/* intellectual property */
import Game from '../game/game';

/* third party packages */
import { Tab, Tabs, Box } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

/* routing */
import { Link } from 'react-router-dom';

/* icons */
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

/* style */
import './gameCover.css'
import CustomCard from '../../libs/customCard/customCard';
import Modal from '../../libs/modal/modal';

const useStyles = makeStyles((theme) => ({
    Button: {
        color: "yellow"
    }
}));

function GameCover(props) {

    const [contextTheme] = React.useContext(ThemeContext);

    const { height } = useWindowDimensions();


    //Desktop control
    const [current, setCurrent] = useState(JSON.parse(localStorage.getItem('currentChapterCookie')) ? JSON.parse(localStorage.getItem('currentChapterCookie')) : 0)
    const handleChapterChange = (index) => {
        setCurrent(index);
        localStorage.setItem('currentChapterCookie', index)
    };

    const [show, setShow] = useState(JSON.parse(localStorage.getItem('desktopShowCookie')) ? JSON.parse(localStorage.getItem('desktopShowCookie')) : false)

    const [extra, setExtra] = useState(false)
    const handleExtraChange = () => {
        setExtra(!extra);
        //Modal
    };

    const classes = useStyles({ contextTheme: contextTheme });

    const matches = useMediaQuery('(min-width:1200px)');

    const startButton = () => {
        setShow(true)
        localStorage.setItem('desktopShowCookie', true)
    }

    //mobile control
    const [currentTab, setCurrentTab] = React.useState("chapters");
    const handleTabChange = (event, newValue) => {
        setCurrentTab(newValue);
    };

    return (
        <>
            <Modal
                open={extra} setOpen={setExtra}
                description={<h1>Contenido en desarrollo</h1>}
                actions={<Button onClick={() => { setExtra(false) }} color="primary" autoFocus>Continuar</Button>} />

            {matches ? <div style={{ display: "flex", height: `${height - 41 - 65}px`, /**/overflow: "hidden" }} >
                {/*desktop drawer*/}
                <div style={{ width: "400px", backgroundColor: contextTheme.background, outline: `1px solid ${contextTheme.foreground}` }} >
                    <div style={{ overflowX: "hidden", height: `${height - 41 - 80}px`, overflowY: "overlay" /* deprecated ??? */ }}>

                        {/*<img src={props.acts[current].image} width={"100%"} height={"25%"} style={{ paddingTop: "0px" }} alt="game cover" />*/}
                        <h1 style={{ textAlign: "center", paddingBottom: "0px" }}>{props.acts[current].bigTitle}</h1>
                        <List style={{}}>
                            {props.acts && props.acts.map((act, i) =>
                                <>
                                    {/*<Link to={act.route} style={{ textDecoration: 'none', color: contextTheme.foreground }} key={act.title} >*/}
                                    {i === current && <hr></hr>}
                                    <ListItem button onClick={() => { handleChapterChange(i) }}>
                                        <ListItemIcon style={{ color: contextTheme.foreground }}>
                                            <MenuBookIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={act.title} />
                                    </ListItem>
                                    {i === current && <hr></hr>}
                                    {/*</Link>*/}
                                </>
                            )}
                        </List>
                        <Button className={classes.Button} onClick={() => { setExtra(!extra) }} style={{ color: contextTheme.foreground }}>
                            Contenido extra <ExpandMoreIcon />
                        </Button>
                        {extra && <div><List style={{}}>
                            {props.extraContent && props.extraContent.map((extra) =>
                                <Link to={extra.route} style={{ textDecoration: 'none', color: contextTheme.foreground }} key={extra.title} >
                                    <ListItem button>
                                        <ListItemText primary={extra.title} />
                                    </ListItem>
                                </Link>
                            )}
                        </List></div>}
                    </div>
                </div>
                <div style={{ width: "90%", overflowY: "overlay" }}>

                    {!show && <>
                        {/* cover */}
                        <div style={{ padding: "30px" }}>
                            <h1>{props.acts[current].title}</h1>

                            <div style={{}}>
                                <p>{props.acts[current].coverText}</p>
                                <Box textAlign='center'>
                                    <img src={props.acts[current].image} width={props.acts[current].orientation === "landscape" ? "70%" : "30%"} height={"10%"} style={{ paddingTop: "0px" }} alt="chapter img" />
                                </Box>
                            </div>
                            <Box textAlign='right'>
                                <Button /*variant="contained"*/ className={classes.Button} onClick={startButton}>Comenzar<DoubleArrowIcon /></Button>
                            </Box>
                        </div>
                    </>}
                    {/*<Game gameId={props.gameId} next={props.next} />*/}
                    {show && <>
                        <div style={{ paddingLeft: "10%", paddingRight: "10%" }}>
                            <h1>{props.acts[current].title}</h1>
                            <Game gameId={props.acts[current].gameId} image={props.acts[current].image} route={props.acts[current].route} next={props.acts[current].next} />
                        </div>
                    </>}

                </div>
            </div>
                :
                <>
                    {/* mobile */}
                    <div style={{ padding: "5%" }}>
                        <br></br>
                        <h1>Hola, mundo</h1>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Tabs value={currentTab} onChange={handleTabChange} aria-label="game options tabs">
                                <Tab value={"chapters"} label={"Secciones"} id={`tab-chapters`}></Tab>
                                <Tab disabled  value={"extra"} label={"Contenido extra"} id={`tab-extra`}></Tab>
                            </Tabs>
                        </div>
                        <div
                            style={{ display: "flex", justifyContent: "center" }}
                            hidden={currentTab !== "chapters"}
                            id={`tabpanel-chapters`}
                        >
                            {currentTab === "chapters" && (
                                <List style={{/*display: "flex", justifyContent: "center"*/ }}>
                                    {props.acts && props.acts.map((act, i) =>
                                        <>
                                            <Link to={act.route} style={{ textDecoration: 'none', color: contextTheme.foreground }} key={act.title} >
                                                <ListItem button onClick={() => { handleChapterChange(i) }}>
                                                    <div style={{ paddingTop: "10%", margin: "1px", display: "flex", justifyContent: "center", flexDirection: "column", border: "1px solid ", alignItems: "center" }}>
                                                        <img src={props.acts[i].image} width={"80%"} height={"50%"} style={{ s: "1px" }} alt="game cover" />
                                                        <h1 style={{ textAlign: "center" }}>{act.title}</h1>
                                                    </div>
                                                </ListItem>
                                            </Link>
                                        </>
                                    )}
                                </List>
                            )}
                        </div>

                        <div
                            style={{ display: "flex", justifyContent: "center" }}
                            hidden={currentTab !== "extra"}
                            id={`tabpanel-extra`}
                        >
                            {currentTab === "extra" && (
                                <div><List style={{}}>
                                    {props.extraContent && props.extraContent.map((extra) =>
                                        <Link to={extra.route} style={{ textDecoration: 'none', color: contextTheme.foreground }} key={extra.title} >
                                            <ListItem button>
                                                <ListItemText primary={extra.title} />
                                            </ListItem>
                                        </Link>
                                    )}
                                </List></div>
                            )}
                        </div>
                    </div>
                </>}
        </>
    )
}

export default GameCover;