import React from 'react';
//import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';

/* intellectual property */
import { ThemeContext } from '../../contexts/theme-context';


//import GoogleMapReact from 'google-map-react';

/*
import X035 from '../../assets/X035.png'
import tecnotopia_white from '../../assets/tecnotopia_white.png'
import tecnotopia_black from '../../assets/tecnotopia_black.png'
import tecnotopia_black_v2 from '../../assets/tecnotopia_black_v2.png'
*/

/*const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};*/

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

function Home(props) {

    /*const map = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };*/


    const [contextTheme] = React.useContext(ThemeContext);
    const classes = useStyles(contextTheme);
    const fixedHeightPaper = clsx(classes.paper);

    /*var items = [
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
    ]*/

    return (
        <>
            {/*<Carousel>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>*/}


            {/*<div style={{ height: '50vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={map.center}
                    defaultZoom={map.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
        </GoogleMapReact></div>*/}

            <Grid >

                <Typography color="primary" variant="h2" className={classes.title} style={{ textAlign: "center" }}>
                    <strong> Tecno<sub style={{ fontSize: "50%" }}>TOPIA</sub> </strong>

                </Typography>

                <Paper className={fixedHeightPaper}>
                    <Grid item md={12}>
                        <Typography color="primary" component="p" variant="h3" className={classes.h3}>
                            ¿Cómo surge y qué pretende el proyecto?
                        </Typography>
                        <Typography variant="subtitle1">
                            <p>El proyecto <strong>Tecno<sub style={{ fontSize: "50%" }}>TOPIA</sub></strong> surge luego de escribir y publicar un libro en conjunto con cinco escritores nacionales como coautores.
                            El libro, llamado "X035", fue un experimento literario fundamentado en conceptos descritos por Milán Kundera
                            en su obra "Los testamentos traicionados". A partir de mi experiencia como escritor nóvel, surgió en mí un
                            deseo comandar un nuevo experimento en el departamento artístico de la literatura.
                            Sumado a esto, recientemente finalicé mi licenciatura en Ingeniería en Computadores, en el Instituto Tecnológico
                            de Costa Rica. Con mi deseo acerca de explorar nuevos métodos de escritura y mi conocimiento en el mundo de la
                            electrónica y computación, deseo acercar a los lectores costarricenses a una forma distinta de comunicación:
                            lenguajes de programación. Quiero crear y distribuir relatos que utilicen conceptos informáticos, predicciones 
                            razonables sobre el futuro y carismáticos personajes que atrapen a los lectores con tramas que implicitamente les 
                            eduquen de conceptos sencillos y comúnmente utilizados al programar en lenguajes computacionales.</p>
                        </Typography>
                    </Grid>
                </Paper>

                <Paper className={fixedHeightPaper}>
                    <Grid item md={12}>
                        <Typography color="primary" component="p" variant="h3" className={classes.h3}>
                            Objetivos
                        </Typography>
                        <Typography variant="subtitle1">
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
                        <Typography color="primary" component="p" variant="h3" className={classes.h3}>
                            Metas
                        </Typography>
                        <Typography component="p" variant="subtitle1">
                            Escribir, editar y publicar una novela en formato físico y virtual. La publicación en físico por medio 
                            de <a href = "https://www.amazon.com/">Amazon</a> y la publicación virtual creando una página web 
                            donde además del libro en formato HTML, habrá contenido adicional a la obra y material educativo.
                            Las metas de ambas herramientas son similares, en sintesis, las dos buscan entretener y educar, pero 
                            cada una tiene su propio enfoque. El libro físico convencional está orientado a los lectores tradicionales 
                            que disfrutan novelas de ciencia ficción, misterio, la exploración de la consciencia humana mediante la literatura
                            y pasar un momento agradable leyendo. En comparación, la página web busca extender la experiencia educativa que el libro posee
                            sobre conceptos de ingeniería electrónica y computacional. En esencia, ambas publicaciones contarán la historia de 
                            sucesos que ocurren en un futuro ficticio donde la tecnología es tan avanzada que parece magia. A su vez, esta narrativa
                            será interruptida por conceptos reales y necesarios para el uso y confección de tecnología en la actualidad y que de alguna 
                            manera podrían ser las bases del porvenir. Así, 
                            según el lector lo desee, puede concentarse en la trama que se revela de manera episódica o en los criterios 
                            ingeniriles. Y finalmente, el lector podrá reflexionar sobre hacia donde puede dirigir el futuro la tecnología a 
                            a vez que obtener visibilidad sobre conceptos básicos de la informática que puedan alentarlo a involucrar la 
                            programación en sus propias áreas de desarrollo o al menos brindarle un panorama más amplio sobre el comportamiento 
                            de dispositivos inteligentes como computadores o telefonos celulares.
                        </Typography>
                    </Grid>
                </Paper>

                <Paper className={fixedHeightPaper}>
                    <Grid item md={12}>
                        <Typography color="primary" component="p" variant="h3" className={classes.h3}>
                            Cronograma de ejecución
                        </Typography>
                        <Typography variant="subtitle1">
                            <table style={{ textAlign: "left", width: "100%" }}>
                                <thead>
                                    <tr>
                                        <th>Tarea</th>
                                        <th>Fecha</th>
                                    </tr>
                                </thead>
                                <tbody>
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
                                </tbody>
                            </table>
                        </Typography>
                    </Grid>
                </Paper>

                <Paper className={fixedHeightPaper}>

                        <Typography color="primary" component="p" variant="h3" className={classes.h3}>
                            Población beneficiaria
                        </Typography>
                        <Typography component="p" variant="subtitle1">
                            El avance tecnológico del siglo XXI aumenta y seguirá aumentando de forma exponencial. 
                            Cada día se vuelve más normal vernos envueltos entre dispositivos tecnológicos.
                            Sin embargo, para la mente humana, la sobrecarga de información técnica sobre 
                            el funcionamiento de tantas invenciones es abrumadora, por lo cual es común que 
                            muchas personas se limiten a mirar de lejos, o utilizar ciegamente los aparatos electrónicos 
                            o virtuales a su disposición. Para estas personas, el libro busca darles pequeñas pinceladas sobre 
                            conceptos variados sobre la informática y electrónica, además de aplicarlos en las tramas y 
                            subtramas de la narrativa. Este propósito también puede dirigirse hacia las mentes jóvenes 
                            que aún están considerando cuál camino profesional tomar y desean conocer un poco sobre la 
                            programación. Por otro lado, la historia principal y todas sus ramificaciones trascienden 
                            lo académico en sobremanera, tomando más un perfil de ciencia ficción, futurista y novelesco. 
                            Por lo cual, incluso lectores experimentados en la ingeniería de la actualidad pueden dejarse
                             llevar por su imaginación en una obra literaria que trata sobre la existencia humana donde la 
                             tecnología no conoce límites.

                        </Typography>
                  
                </Paper>


                <Paper className={fixedHeightPaper}>
                    <Grid item md={12}>
                        <Typography color="primary" component="p" variant="h3" className={classes.h3}>
                            Localización geográfica
                        </Typography>
                        <Typography component="p" variant="subtitle1">
                            La impresión física del libro será realizada en Costa Rica, sin embargo, también se publicará Amazon, una plataforma mundial que permitirá distribuirlo internacionalmente. De la misma manera, la página web asociada a la obra, no tiene limitaciones geográficas, por lo que también otorga al proyecto un alcance global.
                        </Typography>
                        <div id="CRMap" style={{textAlign:"center"}}>
                        <iframe
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4042248.3370993123!2d-87.05319745901839!3d8.351568335729798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f92e56221acc925%3A0x6254f72535819a2b!2sCosta%20Rica!5e0!3m2!1ses-419!2scr!4v1626494420314!5m2!1ses-419!2scr"
                            width="400"
                            height="350"
                            //style="border:0;" 
                            loading="lazy"
                        ></iframe>
                        </div>
                    </Grid>
                </Paper>

                <Paper className={fixedHeightPaper}>
                    <Grid item md={12}>
                        <Typography color="primary" component="p" variant="h3" className={classes.h3}>
                            Promoción y difusión de las actividades
                        </Typography>
                        <Typography variant="subtitle1">
                            <table style={{ textAlign: "left", width: "100%" }}>
                                <thead>
                                    <tr>
                                        <th>Mes</th>
                                        <th>Actividad</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Marzo 2022</td>
                                        <td>Biblioteca Juan Viña WIP</td>
                                    </tr>
                                    <tr>
                                        <td>Noviembre 2022</td>
                                        <td>Biblioteca de Tres Tríos WIP</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Typography>
                    </Grid>
                </Paper>

                <Paper className={fixedHeightPaper}>
                    <Grid item md={12}>
                        <Typography color="primary" component="p" variant="h3" className={classes.h3}>
                            Presupuesto
                        </Typography>
                        <Typography variant="subtitle1">
                            <table style={{ textAlign: "left", width: "100%" }}>
                                <thead>
                                    <tr>
                                        <th>Rubro</th>
                                        <th>Monto</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Amazon</td>
                                        <td>Preguntar a Sorem</td>
                                    </tr>
                                    <tr>
                                        <td>Editorial</td>
                                        <td>Preguntar a Sorem</td>
                                    </tr>
                                    <tr>
                                        <td>Tablet para ilustraciones</td>
                                        <td>WIP</td>
                                    </tr>
                                    <tr>
                                        <td>Diseñador web</td>
                                        <td>WIP</td>
                                    </tr>
                                    <tr>
                                        <td>Desarrollador web</td>
                                        <td>Por mi cuenta</td>
                                    </tr>
                                    {/*<tr>
                                    <td>Imprenta Editorial</td>
                                    <td>Preguntar a Daniel Lara Segura</td>
                                </tr>*/}
                                </tbody>
                            </table>
                        </Typography>
                    </Grid>
                </Paper>
            </Grid>
        </>
    )
}

export default Home;

/*function Item(props) {
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            {props.item.img}

        </Paper>
    )
}*/