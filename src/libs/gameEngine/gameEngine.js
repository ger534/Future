import React, { useCallback, useEffect, useRef, useState, } from 'react';

/* intellectual property */
import Modal from '../../libs/modal/modal';
import saveIcon from '../../assets/icons/save.svg'

/* helpers */
import { ThemeContext } from '../../helpers/themeContext/themeContext';
import LoadingHOC from '../loading/LoadingHOC';
import app from '../../helpers/firebase/firebase'
import useWindowDimensions from "../../helpers/useWindowDimensions/useWindowDimensions";

/* services */
import gameService from '../../services/game.service';

/* third party packages */
import { Icon, Box, Button, Container, IconButton, makeStyles } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

//routing
import { useHistory } from "react-router-dom";

//firebase analytics
import { getAnalytics, logEvent } from 'firebase/analytics';

//firestore
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

/* icons */
import SaveIcon from '@material-ui/icons/Save';
//import ArrowBackIcon from '@material-ui/icons/ArrowBack';
//import ArrowForwardIcon from '@material-ui/icons/ArrowBack';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import MenuIcon from '@material-ui/icons/Menu';
//import DoNotDisturbIcon from '@material-ui/icons/DoNotDisturbIcon';


/* style */
import './gameEngine.css'

const useStyles = makeStyles((theme) => ({
    root: props => ({
        "& > *": {
            margin: theme.spacing(1),
            color: props.contextTheme.foreground,
            transition: "all 0.50s linear",
        },
        "& h1": {
            display: "block",
            color: props.contextTheme.foreground,
            transition: "all 0.50s linear",
            borderBottom: "1px solid " + props.contextTheme.foreground + ' !important',
        },
        "& span.bad-action-box": {
            display: props.feedback ? "none" : "inline"
        },
        "& span.good-action-box": {
            display: props.feedback ? "none" : "inline"
        }
    })
}));


