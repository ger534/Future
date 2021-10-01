import React, { useCallback, useEffect, useState, } from 'react';

/* helpers */
import { ThemeContext } from '../../helpers/themeContext/themeContext';
import LoadingHOC from '../loading/LoadingHOC';

/* services */
import gameService from '../../services/game.service';

/* style */
import './gameEngine.css'

//routing
import { useHistory } from "react-router-dom";

import { Button, makeStyles } from '@material-ui/core';

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


function GameEngine({ gameData, ...props}) {

    const history = useHistory();
    const { setLoading } = props;

    const [title, setTitle] = useState(null)
    const [currentGame, setCurrentGame] = useState([])
    const [currentGameIds, setCurrentGameIds] = useState(["start"])
    //const [end, setEnd] = useState(["start"])

    const [contextTheme] = React.useContext(ThemeContext);
    const classes = useStyles(contextTheme);

    const next = useCallback((newId) => {
        if (newId === "game") {
            //history.go(0)
            history.push("/")
        }
        setCurrentGameIds(currentGameIds => [...currentGameIds, newId]);
    }, [history, setCurrentGameIds])

    const findAnswer = (options, id) => {
        return options.find(op => op.id === id).option
    }

    const renderGame = useCallback((gameData) => {
        let currentGameTemp = []
        for (let i = 0; i < gameData.length; i++) {
            if (i !== gameData.length - 1) {
                currentGameTemp.push({
                    id: gameData[i].id,
                    html: <><p>{gameData[i].text}</p>
                        <p>{findAnswer(gameData[i].options, gameData[i + 1].id)}</p>
                    </>
                })
            } else {
                currentGameTemp.push({
                    id: gameData[i].id,
                    html: <><p>{gameData[i].text}</p>
                        {gameData[i].options.map(option =>
                            <div key={"option" + option.id}> <Button variant="contained" color="primary" onClick={() => next(option.id)}>{option.option}</Button></div>)}

                    </>
                })
            }
        }
        return currentGameTemp
    }, [next])

    const renderGameWithHTML = useCallback((gameData) => {
        let currentGameTemp = []
        for (let i = 0; i < gameData.length; i++) {
            if (i !== gameData.length - 1) {
                currentGameTemp.push({
                    id: gameData[i].id,
                    html: <><div style={{ overflow: "hidden" }} dangerouslySetInnerHTML={{ __html: gameData[i].text }} />
                        <div style={{ overflow: "hidden" }} dangerouslySetInnerHTML={{ __html: "—"+findAnswer(gameData[i].options, gameData[i + 1].id) }} />
                    </>
                })
            } else {
                currentGameTemp.push({
                    id: gameData[i].id,
                    html: <><div style={{ overflow: "hidden" }} dangerouslySetInnerHTML={{ __html: gameData[i].text }} />
                        {gameData[i].options.map(option =>
                            <div key={"option" + option.id}> <Button variant="contained" color="primary" onClick={() => next(option.id)}><div style={{ overflow: "hidden" }} dangerouslySetInnerHTML={{ __html: option.option }} /></Button></div>)}

                    </>
                })
            }
        }
        return currentGameTemp
    }, [next])


    useEffect(() => {
        console.log("currentGameIds", currentGameIds)
        setLoading(true)
        gameService.getGameByScreens("terms_and_conditions", currentGameIds).then(result => {
            setTitle(result.title)
            setCurrentGame(result.htmlFlag ? [...renderGameWithHTML(result.data)] : [...renderGame(result.data)])
            setLoading(false)
        })
        /*return () => {
            // Limpiar la suscripción
            subscription.unsubscribe();
          };*/
    }, [renderGame, renderGameWithHTML, currentGameIds, setLoading])

    return (
        <>
            <div id="content_wrapper" className={classes.root}>
                <h1>{title}</h1>
                <div id="content">
                    {currentGame.map((screen) =>
                        <div key={screen.id}>
                            {screen.html}
                        </div>
                    )}
                </div>
            </div>

        </>
    )
}

export default LoadingHOC(GameEngine);





