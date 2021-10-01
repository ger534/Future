import React, { } from 'react';

/* helpers */
import LoadingHOC from '../../libs/loading/LoadingHOC';
import GameEngine from '../../libs/gameEngine/gameEngine';

/* style */
import './game.css'



function Game(props) {

    return (
        <>
            <GameEngine gameData={[]} />
        </>
    )
}
//export default LoadingHOC(Game);
export default LoadingHOC(Game);

/*<div style={{ overflow: "hidden" }} dangerouslySetInnerHTML={{ __html: screen.html }} />*/