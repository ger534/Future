import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';

import X035 from '../../assets/X035.png'
import tecnotopia_white from '../../assets/tecnotopia_white.png'
import tecnotopia_black from '../../assets/tecnotopia_black.png'
import tecnotopia_black_v2 from '../../assets/tecnotopia_black_v2.png'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
    },
    title: {
        flexGrow: 1,
    },
    container: {
        display: 'block',
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        display: 'block',
        padding: theme.spacing(2),
        overflow: 'auto',
        flexDirection: 'column',
        margin: "1%"
    },
    fixedHeight: {
        height: 240,
        width: "100%"
    },
}));

function Home(props) {

    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper);

    var items = [
        {
            name: "Futuro",
            img: <img src={X035} alt="X035" width="168" height="256" />,
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "X035",
            img: <img src={tecnotopia_black_v2} alt="tecnotopia_black_v2" width="246" height="78" />,
            description: "Hello World!"
        },
        {
            name: "Acerca de este sitio",
            img: <img src={tecnotopia_black} alt="tecnotopia_black" width="246" height="78" />,
            description: "Stil testing"
        }
    ]

    return (
        <>
            {/*<Carousel>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>*/}


            <Grid container spacing={3} direction="column">
                <Typography color="primary" component="p" variant="h3">
                    <h1 style={{ margin: "auto", textAlign: "center", padding: "5%", paddingTop: "3%", paddingBottom: "9%" }}>Tecno<sub style={{ fontSize: "50%" }}>TOPIA</sub></h1>
                </Typography>

                <Paper className={fixedHeightPaper}>
                    <Grid item md={12}>
                        <Typography color="primary" component="p" variant="h3">
                            ¿Cómo surge y qué pretende el proyecto?
                        </Typography>
                        <Typography component="p" variant="subtitle1">
                            <p>El proyecto surge luego de finalizar un proyecto literario en conjunto con otros cinco escritores nacionales. Este proyecto, llamado “X035” fue en sí mismo un experimento literario fundamentado en escritos de Milán Kundera en su libro XXX. A partir de mi colaboración en un proyecto innovador, surgió en mí un deseo de participar o confeccionar (accionar) nuevos experimentos en el departamento artístico de la literatura. Sumado a esto, recientemente finalicé mi licenciatura en Ingeniería en Computadores, en el Instituto Tecnológico de Costa Rica. Con mi deseo acerca de explorar nuevos métodos de escritura y mi conocimiento en el mundo de la electrónica y computación, deseo acercar a los lectores costarricenses a una forma distinta de comunicación: lenguajes de programación.
                                <br />
                                Quiero crear y distribuir relatos que utilicen conceptos informáticos, predicciones razonables sobre el futuro y carismáticos personajes que atrapen a los lectores con tramas que implicitamente les eduquen de conceptos sencillos y comúnmente utilizados al programar en lenguajes computacionales.
                            </p>
                        </Typography>
                    </Grid>
                </Paper>

                <Paper className={fixedHeightPaper}>
                    <Grid item md={12}>
                        <Typography color="primary" component="p" variant="h3">
                            Objetivos
                        </Typography>
                        <Typography component="p" variant="subtitle1">
                            <ul>
                                <li><h3>Objetivo General</h3></li>
                                <p>Elaborar una obra literaria en forma de capítulos, en formato físico y virtual, que eduque al público general sobre conceptos de programación a la vez que explore posibles innovaciones tecnológicas en el futuro. </p>
                                <li><h3>Objetivos Específicos</h3></li>
                                <ul>
                                    <li>Componer múltiples relatos que traten distintos aspectos del posible desarrollo tecnológico en el futuro y sus usos en la sociedad. </li>
                                    <li>Involucrar conceptos básicos de programación y diseño de circuitos electrónicos en la trama principal y en las tramas secundarias de la obra. </li>
                                    <li>Implementar una metodología virtual para desplegar el producto terminado.</li>
                                </ul>
                            </ul>
                        </Typography>
                    </Grid>
                </Paper>

                <Paper className={fixedHeightPaper}>
                    <Grid item md={12}>
                        <Typography color="primary" component="p" variant="h3">
                            Metas
                        </Typography>
                        <Typography component="p" variant="subtitle1">
                            <p>Producir una forma literaria en formato físico como una novela y en formato virtual como una página web, que involucre conceptos de software y hardware y esté ambientada en el futuro.
                                <br />
                                Crear visibilidad sobre conceptos básicos de la informática que puedan educar a la población general a la vez que motivar a jóvenes a entender
                            </p>
                        </Typography>
                    </Grid>
                </Paper>

                <Paper className={fixedHeightPaper}>
                    <Grid item md={12}>
                        <Typography color="primary" component="p" variant="h3">
                            Cronograma de ejecución
                        </Typography>
                        <Typography component="p" variant="subtitle1">
                            <table style={{ textAlign: "left", width: "100%" }}>
                                <tr>
                                    <th>Tarea</th>
                                    <th>Fecha</th>
                                </tr>
                                <tr>
                                    <td>Capítulo 1</td>
                                    <td>01/06/2021</td>
                                </tr>
                                <tr>
                                    <td>Capítulo 2</td>
                                    <td>01/07/2021</td>
                                </tr>
                                <tr>
                                    <td>Capítulo 3</td>
                                    <td>01/08/2021</td>
                                </tr>
                                <tr>
                                    <td>Capítulo 4</td>
                                    <td>01/09/2021</td>
                                </tr>
                                <tr>
                                    <td>Capítulo 5</td>
                                    <td>01/10/2021</td>
                                </tr>
                                <tr>
                                    <td>Capítulo 6</td>
                                    <td>01/11/2021</td>
                                </tr>
                                <tr>
                                    <td>Capítulo 7</td>
                                    <td>01/12/2021</td>
                                </tr>
                                <tr>
                                    <td>Capítulo 8</td>
                                    <td>01/01/2022</td>
                                </tr>
                                <tr>
                                    <td>Capítulo 9</td>
                                    <td>01/02/2022</td>
                                </tr>
                            </table>
                        </Typography>
                    </Grid>
                </Paper>

                <Paper className={fixedHeightPaper}>
                    <Grid item md={12}>
                        <Typography color="primary" component="p" variant="h3">
                            Población beneficiaria
                        </Typography>
                        <Typography component="p" variant="subtitle1">
                            El avance tecnológico del siglo XXI aumenta y seguirá aumentando de forma exponencial. Cada día se vuelve más normal vernos envueltos entre dispositivos tecnológicos.
                            Sin embargo, para la mente humana, la sobrecarga de información técnica sobre el funcionamiento de tantas invenciones es abrumadora, por lo cual es común que muchas personas se limiten a mirar de lejos, o utilizar ciegamente los aparatos electrónicos o virtuales a su disposición. Para estas personas, el libro busca darles pequeñas pinceladas sobre conceptos variados sobre la informática y electrónica, además de aplicarlos en las tramas y subtramas de la narrativa. Este propósito también puede dirigirse hacia las mentes jóvenes que aún están considerando cuál camino profesional tomar y desean conocer un poco sobre la programación. Por otro lado, la historia principal y todas sus ramificaciones trascienden lo académico en sobremanera, tomando más un perfil de ciencia ficción, futurista y novelesco. Por lo cual, incluso lectores experimentados en la ingeniería de la actualidad pueden dejarse llevar por su imaginación en una obra literaria que trata sobre la existencia humana donde la tecnología no conoce límites.

                        </Typography>
                    </Grid>
                </Paper>

                <Paper className={fixedHeightPaper}>
                    <Grid item md={12}>
                        <Typography color="primary" component="p" variant="h3">
                            Localización geográfica
                        </Typography>
                        <Typography component="p" variant="subtitle1">
                            La impresión física del libro será realizada en Costa Rica, sin embargo, también se publicará Amazon, una plataforma mundial que permitirá distribuirlo internacionalmente. De la misma manera, la página web asociada a la obra, no tiene limitaciones geográficas, por lo que también otorga al proyecto un alcance global.
                        </Typography>
                    </Grid>
                </Paper>

                <Paper className={fixedHeightPaper}>
                    <Grid item md={12}>
                        <Typography color="primary" component="p" variant="h3">
                            Promoción y difusión de las actividades
                        </Typography>
                        <Typography component="p" variant="subtitle1">
                            <table style={{ textAlign: "left", width: "100%" }}>
                                <tr>
                                    <th>Mes</th>
                                    <th>Actividad</th>
                                </tr>
                                <tr>
                                    <td>Marzo 2022</td>
                                    <td>Biblioteca Juan Viña WIP</td>
                                </tr>
                                <tr>
                                    <td>Noviembre 2022</td>
                                    <td>Biblioteca de Tres Tríos WIP</td>
                                </tr>
                            </table>
                        </Typography>
                    </Grid>
                </Paper>

                <Paper className={fixedHeightPaper}>
                    <Grid item md={12}>
                        <Typography color="primary" component="p" variant="h3">
                            Presupuesto
                        </Typography>
                        <Typography component="p" variant="subtitle1">
                            <table style={{ textAlign: "left", width: "100%" }}>
                                <tr>
                                    <th>Rubro</th>
                                    <th>Monto</th>
                                </tr>
                                <tr>
                                    <td>Amazon</td>
                                    <td>Preguntar a Sorem</td>
                                </tr>
                                <tr>
                                    <td>Editorial</td>
                                    <td>Preguntar a Sorem</td>
                                </tr>
                                <tr>
                                    <td>Ilustraciones</td>
                                    <td>WIP</td>
                                </tr>
                                <tr>
                                    <td>Diseñador web</td>
                                    <td>WIP</td>
                                </tr>
                                <tr>
                                    <td>Desarrollador web</td>
                                    <td>WIP</td>
                                </tr>
                                <tr>
                                    <td>Imprenta Editorial</td>
                                    <td>Preguntar a Daniel Lara Segura</td>
                                </tr>
                            </table>
                        </Typography>
                    </Grid>
                </Paper>
            </Grid>
        </>
    )
}
export default Home;

function Item(props) {
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            {props.item.img}

            {/*<Button className="CheckButton">
                Check it out!
            </Button>*/}
        </Paper>
    )
}