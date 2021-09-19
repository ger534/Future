import React, { useEffect, useState } from 'react';

import Avatar from '@material-ui/core/Avatar'

import { makeStyles } from "@material-ui/core/styles";
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';

/* intellectual property */
import axios from 'axios';
import LoadingHOC from '../../libs/loading/LoadingHOC';
import { flags } from '../../flags'
import { ThemeContext } from '../../helpers/themeContext/themeContext';


const useStyles = makeStyles((theme) => ({
    root: contextTheme => ({
        "& > *": {
            margin: theme.spacing(1)
        },
        "& span": {
            display: "block",
            color: contextTheme.foreground,
            resize: "none",
            overflow: "hidden",
            fontSize: "1rem",
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            height: "-webkit-fill-available",
            width: "fill-available",
            transition: "all 0.50s linear",
            padding: "18.5px 14px",
            border: "1px solid " + contextTheme.foreground + ' !important',
            borderRadius: "4px",
        },

    })
}));

function Characters(props) {

    const [contextTheme] = React.useContext(ThemeContext);
    const classes = useStyles(contextTheme);
    const { /*loading,*/ setLoading } = props;
    const [character, setCharacter] = useState({})

    //get character
    useEffect(() => {
        setLoading(true)
        axios(`${flags().api}/future/character/${props.char}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
        }).then(response => {
            setCharacter(response.data)
            setLoading(false)
        }).catch(error => {
            setCharacter({})
            setLoading(false)
        })
    }, [props.char, setLoading])

    return (
        <>
            <Container maxWidth={false}>

                {character.name ? <form className={classes.root} noValidate autoComplete="off">
                    <Grid container /*spacing={6}*/>
                        <Grid item style={{ padding: "24px" }} xs={12} md={6} ls={6}>
                            <div style={{ display: "flex", flexWrap: "wrap" }}>
                                <Avatar alt="character" src={props.image} style={{ width: "200px", height: "200px" }}></Avatar>
                                <h1>{character.name}</h1>
                            </div>

                            {/* using Steven characters template */}
                            <h2>Ficha fisiológica</h2>
                            <span>{character.physiologicalRecord}</span>

                            <h2>Ficha psicológica</h2>
                            <span>{character.psychologicalRecord}</span>

                            <h2>Ficha sociológica</h2>
                            <span>{character.sociologicalRecord}</span>

                            <h2>¿Cómo habla?</h2>
                            <span>{character.HowItTalks}</span>

                            <h2>Muletillas</h2>
                            <span>{character.catchphrase}</span>
                        </Grid>
                        <Grid item style={{ padding: "24px" }} xs={12} md={6} ls={6}>
                            <h2>Manias</h2>
                            <span>{character.manias}</span>

                            <h2>Motivaciones</h2>
                            <span>{character.motivations}</span>

                            <h2>Moral</h2>
                            <span>{character.moral}</span>

                            <h1 style={{ textAlign: "center" }}>Epojé, suspensión del juicio</h1>

                            <h2>Palabras clave</h2>
                            <span>{character.suspensionOfJudgment.keywords}</span>

                            <h2>Definición personal</h2>
                            <span>{character.suspensionOfJudgment.meaning}</span>

                            <h2>Causas</h2>
                            <span>{character.suspensionOfJudgment.why}</span>

                            {character.suspensionOfJudgment.meaning_self && <>
                                <h2>Comentario</h2>
                                <span>{character.suspensionOfJudgment.meaning_self}</span>
                            </>
                            }
                        </Grid>
                    </Grid>
                </form> : <h1>Not ready</h1>}
            </Container>
        </>
    )
}
//export default Characters;
export default LoadingHOC(Characters);


/*<p>El ingeniero, el experto, comando logístico, un antivirus?</p>
                <h2>Descripción</h2>
                <TextField
                    id="outlined-secondary"
                    fullWidth
                    variant="outlined"
                    color="secondary"
                    disabled={true}
                    multiline
                    value={"Es el protagonista de la historia. Al principio se pinta como un humano intentando ayudar a otro humano"}
                />
                <h2>Psicología</h2>
                <TextField
                    id="outlined-secondary"
                    fullWidth
                    variant="outlined"
                    color="secondary"
                    disabled={true}
                    multiline
                    value={"Se preocupa, se emociona, se irrita. Es un humano"}
                />

                <h2>Trayectoria</h2>
                <p></p>
                <TextField
                    id="outlined-secondary"
                    fullWidth
                    variant="outlined"
                    color="secondary"
                    disabled={false}
                    multiline
                    value={"En algún punto de la obra luego de ver como la realidad y las simulaciones pueden confundirse, comienza a dudar de la realidad. Tal vez él también está encerrado en una simulación. Tal vez es imposible saberlo."}
                />*/