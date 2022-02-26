import React, { useRef } from 'react';
import { Button, Container, Paper, TextField, Typography, useMediaQuery } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { ThemeContext } from '../../helpers/themeContext/themeContext';

/* third party packages */
import emailjs from 'emailjs-com';

//routing
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
    },
    title: {
        flexGrow: 0.5,
    },
    container: {
        display: 'block',
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: contextTheme => ({
        display: 'block',
        padding: theme.spacing(2),
        overflow: 'auto',
        flexDirection: 'column',
        margin: "1%",
        backgroundColor: contextTheme.background,
        color: contextTheme.foreground,
        transition: "all 0.50s linear"
    }),
    fixedHeight: {
        height: 240,
        width: "100%"
    },
    h3: {
        fontSize: '1.2rem',
        '@media (min-width:600px)': {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.4rem',
        }
    }
}));

export default function Info(props) {

    //language
    //const { t } = useTranslation('common');

    const matches = useMediaQuery('(min-width:1200px)');

    const [contextTheme] = React.useContext(ThemeContext);
    const classes = useStyles(contextTheme);

    const fixedHeightPaper = clsx(classes.paper);

    const form = useRef();

    const history = useHistory();

    const sendEmail = (e) => {
        //e.preventDefault();
        emailjs.sendForm('service_oe5qog9', 'template_teliz12', form.current, 'user_U7OS7e9gDv36q2ufJrkBy')
            .then((result) => {
                console.log(result.text);
                history.go(0)
            }, (error) => {
                console.log(error.text);
                alert("Algo salió mal")
            });


    };

    return (
        <>
            <Grid style={matches ? {} : { /*height: "100vh"*/ }}>
                <br></br>
                <h1 style={{ textAlign: "center" }}>{`<Contáctenos/>`}</h1>

                <Paper className={fixedHeightPaper}>
                    <Typography variant="subtitle1">
                        <p>Correo: tecnotopiacr@gmail.com</p>
                        <p>Instagram: @tecno_topia</p>
                    </Typography>
                </Paper>

                <Container style={matches ? { width: "80%" } : { width: "100%" }}>
                    <h1 style={{ textAlign: "center" }}>Envía un mensaje ahora mismo</h1>
                    <form ref={form} onSubmit={sendEmail}>
                        <h2>Nombre</h2>
                        {/*<input type="text" name="from_name" />*/}
                        <TextField
                            style={{ backgroundColor: "white" }}
                            type="text"
                            name="from_name"
                            variant="filled"
                            fullWidth
                        />
                        <h2>Mi correo</h2>
                        <TextField
                            style={{ backgroundColor: "white" }}
                            type="email"
                            name="from_email"
                            variant="filled"
                            fullWidth
                        />
                        <h2>Mensaje</h2>
                        <TextField
                            style={{ backgroundColor: "white" }}
                            multiline
                            rows={4}
                            variant="filled"
                            name="message"
                            fullWidth
                        />
                    </form>
                    <br></br>
                    <Button onClick={() => sendEmail()} size="large" variant='contained' style={{ backgroundColor: "#FFF227" }}>
                        <strong style={{ backgroundColor: "#FFF227", fontWeight: "bold", color: "#012255", fontSize: "25px" }}>
                            Enviar
                        </strong>

                    </Button>
                </Container>
                <br></br>
            </Grid>
        </>
    );
}