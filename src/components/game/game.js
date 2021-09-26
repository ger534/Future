import React, { useEffect, useState, } from 'react';

/* helpers */
import LoadingHOC from '../../libs/loading/LoadingHOC';
import gameService from '../../services/game.service';

/* style */
import './game.css'

//routing
import { withRouter } from 'react-router-dom';

function Game(props) {

    const [currentGame, setCurrentGame] = useState([])
    const [currentGameIds, setCurrentGameIds] = useState(["start"])
    //localStorage.setItem('screens', "start")
    const { loading, setLoading } = props;

    useEffect(() => {
        //console.log("localStorage", localStorage.getItem('screens'))
        //console.log("currentGameIds", currentGameIds)
        if (props.history.location.hash !== "" && !currentGameIds.includes(props.history.location.hash.substring(1))) {
            setCurrentGameIds(currentGameIds => [...currentGameIds, props.history.location.hash.substring(1)]);
        }
        /*if (props.history.location.hash !== "" && !localStorage.getItem('screens').includes(props.history.location.hash.substring(1))) {
            console.log("so")
            localStorage.setItem('screens', localStorage.getItem('screens') + "," + props.history.location.hash.substring(1))
        }*/
        setLoading(true)
        gameService.getGameByScreens("employee", currentGameIds).then(result => {
            setCurrentGame(result.data)
            setLoading(false)
        })
        /*return () => {
            // Limpiar la suscripción
            subscription.unsubscribe();
          };*/
    }, [currentGameIds, props.history.location.hash])

    return (
        <>
            {<div id="content_wrapper">
                <h1>Empleado</h1>
                <div id="content">
                    {currentGame.map((screen) =>
                        <div key={screen.id}>
                            <div style={{ overflow: "hidden" }} dangerouslySetInnerHTML={{ __html: screen.html }} />
                        </div>
                    )}
                </div>
            </div>}

        </>
    )
}
//export default LoadingHOC(Game);
export default withRouter(LoadingHOC(Game));