import React, { useEffect, useState } from 'react';

import Avatar from '@material-ui/core/Avatar'

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';

/* intellectual property */
import axios from 'axios';
import LoadingHOC from '../../libs/loading/LoadingHOC';
import { flags } from '../../flags'
import { ThemeContext } from '../../contexts/theme-context';


const useStyles = makeStyles((theme) => ({
    root: contextTheme => ({
        "& > *": {
            margin: theme.spacing(1)
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: contextTheme.foreground + ' !important',
                transition: "all 0.50s linear",
            },
        },
        '& .MuiInputBase-input': {
            color: contextTheme.foreground,
            transition: "all 0.50s linear",
        }
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
            <Container>

                {character.name ? <form className={classes.root} noValidate autoComplete="off">
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={6} ls={6}>
                            <Avatar alt="character" src={props.image} style={{ width: "200px", height: "200px" }}></Avatar>
                            <h1>{character.name}</h1>

                            {/* using Steven characters template */}
                            <h2>Ficha fisiológica</h2>
                            <TextField
                                id="outlined-secondary"
                                //label="Outlined secondary"
                                variant="outlined"
                                color="secondary"
                                disabled={true}
                                multiline
                                value={character.physiologicalRecord}
                            />
                            <h2>Ficha psicológica</h2>
                            <TextField
                                id="outlined-secondary"
                                //label="Outlined secondary"
                                variant="outlined"
                                color="secondary"
                                disabled={true}
                                multiline
                                value={character.psychologicalRecord}
                            />
                            <h2>Ficha sociológica</h2>
                            <TextField
                                id="outlined-secondary"
                                //label="Outlined secondary"
                                variant="outlined"
                                color="secondary"
                                disabled={true}
                                multiline
                                value={character.sociologicalRecord}
                            />
                            <h2>¿Cómo habla?</h2>
                            <TextField
                                id="outlined-secondary"
                                //label="Outlined secondary"
                                variant="outlined"
                                color="secondary"
                                disabled={true}
                                multiline
                                value={character.HowItTalks}
                            />
                            <h2>Muletillas</h2>
                            <TextField
                                id="outlined-secondary"
                                //label="Outlined secondary"
                                variant="outlined"
                                color="secondary"
                                disabled={true}
                                multiline
                                value={character.catchphrase}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} ls={6}>
                            <h2>Manias</h2>
                            <TextField
                                id="outlined-secondary"
                                //label="Outlined secondary"
                                variant="outlined"
                                color="secondary"
                                disabled={true}
                                multiline
                                value={character.manias}
                            />
                            <h2>Motivaciones</h2>
                            <TextField
                                id="outlined-secondary"
                                //label="Outlined secondary"
                                variant="outlined"
                                color="secondary"
                                disabled={true}
                                multiline
                                value={character.motivations}
                            />
                            <h2>Moral</h2>
                            <TextField
                                id="outlined-secondary"
                                //label="Outlined secondary"
                                variant="outlined"
                                color="secondary"
                                disabled={true}
                                multiline
                                value={character.moral}
                            />
                            <h1 style={{ textAlign: "center" }}>Epojé, suspensión del juicio</h1>
                            <h2>Palabras clave</h2>
                            <TextField
                                id="outlined-secondary"
                                //label="Outlined secondary"
                                variant="outlined"
                                color="secondary"
                                disabled={true}
                                multiline
                                value={character.suspensionOfJudgment.keywords}
                            />
                            <h2>Definición personal</h2>
                            <TextField
                                id="outlined-secondary"
                                //label="Outlined secondary"
                                variant="outlined"
                                color="secondary"
                                disabled={true}
                                multiline
                                value={character.suspensionOfJudgment.meaning}
                            />
                            <h2>Causas</h2>
                            <TextField
                                id="outlined-secondary"
                                //label="Outlined secondary"
                                variant="outlined"
                                color="secondary"
                                disabled={true}
                                multiline
                                style={{ fontStyle: "italic", width: "100%" }}
                                value={character.suspensionOfJudgment.why}
                            />
                            {character.suspensionOfJudgment.meaning_self && <>
                                <h2>Comentario</h2>
                                <TextField
                                    id="outlined-secondary"
                                    //label="Outlined secondary"
                                    variant="outlined"
                                    color="secondary"
                                    disabled={true}
                                    multiline
                                    style={{ fontStyle: "italic", width: "100%" }}
                                    value={character.suspensionOfJudgment.meaning_self}
                                />
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
                    //label="Outlined secondary"
                    variant="outlined"
                    color="secondary"
                    disabled={true}
                    multiline
                    value={"Es el protagonista de la historia. Al principio se pinta como un humano intentando ayudar a otro humano"}
                />
                <h2>Psicología</h2>
                <TextField
                    id="outlined-secondary"
                    //label="Outlined secondary"
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
                    //label="Outlined secondary"
                    variant="outlined"
                    color="secondary"
                    disabled={false}
                    multiline
                    value={"En algún punto de la obra luego de ver como la realidad y las simulaciones pueden confundirse, comienza a dudar de la realidad. Tal vez él también está encerrado en una simulación. Tal vez es imposible saberlo."}
                />*/