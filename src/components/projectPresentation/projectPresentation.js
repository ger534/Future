import * as React from 'react';
import { Paper, Typography } from '@material-ui/core';
//import { useTranslation } from 'react-i18next';

import cronogram from '../../assets/activities0.PNG'
import promotion from '../../assets/activities.PNG'

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { ThemeContext } from '../../helpers/themeContext/themeContext';

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
}));

export default function ProjectPresentation(props) {

    //language
    //const { t } = useTranslation('common');

    const [contextTheme] = React.useContext(ThemeContext);
    const classes = useStyles(contextTheme);

    const fixedHeightPaper = clsx(classes.paper);

    return (
        <>
            <Grid>
                <br></br>
                {/*<h1 style={{ textAlign: "center" }}> {`<${<strong>Tecno<sub style={{ fontSize: "50%" }}>TOPIA</sub></strong>}/>`} </h1>*/}
                <h1 style={{ textAlign: "center" }}> {`<Tecnotopía/>`}</h1>



                <Paper className={fixedHeightPaper} style={{ textAlign: "justify" }}>
                    <Grid item md={12}>
                        <h2 style={{ fontSize: "40px", textAlign: "left" }}>¿Cómo surge y qué pretende el proyecto?</h2>
                        <Typography variant="subtitle1">
                            <p><strong>Tecno<sub style={{ fontSize: "50%" }}>TOPIA</sub></strong> busca ser un espacio en la internet que permita albergar escritura costarricense de todo aquel autor que desee ser parte de esta biblioteca. Sin embargo, para cumplir esta meta se necesita primero contar con una plataforma electrónica pertinente e innovadora. El presente documento está limitado a la creación de la página web y la publicación de una obra literaria dentro del sitio. La obra será una ficción interactiva, aquella que permite al lector tomar decisiones que afectan el contenido de la trama y desenlace. Se hace esta selección pues va más allá de la literatura convencional escrita en papel. La tecnología web permite con facilidad narrar historias donde el receptor puede tomar un papel protagónico, escogiendo de forma periódica las acciones de los personajes.</p>
                            <p>Yo, Gabriel Espinoza Rojas, soy un escritor novel y me gano la vida trabajando con soluciones de <i>software</i>. Tengo las capacidades técnicas para crear los cimientos de <strong>Tecno<sub style={{ fontSize: "50%" }}>TOPIA</sub></strong>. También estoy escribiendo una novela que explora las posibilidades de alcanzar una utopía tecnología. Para esta etapa proyecto, tomé el mismo universo ficticio de mi novela para escribir la historia “Hola Mundo”, la que espero que inaugure la publicación de la página web en la red, si el proyecto es financiado. Actualmente, “Hola Mundo” es una historia lineal y no interactiva, sin embargo, puedo adaptarla a la interacción en una página web que he estado trabajando desde abril del presente año (disponible <a style={contextTheme.foreground === "#000000" ? {} : { color: contextTheme.details }} href="https://gabo534.web.app/" target="_blank" rel="noopener noreferrer">aquí</a>). Tengo la certeza de que puedo encargarme del desarrollo de historia y el desarrollo de la página web, pero me gustaría recibir apoyo externo pues me es difícil cubrir todos los gatos por mi cuenta, considerando que es un proyecto sin fines de lucro.</p>
                            <p>Hasta el momento, yo he trabajado en <strong>Tecno<sub style={{ fontSize: "50%" }}>TOPIA</sub></strong> utilizando herramientas gratuitas y dependiendo únicamente de mi conocimiento, sin embargo, antes de pensar en abrir la plataforma al público, es importante realizar una inversión monetaria. Es necesario contratar una casa editorial para revisar la historia “Hola Mundo”. También me gustaría poder comprar mejores herramientas de <i>software</i> para reducir los tiempos de respuesta y aumentar el rendimiento general de la página web. Y, por último, me parece vital contar con el apoyo de ilustraciones profesionales que capten a nivel visual la naturaleza del proyecto y mejorar la experiencia de usuario. <strong>Tecno<sub style={{ fontSize: "50%" }}>TOPIA</sub></strong> tiene potencial para ser una nueva forma de disfrutar la literatura interactiva, pero es y será un proyecto en desarrollo hasta que se invierta una cantidad sustancial de dinero, tanto en aspectos técnicos como artísticos y una campaña publicitaria.</p>
                        </Typography>
                    </Grid>
                </Paper>

                <Paper className={fixedHeightPaper} style={{ textAlign: "justify" }}>
                    <Grid item md={12}>
                        <h2 style={{ fontSize: "40px", textAlign: "left" }}>Objetivos</h2>
                        <Typography variant="subtitle1">
                            <ul>
                                <li><h3>Objetivo General</h3></li>
                                <p>Crear una plataforma electrónica para publicar una obra literaria del género "ficción interactiva".</p>
                                <li><h3>Objetivos Específicos</h3></li>
                                <ul>
                                    <li>Editar la obra literaria "Hola Mundo", escrita por Gabriel Espinoza Rojas.  </li>
                                    <li>Diseñar una página web para otorgar a “Hola Mundo” habilidades interactivas que le permitan al lector decidir el rumbo de la historia. </li>
                                    <li>Publicar la literatura interactiva en el dominio www.tecno-topia.com.</li>
                                </ul>
                            </ul>
                        </Typography>
                    </Grid>
                </Paper>

                <Paper className={fixedHeightPaper} style={{ textAlign: "justify" }}>
                    <Grid item md={12}>
                        <h2 style={{ fontSize: "40px", textAlign: "left" }}>Metas</h2>
                        <Typography variant="subtitle1">
                            <p>La meta inmediata es llamar la atención del público costarricense y fomentar la lectura con una historia dinámica y en un entorno virtual agradable, interactivo e intuitivo para grandes y chicos. A nivel personal, he integrado conceptos básicos de ingeniería en el relato ficticio y creo que pueden ser útiles para adolescentes o jóvenes que aún no saben que profesión les gustaría ejercer en el futuro. También he conversado con colegas sobre el proyecto y varios escritores me han mencionado que les gustaría algún día realizar una colaboración con conmigo para publicar contenido también. Esta es sin duda la meta a largo plazo que me gustaría alcanzar. </p>
                            <p>El internet está vivo y crece todos los días, de la misma manera, <strong>Tecno<sub style={{ fontSize: "50%" }}>TOPIA</sub></strong> puede cobrar vida y seguir creciendo en el futuro. Los recursos técnicos y las ilustraciones que podría comprar con el financiamiento no se limitan para la publicación de “Hola Mundo”, el género de "ficción interactiva" o el plazo para ejecutar este proyecto. La página web podrá ser expandida siempre que se desee, dándole potencial para volverse un repositorio virtual de literatura que, a diferencia de blogs comerciales o redes sociales, puede modificarse a completa voluntad de los autores para albergar distintos estilos de narrativa, presentaciones o incluso contenido educativo. </p>
                        </Typography>
                    </Grid>
                </Paper>

                <Paper className={fixedHeightPaper} style={{ textAlign: "justify" }}>
                    <Grid item md={12}>
                        <h2 style={{ fontSize: "40px", textAlign: "left" }}>Producto final</h2>
                        <Typography variant="subtitle1">
                            <p>Un sitio web público bajo el dominio www.tecno-topia.com que sea funcional para computadoras de escritorio, portátiles, tabletas y teléfonos celulares. En dicho sitio, los visitantes podrán leer una historia de ficción interactiva, la cual ofrecerá múltiples finales que serán desbloqueados según de las decisiones del lector. Adicionalmente, también habrá contenido sobre el proyecto <strong>Tecno<sub style={{ fontSize: "50%" }}>TOPIA</sub></strong> y personajes de la obra.</p>
                        </Typography>
                    </Grid>
                </Paper>

                <Paper className={fixedHeightPaper} style={{ textAlign: "justify" }}>
                    <h2 style={{ fontSize: "40px", textAlign: "left" }}>Población beneficiaria</h2>
                    <Typography variant="subtitle1">
                        <p>Cualquier persona de habla hispana y con acceso a una computadora o un teléfono e internet podría acceder de forma gratuita a la aplicación web. Y la lectura interactiva busca lograr llamar la atención de incluso lectores casuales. </p>
                    </Typography>

                </Paper>


                <Paper className={fixedHeightPaper} style={{ textAlign: "justify" }}>
                    <Grid item md={12}>
                        <h2 style={{ fontSize: "40px", textAlign: "left" }}>Localización geográfica</h2>
                        <Typography variant="subtitle1">
                            <p>La página web asociada a la obra no tiene limitaciones geográficas, por lo que también otorga al proyecto un alcance global. Sin embargo, parte de la campaña publicitaria estará enfocada en suelo costarricense, ya sea mediante entrevistas con entidades nacionales o participando en ferias o eventos en la GAM.</p>
                        </Typography>
                        <div id="CRMap" style={{ textAlign: "center" }}>
                            <iframe
                                title="map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4042248.3370993123!2d-87.05319745901839!3d8.351568335729798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f92e56221acc925%3A0x6254f72535819a2b!2sCosta%20Rica!5e0!3m2!1ses-419!2scr!4v1626494420314!5m2!1ses-419!2scr&output=embed"
                                width="400"
                                height="350"
                                //style="border:0;" 
                                loading="lazy"
                            ></iframe>
                        </div>
                    </Grid>
                </Paper>

                <Paper className={fixedHeightPaper} style={{ textAlign: "justify" }}>
                    <Grid item md={12}>
                        <h2 style={{ fontSize: "40px", textAlign: "left" }}>Cronograma de ejecución.</h2>
                        <Typography variant="subtitle1">
                            <p>La Tabla 1 muestra el cronograma propuesto para la ejecución del proyecto. Considera tareas de edición del texto, desarrollo web, ilustración de personajes e ilustraciones para promocionar el sitio, la publicación de la plataforma electrónica y la revisión de la experiencia de usuario (UX) y usabilidad de la herramienta. Cada uno de estos tiempos han sido calendarizados luego de estipularlos con las contrapartes involucradas (la casa editorial, los ilustradores y la diseñadora UX).</p>
                        </Typography>
                        {/*<iframe
                            title="activities"
                            src="https://docs.google.com/spreadsheets/d/175VCP3NSsSOep3y37BR-wGyTHQ30w7KSgqHCdcZkHx0/edit?usp=sharing"
                            width="100%"
                            height="450"
                            //style="border:0;" 
                            loading="lazy"
                        ></iframe>*/}
                        <img src={cronogram} alt="cronogram" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} /* , width: "50%" width="168" height="256"*/ />
                    </Grid>
                </Paper>


                <Paper className={fixedHeightPaper} style={{ textAlign: "justify", marginBottom: "0px" }}>
                    <Grid item md={12}>
                        <h2 style={{ fontSize: "40px", textAlign: "left" }}>Promoción y difusión de las actividades.</h2>
                        <Typography variant="subtitle1">
                            <p>La Tabla 2 muestra el cronograma propuesto para las actividades de promoción y difusión del proyecto. Considera una presentación de la plataforma electrónica para la Biblioteca Pública de Tres Ríos. También se toma en cuenta la participación en la Feria Hecho Aquí 2021 (FHA201). Es importante aclarar que para esta feria me he postulado con mis coautores del libro “X035: Un relato con perfidia y otros cuentos” y nuestra participación no es definitiva, pero de serlo, podría ser una oportunidad para entregar contenido promocional sobre <strong>Tecno<sub style={{ fontSize: "50%" }}>TOPIA</sub></strong> y darle visibilidad a la plataforma. Este cronograma también considera la publicidad que se haría en redes sociales, con un alcance diario estimado de cuarenta mil personas y la impresión de cuatrocientos marcapáginas o separadores de libros con información sobre el proyecto y como acceder al sitio web.</p>
                            <p style={{ fontSize: "14px" }}><strong>Nota:</strong> La Biblioteca Pública de Cartago también está anuente a prestar un espacio para presentar el proyecto, sin embargo, no fue posible definir una fecha tentativa debido a que por el momento <strong>Tecno<sub style={{ fontSize: "50%" }}>TOPIA</sub></strong> es solo una propuesta y no un proyecto avalado.</p>
                        </Typography>
                        {/*<iframe
                            title="activities"
                            src="https://docs.google.com/spreadsheets/d/1KtO_JII-Jf8aDU1a7wQsLP6Tnf0xe8xDYIBXH1IQiac/edit?usp=sharing"
                            width="100%"
                            height="350"
                            //style="border:0;" 
                            loading="lazy"
                        ></iframe>*/}
                        <img src={promotion} alt="promotion" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} /*width="168" height="256"*/ />
                    </Grid>
                </Paper>

                {/*<Paper className={fixedHeightPaper} style={{ textAlign: "justify" }}>
                    <Grid item md={12}>
                        <Typography color="primary" component="p" variant="h3" className={classes.h3}>
                            Presupuesto
                        </Typography>
                        <Typography variant="subtitle1">
                            <p>Como fue establecido al inicio del presente documento, el ejecutor del proyecto es capaz de brindar servicios profesionales como Ingeniero en Computadores para cubrir todos los aspectos técnicos de la construcción, desarrollo y publicación de sitio web. En cuanto gastos monetarios en este apartado, solo se necesita comprar el dominio www.tecno-topia.com y contratar los servicios necesarios para el alojamiento de la página en la internet. Bajo este mismo apartado también se podría considerar la compra de un dispositivo portátil de <i>hardware</i> con acceso a datos móviles y una pantalla grande (10.4 pulgadas) que permita presentar la plataforma en ferias o eventos relacionados a literatura.</p>
                            <p>Posteriormente, gran parte del financiamiento, de ser recibido, estaría dirigido a la edición del contenido literario, la implementación de una imagen profesional y la creación de un diseño fácil de utilizar. La corrección gramatical estaría a cargo de la casa editorial Círculo y Punto, quienes también se realizaron la publicación del libro “X035: Un relato con perfidia y otros cuentos”. La Ingeniera en Diseño Industrial, Rebeca Madriz Romero, se haría cargo de la experiencia de usuario (UX), un apartado importante busca optimizar la usabilidad de la plataforma para que sea accesible e intuitiva para los usuarios del sitio. </p>
                            <p>Para el apartado estético, se contactarían múltiples ilustradores con un portafolio alineado al estilo <i>Cyberpunk</i> para diseñar un logotipo, un <i>banner</i> y representaciones visuales para los seis personajes principales de la historia. Para la publicidad, se contaría con el apoyo del proveedor de servicios publicitarios SEPROGO para realizar una campaña de anuncios en redes sociales y se contraría la Imprenta Editorial Lara Segura para realizar separadores de libros que serían luego repartidos en eventos pertinentes, difundiendo así la plataforma. </p>
                            <p style={{ fontSize: "14px" }}><strong>Nota:</strong> El cálculo del desarrollo web se hace considerando el trabajo que se ha realizado desde abril del presente año hasta la fecha final para ejecutar el proyecto, con una jornada laboral promedio de siete horas semanales. El código fuente de la aplicación puede encontrarse en los repositorios de código: <a href="https://github.com/ger534/Future" target="_blank" rel="noopener noreferrer">página web</a> e <a href="https://github.com/ger534/FutureApi" target="_blank" rel="noopener noreferrer">interfaz de servicios</a>.</p>

                            <table style={{ textAlign: "left", width: "100%" }}>
                                <thead>
                                    <tr>
                                        <th>Rubro</th>
                                        <th style={{ textAlign: "right" }}>Monto</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Desarrollo web</td>
                                        <td style={{ textAlign: "right" }}>₡ 1,260,000</td>
                                    </tr>
                                    <tr>
                                        <td>Dominio, alojamiento web y <i>hardware</i></td>
                                        <td style={{ textAlign: "right" }}>₡ 385,000</td>
                                    </tr>
                                    <tr>
                                        <td>Experiencia de usuario</td>
                                        <td style={{ textAlign: "right" }}>₡ 210,000</td>
                                    </tr>
                                    <tr>
                                        <td>Ilustraciones</td>
                                        <td style={{ textAlign: "right" }}>₡ 200,000</td>
                                    </tr>
                                    <tr>
                                        <td>Publicidad e imprenta</td>
                                        <td style={{ textAlign: "right" }}>₡ 165,000</td>
                                    </tr>
                                    <tr>
                                        <td>Dominio, alojamiento web y <i>hardware</i></td>
                                        <td style={{ textAlign: "right" }}>₡ 385,000</td>
                                    </tr>
                                    <tr>
                                        <td>Subtotal</td>
                                        <td style={{ textAlign: "right" }}>₡ 2,260,000</td>
                                    </tr>
                                    <tr>
                                        <td>Recursos aportados por el ejecutor</td>
                                        <td style={{ textAlign: "right" }}>- ₡ 1,260,000</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Total</strong></td>
                                        <td style={{ textAlign: "right" }}><strong>₡ 1,000,000 </strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </Typography>
                    </Grid>
                </Paper>*/}
            </Grid>
        </>
    );
}
