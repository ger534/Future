import React from 'react';

/* intellectual property */
import { ThemeContext } from '../../helpers/themeContext/themeContext';
import HolaMundo1 from '../../assets/Arte_305_Bust.png'

/* third party packages */
//import Carousel from 'react-material-ui-carousel'
import { Box, Button, Container, makeStyles, useMediaQuery } from '@material-ui/core';

//routing
import { useHistory } from "react-router-dom";

import ministerio4 from '../../assets/scholarship/ministerio-01.svg'
import ministerio3 from '../../assets/scholarship/ministerio-02.svg'
import ministerio2 from '../../assets/scholarship/ministerio-03.svg'
import ministerio1 from '../../assets/scholarship/ministerio-04.svg'

import ministerio4White from '../../assets/scholarship/ministerio-01-white.svg'
import ministerio3White from '../../assets/scholarship/ministerio-02-white.svg'
import ministerio2White from '../../assets/scholarship/ministerio-03-white.svg'
import ministerio1White from '../../assets/scholarship/ministerio-04-white.svg'

const useStyles = makeStyles((theme) => ({
    container: {
        width: "100%"
    },
    button: contextTheme => ({
        backgroundColor: contextTheme.details
    }),
}));

function Home() {

    const history = useHistory();
    const [contextTheme] = React.useContext(ThemeContext);
    const classes = useStyles(contextTheme);
    const matches = useMediaQuery('(min-width:1200px)');

    return (
        <>
            <Container className={classes.container} style={matches ? {} : {}}>
                <br></br>
                <p>¿Quieres publicar con nosotros? <a style={contextTheme.foreground === "#000000" ? {} : { color: contextTheme.details }} href='/info'>Es gratis</a></p>
                {/*<h3> #Novedades </h3>*/}

                {matches ? <>
                    <h1 style={{ padding: "0px", margin: "0" }}>Hola, mundo</h1>
                    <Box textAlign='center'>
                        <img src={HolaMundo1} /*width="335px" height="220px"*/ width={"70%"} style={{ paddingTop: "0px" }} alt="hola mundo" />

                    </Box>
                    {/*<p>Resumen: </p>*/}
                    <h1 style={{ textAlign: "justify", fontSize: "30px" }}>305 es un monitor en la tierra moderna. Su labor consiste en reparar las averías que ocurren en un importante sistema de entretenimiento futurista. Hasta que un día todo cambia.</h1>
                </> :
                    <>
                        <h1>Hola, mundo</h1>
                        <img src={HolaMundo1} /*width="335px" height="220px"*/ width={"100%"} style={{ paddingTop: "0px" }} alt="hola mundo" />
                        {/*<p>Resumen: </p>*/}
                        <p style={{ textAlign: "justify" }}>305 es un monitor en la tierra moderna. Su labor consiste en reparar las averías que ocurren en un importante sistema de entretenimiento futurista. Hasta que un día todo cambia.</p>

                    </>
                }

                <Box textAlign='center'>
                    <Button variant="contained" size="large" className={classes.button} onClick={() => { history.push("/tecno-topia") }}>
                        <strong style={{ backgroundColor: "#FFF227", fontWeight: "bold", color: "#012255", fontSize: "25px" }}>¡Iniciar lectura!</strong>
                    </Button>
                </Box>
                <Box textAlign='center'>
                    <p>Esta plataforma existe gracias al apoyo del &nbsp;
                        <a
                            style={contextTheme.foreground === "#000000" ? { transition: "all 0.50s linear" } : { color: contextTheme.details, transition: "all 0.50s linear", }} href='https://mcj.go.cr/' rel="noopener noreferrer" target="_blank">
                            Ministerio de Cultura y Juventud de Costa Rica</a>.
                    </p>
                    <>
                        {contextTheme.foreground === "#000000" ?
                            <>
                                <Button><img width="100%" src={ministerio1White} alt="ministerio logo 1" /></Button>
                                <Button><img width="100%" src={ministerio2White} alt="ministerio logo 2" /></Button>
                                <Button><img width="100%" src={ministerio3White} alt="ministerio logo 3" /></Button>
                                <Button><img width="100%" src={ministerio4White} alt="ministerio logo 4" /></Button>
                            </> : <>
                                <Button><img width="100%" src={ministerio1} alt="ministerio logo 1" /></Button>
                                <Button><img width="100%" src={ministerio2} alt="ministerio logo 2" /></Button>
                                <Button><img width="100%" src={ministerio3} alt="ministerio logo 3" /></Button>
                                <Button><img width="100%" src={ministerio4} alt="ministerio logo 4" /></Button>
                            </>}
                    </>
                </Box>
                <br></br>
            </Container>
        </>
    )
}

export default Home;