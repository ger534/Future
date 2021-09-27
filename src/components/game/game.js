import React, { useCallback, useEffect, useState, } from 'react';

/* helpers */
import LoadingHOC from '../../libs/loading/LoadingHOC';
import gameService from '../../services/game.service';

/* style */
import './game.css'

//routing
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { ThemeContext } from '../../helpers/themeContext/themeContext';

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
            border: "1px solid " + contextTheme.foreground + ' !important',
            borderRadius: "4px",
        },

    })
}));

function Game(props) {

    const [currentGame, setCurrentGame] = useState([])
    const [currentGameIds, setCurrentGameIds] = useState(["start"])
    //localStorage.setItem('screens', "start")
    const { setLoading } = props;

    const [contextTheme] = React.useContext(ThemeContext);
    const classes = useStyles(contextTheme);

    const next = useCallback((newId) => {
        console.log(newId)
        if(newId === "game"){
            props.history.go(0)
        }
        setCurrentGameIds(currentGameIds => [...currentGameIds, newId]);
    }, [props.history])

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
                            <div key={"option"+option.id}>{option.option} <button onClick={() => next(option.id)}>NEXT</button></div>)}
                       
                    </>
                })
            }
        }
        //<Button variant="contained" color="primary" onClick={() => next(option.id)}> TEXT </Button>
        return currentGameTemp
    }, [next])

    useEffect(() => {
        console.log("currentGameIds", currentGameIds)
        setLoading(true)
        gameService.getGameByScreens("employee", currentGameIds).then(result => {
            setCurrentGame([...renderGame(result.data)])
            setLoading(false)
        })
        /*return () => {
            // Limpiar la suscripción
            subscription.unsubscribe();
          };*/
    }, [renderGame, currentGameIds, setLoading])

    return (
        <>
            <div id="content_wrapper" className={classes.root}>
                <h1>Empleado</h1>
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
//export default LoadingHOC(Game);
export default withRouter(LoadingHOC(Game));

/*<div style={{ overflow: "hidden" }} dangerouslySetInnerHTML={{ __html: screen.html }} />*/