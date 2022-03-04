import React, { useEffect, useState } from 'react';

/* helpers */
import LoadingHOC from '../../libs/loading/LoadingHOC';
import GameEngine from '../../libs/gameEngine/gameEngine';
//import { UserContext } from '../../helpers/userContext/userContext';

//firestore
import { getFirestore } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";

/* style */
import './game.css'

function Game(props) {

    //const [contextUser] = React.useContext(UserContext);
    //console.log(contextUser)

    const [userUID, setUserUID] = useState(null)
    const [progress, setProgress] = useState(null)

    useEffect(() => {
        const db = getFirestore();
        const contextUser = JSON.parse(sessionStorage.getItem('user'));
        if (contextUser) {
            console.log("asking for ", `${props.gameId}_${contextUser.uid}`)
            const docRef = doc(db, "user_progress", `${props.gameId}_${contextUser.uid}`);
            getDoc(docRef).then(snapshot => {
                if (snapshot) {
                    console.log("snapshot: ", snapshot);
                    console.log("Document data: ", snapshot.data());
                    setProgress(snapshot.data() ? snapshot.data().progress : null)
                }
            })
        }
        setUserUID(contextUser ? contextUser.uid : null)
    }, [/*props.gameId*/])

    return (
        <>
            <GameEngine gameId={props.gameId} next={props.next} user={userUID} progress={progress} image={props.image} />
        </>
    )
}

export default LoadingHOC(Game);