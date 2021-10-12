import React, { useCallback, useEffect, useRef, useState, } from 'react';

/* intellectual property */
import Modal from '../../libs/modal/modal';

/* helpers */
import { ThemeContext } from '../../helpers/themeContext/themeContext';
import LoadingHOC from '../loading/LoadingHOC';

/* services */
import gameService from '../../services/game.service';

/* third party packages */
import { Button, Container, makeStyles } from '@material-ui/core';

//routing
import { useHistory } from "react-router-dom";

/* style */
import './gameEngine.css'

const useStyles = makeStyles((theme) => ({
    root: contextTheme => ({
        "& > *": {
            margin: theme.spacing(1),
            color: contextTheme.foreground,
            transition: "all 0.50s linear",
        },
        "& h1": {
            display: "block",
            color: contextTheme.foreground,
            transition: "all 0.50s linear",
            borderBottom: "1px solid " + contextTheme.foreground + ' !important',
        },

    })
}));


function GameEngine({ gameId, ...props }) {

    const history = useHistory();
    const { setLoading } = props;

    //dialog
    const [open, setOpen] = useState(false);

    const [title, setTitle] = useState(null)
    const [currentGame, setCurrentGame] = useState([])
    const [currentGameIds, setCurrentGameIds] = useState(JSON.parse(localStorage.getItem(gameId + '_currentGameIds')) ? JSON.parse(localStorage.getItem(gameId + '_currentGameIds')).currentGameIds : ["start"])
    //const [end, setEnd] = useState(["start"])

    const [animation, setAnimation] = useState("")

    const [contextTheme] = React.useContext(ThemeContext);
    const classes = useStyles(contextTheme);

    const next = useCallback((newId) => {
        console.log("..... ", newId)

        if (newId === "game") {
            //history.go(0)
            history.push("/")
            let behavior = "instant"
            window.scroll({ top: 0, left: 0, behavior });
        }
        /*else if(newId.includes("_no") && currentGameIds[currentGameIds.length - 1].includes("_discardable")){
            currentGameIds.pop()
        }*/
        else if (newId === "completado") {
            console.log("now start_hola_mundo")
            setAnimation("Comienza: Hola Mundo.")
            setOpen(true)
        }
        else if (newId === "hola_mundo_1_completado") {
            console.log("now hola_mundo_2")
            setAnimation("Continúa: Hola Mundo.")
            setOpen(true)
        }
        setCurrentGameIds(currentGameIds => [...currentGameIds, newId]);
    }, [history, setCurrentGameIds])

    const findAnswer = (options, id) => {
        console.log(options, id)
        if (options.find(op => op.id === id)) {
            return options.find(op => op.id === id).noShow ? null : options.find(op => op.id === id).option
        }
        return null
    }


    const renderGameWithHTML = useCallback((gameData) => {
        let currentGameTemp = []
        for (let i = 0; i < gameData.length; i++) {
            if (i !== gameData.length - 1 /*&& !gameData[i + 1].id.includes("_no") && !gameData[i].id.includes("_discardable")*/) {
                currentGameTemp.push({
                    id: gameData[i].id,
                    html: <> { gameData[i + 1].id.includes("_no") && gameData[i].id.includes("_discardable") ? null : <div dangerouslySetInnerHTML={{ __html: gameData[i].text }} /> }
                        {findAnswer(gameData[i].options, gameData[i + 1].id) ? <div dangerouslySetInnerHTML={{ __html: "—" + findAnswer(gameData[i].options, gameData[i + 1].id) }} /> : null}
                    </>
                })
            } else {
                currentGameTemp.push({
                    id: gameData[i].id,
                    html: <><hr/><div dangerouslySetInnerHTML={{ __html: gameData[i].text }} />
                        <div className="optionsButtons">
                            {gameData[i].options.map(option =>
                                <div key={"option" + option.id}>
                                    <Button variant="contained" color="primary" onClick={() => next(option.id)}>
                                        <div dangerouslySetInnerHTML={{ __html: option.option }} />
                                    </Button>
                                </div>)}
                        </div>
                    </>
                })
            }
        }
        return currentGameTemp
    }, [next])


    useEffect(() => {
        console.log("currentGameIds", currentGameIds)
        setLoading(true)
        gameService.getGameByScreens(gameId, currentGameIds).then(result => {
            setTitle(result.title)
            setCurrentGame([...renderGameWithHTML(result.data)])
            setLoading(false)
            localStorage.setItem(gameId + '_currentGameIds', JSON.stringify({ currentGameIds: currentGameIds }));
        })
        /*return () => {
            // Limpiar la suscripción
            subscription.unsubscribe();
          };*/
    }, [gameId, renderGameWithHTML, currentGameIds, setLoading])

    const restart = () => {
        localStorage.removeItem(gameId + '_currentGameIds')
        history.go(0)
    }

    const back = () => {
        setCurrentGame(currentGame => currentGame.slice(0, -1));
        setCurrentGameIds(currentGameIds => currentGameIds.slice(0, -1));
    }

    //auto scroll down logic
    //www.codegrepper.com/code-examples/javascript/
    //frameworks/react/scrollbar+automatically+scroll+down+as+new+divs+are+added+reactjs
    const messagesEndRef = useRef(null)
    const scrollToBottom = () => {
        if (currentGame.length > 1) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }

    useEffect(scrollToBottom, [currentGame]);

    return (
        <>
            <Container maxWidth="lg">
                <div id="content_wrapper" className={classes.root}>
                    <h1>{title}</h1>
                    <div id="content">
                        {currentGame.map((screen) =>
                            <div key={screen.id}>
                                {screen.html}
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                </div>
                <div className="controlPanel">
                    <Button color="secondary" variant="contained" onClick={restart}> borrar progreso</Button>
                    &nbsp;
                    <Button color="primary" style={{ backgroundColor: "green" }} variant="contained" onClick={back}>Revertir última decisión</Button>
                </div>
                <Modal
                    open={open} setOpen={setOpen}
                    description={<div class="typewriter"><h1>{animation}</h1></div>}
                    actions={<Button onClick={() => { setOpen(false); next("start_hola_mundo") }} color="primary" autoFocus>Continuar</Button>} />

            </Container>
        </>
    )
}

export default LoadingHOC(GameEngine);