function GameEngine({ gameId, ...props }) {

    const db = getFirestore();

    const history = useHistory();
    const { setLoading } = props;

    //dialog
    const [open, setOpen] = useState(false);

    const [title, setTitle] = useState(null)
    const [currentGame, setCurrentGame] = useState([])
    const [currentGameIds, setCurrentGameIds] = useState(JSON.parse(localStorage.getItem(gameId + '_currentGameIds')) ? JSON.parse(localStorage.getItem(gameId + '_currentGameIds')).currentGameIds : ["start"])
    const analytics = getAnalytics(app);

    const [animation, setAnimation] = useState("")

    const [contextTheme] = React.useContext(ThemeContext);
    const [examFeedback, setExamFeedback] = useState(false)
    const classes = useStyles({ contextTheme: contextTheme, feedback: examFeedback });

    //exam
    const [yesResponsesCount, setYesResponsesCount] = useState(-1)
    const [noResponsesCount, setNoResponsesCount] = useState(-1)



    const removeDuplicates = (array) => {
        let no_duplicates = array.filter((c, index) => {
            return array.indexOf(c) === index;
        });
        return no_duplicates;
    }

    const pageEndRef = useRef(null)

    const next = useCallback((newId) => {
        console.log("..... ", newId)
        //logEvent(analytics, 'decision', { id: newId });
        logEvent(analytics, newId);

        if (newId === "restart") {
            history.go(0)
            let behavior = "instant"
            window.scroll({ top: 0, left: 0, behavior });
            localStorage.removeItem(gameId + '_currentGameIds')
        }
        else if (newId === "game") {
            history.push("/")
            let behavior = "instant"
            window.scroll({ top: 0, left: 0, behavior });
        }
        else if (newId === "completado") {
            setYesResponsesCount(currentGameIds.filter(x => x.includes("_yes")).length)
            setNoResponsesCount(currentGameIds.filter(x => x.includes("_no")).length)
            setExamFeedback(false)
            setTimeout(function () { pageEndRef.current.scrollIntoView({ behavior: "instant" }) }, 1);
        }
        else if (newId === "examen_completado") {
            setExamFeedback(false)
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
            setAnimation("Comienza: Hola Mundo.")
            setOpen(true)
            pageEndRef.current.scrollIntoView({ behavior: "instant" })
        }
        else if (newId === "hola_mundo_1_completado") {
            setAnimation("Continúa: Hola Mundo.")
            setOpen(true)
        }
        else if (newId === "hola_mundo_2_completado") {
            setAnimation("Continúa: Hola Mundo.")
            setOpen(true)
        }
        else if (newId === "hello_world_2_completado") {
            setAnimation("Continúa: Hola Mundo.")
            setOpen(true)
        }
        else if (newId === "hola_mundo_3_completado") {
            setAnimation("Continúa: Hola Mundo.")
            setOpen(true)
        }
        else if (newId === "epilogo") {
            setAnimation("Continúa: Hola Mundo.")
            setOpen(true)
        }
        else if (newId === "contenido_extra") {
            setAnimation("Continúa: Hola Mundo.")
            setOpen(true)
        }
        else if (newId === "comentarios") {
            history.push("/info")
        }
        else if (newId === "agradecimiento") {
            history.push("/info")
        }


        setCurrentGameIds(currentGameIds => removeDuplicates([...currentGameIds, newId]));
    }, [history, setCurrentGameIds, gameId, analytics])

    const findAnswer = (options, id) => {
        if (options.find(op => op.id === id)) {
            return options.find(op => op.id === id).noShow ? null : options.find(op => op.id === id).option
        }
        return null
    }


    const renderGameWithHTML = useCallback((gameData) => {
        let currentGameTemp = []
        for (let i = 0; i < gameData.length; i++) {
            if (i !== gameData.length - 1) {
                let hr = (i === gameData.length - 2 && findAnswer(gameData[i].options, gameData[i + 1].id)) ? "<hr  style='display: block; height: 1px; border: 0; border-top: 1px solid #FFF227; margin: 1em 0; padding: 0' >" : ""
                currentGameTemp.push({
                    id: gameData[i].id,
                    html: <> {gameData[i + 1].id.includes("_no") && gameData[i].id.includes("_discardable") ? null : <div dangerouslySetInnerHTML={{ __html: gameData[i].text }} />}
                        {findAnswer(gameData[i].options, gameData[i + 1].id) ? <div dangerouslySetInnerHTML={{ __html: `${hr}<p class="dialog">—${findAnswer(gameData[i].options, gameData[i + 1].id)}</p>` }} /> : null}
                    </>
                })
            } else {
                setYesResponsesCount(currentGameIds.filter(x => x.includes("_yes")).length)
                setNoResponsesCount(currentGameIds.filter(x => x.includes("_no")).length)
                if (gameData[i].id === "completado") {
                    if (currentGameIds.filter(x => x.includes("_yes")).length < currentGameIds.filter(x => x.includes("_no")).length) {

                        currentGameTemp.push({
                            id: gameData[i].id,
                            html: <>{gameData[i].id !== "start" && <hr style={{ display: "block", height: "1px", border: 0, borderTop: "1px solid #FFF227", margin: "1em 0; padding: 0" }} />}
                                <div dangerouslySetInnerHTML={{
                                    __html: `<p>Aciertos: ${currentGameIds.filter(x => x.includes("_yes")).length}, infortunios: ${currentGameIds.filter(x => x.includes("_no")).length}.</p>
                                <p><span class=\"good-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(✖️) </span>Puede continuar, pero le estaremos observando.</code></span></p>` }} />
                                <div className="optionsButtons">
                                    {gameData[i].options.map((option, i) =>
                                        <div key={`option_${option.id}`}>
                                            <Button variant="contained" color="primary" onClick={() => next(option.id)}>
                                                <div dangerouslySetInnerHTML={{ __html: option.option }} />
                                            </Button>
                                        </div>)}
                                </div>
                            </>
                        })
                    } else if (currentGameIds.filter(x => x.includes("_yes")).length > currentGameIds.filter(x => x.includes("_no")).length) {
                        currentGameTemp.push({
                            id: gameData[i].id,
                            html: <>{gameData[i].id !== "start" && <hr style={{ display: "block", height: "1px", border: 0, borderTop: "1px solid #FFF227", margin: "1em 0; padding: 0" }} />}
                                <div dangerouslySetInnerHTML={{
                                    __html: `<p>Aciertos: ${currentGameIds.filter(x => x.includes("_yes")).length}, infortunios: ${currentGameIds.filter(x => x.includes("_no")).length}.</p>
                                <p><span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Análisis psicológico y social completado.</code></span></p>
                                ` }} />
                                <div className="optionsButtons">
                                    {gameData[i].options.map((option, i) =>
                                        <div key={`option_${option.id}`}>
                                            <Button variant="contained" color="primary" onClick={() => next(option.id)}>
                                                <div dangerouslySetInnerHTML={{ __html: option.option }} />
                                            </Button>
                                        </div>)}
                                </div>
                            </>
                        })
                    }

                } else {
                    let hr = gameData[i].id !== "start" && findAnswer(gameData[i - 1].options, gameData[i].id) ? null : <hr style={{ display: "block", height: "1px", border: 0, borderTop: "1px solid #FFF227", margin: "1em 0; padding: 0" }} />
                    currentGameTemp.push({
                        id: gameData[i].id,
                        html: <>{gameData[i].id !== "start" && hr}
                            <div dangerouslySetInnerHTML={{ __html: gameData[i].text }} />
                            <div className="optionsButtons">
                                {gameData[i].options.map((option, i) =>
                                    <div key={`option_${option.id}`}>
                                        <Button variant="contained" color="primary" onClick={() => next(option.id)}>
                                            <div dangerouslySetInnerHTML={{ __html: option.option }} />
                                        </Button>
                                    </div>)}
                            </div>
                        </>
                    })
                }
            }
        }
        return currentGameTemp
    }, [next, currentGameIds])

    useEffect(() => {
        if (props.progress && props.progress.length > currentGameIds.length) {
            setCurrentGameIds(props.progress)
        }
    }, [props.progress, currentGameIds.length])

    useEffect(() => {
        console.log("currentGameIds", currentGameIds)
        setLoading(true)
        gameService.getGameByScreens(gameId, currentGameIds).then(result => {
            setTitle(result.title)
            console.log("result", result)
            setCurrentGame([...renderGameWithHTML(result.data)])
            if (result.exam) {
                setExamFeedback(currentGameIds.includes("completado") ? false : true)
            }
            setLoading(false)
            localStorage.setItem(gameId + '_currentGameIds', JSON.stringify({ currentGameIds: currentGameIds }));
        })
        /*return () => {
            // Limpiar la suscripción
            subscription.unsubscribe();
          };*/
    }, [gameId, renderGameWithHTML, currentGameIds, setLoading])

    const save = () => {
        if (props.user) {
            try {
                setDoc(doc(db, "user_progress", `${gameId}_${props.user}`), {
                    progress: currentGameIds
                }).then(() => alert(`Progreso guardado en la DB.`))
            } catch (error) {
                alert(`Algo salió mal, error: ${error}`)
            }

        } else {
            alert("Para guardar tus datos en la nube primero debes iniciar sesión")
        }

    }

    const restart = () => {
        localStorage.removeItem(gameId + '_currentGameIds')
        history.go(0)
    }

    const back = () => {
        if (currentGameIds.length !== 1) {
            setCurrentGameIds(currentGameIds => currentGameIds.slice(0, -1));
        }
    }

    const matches = useMediaQuery('(min-width:1200px)');
    const [scroll, setScroll] = useState(false)

    //auto scroll down logic
    //www.codegrepper.com/code-examples/javascript/
    //frameworks/react/scrollbar+automatically+scroll+down+as+new+divs+are+added+reactjs
    const messagesEndRef = useRef(null)
    const scrollToBottom = () => {
        if (currentGame.length > 1 && scroll) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }
    useEffect(scrollToBottom, [currentGame, scroll]);

    const { height } = useWindowDimensions();

    return (
        <>
            <Container maxWidth="lg">
                <div id="content_wrapper" className={classes.root} style={{ maxHeight: `${matches ? height - 41 - 76 - 20 - 31 - 46 - 40 : height - 95}px`, overflow: "auto" }}>
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
                {matches ?
                    /* desktop */
                    <div className="controlPanel">
                        <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#001433" }}>
                            <Button aria-label="save" onClick={() => {
                                if (window.confirm('¿desea guardar la nube su progreso actual?')) {
                                    save()
                                } else {
                                    return null
                                }
                            }} style={{ color: "white" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-save"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
                                &nbsp; Guardar progreso
                            </Button>
                            <Button aria-label="scroll" onClick={() => {
                                if (window.confirm(`¿Autodesplazamiento: ${scroll}?`)) {
                                    setScroll(!scroll)
                                } else {
                                    return null
                                }
                            }} style={{ color: "white" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-down"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>                        
                                &nbsp; {`Auto Desplazamiento: ${scroll}`}
                                </Button>
                            <Button aria-label="back" onClick={() => {
                                if (window.confirm(`¿desea revertir su última decisión?`)) {
                                    back()
                                } else {
                                    return null
                                }
                            }} style={{ color: "white" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-down-left"><polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path></svg>                        
                                &nbsp; Revertir última decisión
                                </Button>
                            <Button aria-label="restart" onClick={() => {
                                if (window.confirm(`¿desea reiniciar el capítulo actual?`)) {
                                    restart()
                                } else {
                                    return null
                                }
                            }} style={{ color: "white" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-octagon"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                                &nbsp; Borrar progreso
                            </Button>
                        </div>
                    </div> :
                    /* mobile */
                    <>
                        <div style={{ display: "block", border: 0, borderTop: "3px solid white", padding: 0 }} > </div>

                        <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#001433" }}>
                            <Button aria-label="index" onClick={() => {
                                if (window.confirm('¿desea volver al índice?')) {
                                    history.push("/tecno-topia")
                                } else {
                                    return null
                                }
                            }} style={{ color: "white" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                            </Button>
                            <Button aria-label="save" onClick={() => {
                                if (window.confirm('¿desea guardar la nube su progreso actual?')) {
                                    save()
                                } else {
                                    return null
                                }
                            }} style={{ color: "white", fontSize: "48px" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-save"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
                            </Button>
                            <Button aria-label="scroll" onClick={() => {
                                if (window.confirm(`¿Autodesplazamiento: ${scroll}?`)) {
                                    setScroll(!scroll)
                                } else {
                                    return null
                                }
                            }} style={{ color: "white" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-down"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>                        </Button>
                            <Button aria-label="back" onClick={() => {
                                if (window.confirm(`¿desea revertir su última decisión?`)) {
                                    back()
                                } else {
                                    return null
                                }
                            }} style={{ color: "white" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-down-left"><polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path></svg>                        </Button>
                            <Button aria-label="restart" onClick={() => {
                                if (window.confirm(`¿desea reiniciar el capítulo actual?`)) {
                                    restart()
                                } else {
                                    return null
                                }
                            }} style={{ color: "white" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-octagon"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                            </Button>
                        </div>
                    </>}
                <Modal
                    open={open} setOpen={setOpen}
                    /* image here */
                    description={<img src={props.image} width={"100%"} height={"30%"} style={{ s: "1px" }} alt={`image ${props.gameId}`} />}
                    //description={<div className="typewriter"><h1>{animation}</h1></div>}
                    actions={<Button onClick={() => { setOpen(false); history.push(props.next) }} color="primary" autoFocus>Continuar</Button>} />
                <div ref={pageEndRef} />
            </Container>
        </>
    )
}

export default LoadingHOC(GameEngine);





