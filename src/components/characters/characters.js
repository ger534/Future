import React, { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid'

import Avatar from '@material-ui/core/Avatar'

import Test from '../../assets/Test.png'

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

/* intellectual property */
import axios from 'axios';
import LoadingHOC from '../../libs/loading/LoadingHOC';
import { flags } from '../../flags'
import { ThemeContext, themes } from '../../context/theme-context';

const useStyles = makeStyles((theme) => ({
    root: contextTheme => ({
        "& > *": {
            margin: theme.spacing(1),
            width: "100%"
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset':{
                borderColor: contextTheme.foreground + ' !important',
                transition: "all 0.50s linear"
            },
        },
        '& .MuiInputBase-input': { 
            color: contextTheme.foreground,
            transition: "all 0.50s linear",
          }
    })
}));

function Characters(props) {

    React.useContext(ThemeContext);
    const [contextTheme, themeToggler] = React.useContext(ThemeContext);
    const classes = useStyles(contextTheme);
    //const { loading, setLoading } = props;
    const [character, setCharacter] = useState({})

    //get character
    useEffect(() => {
        //setLoading(true)
        axios(`${flags().api}/future/character/${props.char}`, {
            method: 'get',
            headers: {
                'content-type': 'application/json'
            },
            //data: payload,
        }).then(response => {
            setCharacter(response.data)
            console.log(response.data)
            //setLoading(false)
        }).catch(error => {
            //setLoading(false)
        })
    }, [props.char])


    return (
        <>
            {character.suspensionOfJudgment ? <form className={classes.root} noValidate autoComplete="off">

                <Avatar alt="test" src={Test} style={{ width: "200px", height: "200px" }}></Avatar>
                <h1>El supervisor</h1>
                <p>El ingeniero, el experto, miembro de la brigada
                    de rescate, un antivirus?</p>
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
                />

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
                    value={character.suspensionOfJudgment.why}
                />
            </form> : <h1>Not ready</h1>}


        </>
    )
}
export default Characters;
