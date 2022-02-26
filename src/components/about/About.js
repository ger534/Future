import * as React from 'react';
import { Paper, Typography } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { ThemeContext } from '../../helpers/themeContext/themeContext';

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

export default function About(props) {

  //language
  //const { t } = useTranslation('common');

  const [contextTheme] = React.useContext(ThemeContext);
  const classes = useStyles(contextTheme);

  const fixedHeightPaper = clsx(classes.paper);

  return (
    <>
      <Grid >
        <br></br>
        <Typography color="primary" variant="h2" className={classes.title} style={{ textAlign: "center" }}>
          

        </Typography>
        <h1 style={{ textAlign: "center" }}> {`<Acerca del Autor/>`}</h1>

        <Paper className={fixedHeightPaper}>
          <Typography variant="subtitle1">
            <p>Nombre: Gabriel Espinoza Rojas</p>
            <p>Correo: tecnotopiacr@gmail.com</p>
            <p>Fecha de nacimiento: 19-06-1997</p>
            <p>nickname: ger534</p>
          </Typography>
        </Paper>

        <Paper className={fixedHeightPaper} style={{ textAlign: "justify" }}>
          <Grid item md={12}>
            <h2 style={{ fontSize: "40px", textAlign: "left" }}>Estudios académicos y artísticos</h2>
            <Typography variant="subtitle1">
              <p>Estudios generales: Kinder de la escuela 12 de marzo. Kinder y escuela Echandí Montero. Liceo de Ciudad Neily. Liceo Fernando Volio Jiménez.</p>
              <p>Educación superior: Licenciatura en Ingeniería en Computadores. Instituto Tecnológico de Costa Rica.</p>
              <p>Estudios en idiomas: Programa Fortalecimiento del Inglés CONARE-TEC Quince Niveles. Instituto Tecnológico de Costa Rica.</p>
              <p>Estudios artísticos: Talleres de escritura creativa. Pluma Independiente.</p>
            </Typography>
          </Grid>
        </Paper>

        <Paper className={fixedHeightPaper} style={{ textAlign: "justify", marginBottom: "0px" }}>
          <Grid item md={12}>
            <h2 style={{ fontSize: "40px", textAlign: "left" }}>Experiencia profesional y artística</h2>
            <Typography variant="subtitle1">
              <p>Desarrollador de Software en Empresa SA brindando servicios externos para Pulperia
                Centroamérica. Del 2018 al 2020.</p>
              <p>Desarrollador Web en Empresa LLC brindando servicios externos para Cerebritos.</p>
              <p>Coautor del libro “X035: Un relato con perfidia y otros cuentos”, publicado el año 2020.</p>
            </Typography>
          </Grid>
        </Paper>

      </Grid>
    </>
  );
}
