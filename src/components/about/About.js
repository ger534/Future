import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import { flags } from '../../flags' 

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
  },
  fixedHeight: {
    height: 240,
    width: "100%"
  },
}));

export default function About() {

  const classes = useStyles();

  //language
  const { t } = useTranslation('common');


  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (

    <Grid container spacing={3}>
      <Paper className={fixedHeightPaper}>
        <Grid item md={12}>
          <Typography color="primary" component="p" variant="h3">
            {t('about.Q1')}
          </Typography>
          <Typography component="p" variant="subtitle1">
            
            {t('about.AnswerQ1')} <a href={flags().moreAboutCovid}>{t('about.Q1')}</a>.
          </Typography>
        </Grid>
      </Paper>
      
      <Paper className={fixedHeightPaper}>
        <Grid item md={12}>
          <Typography color="primary" component="p" variant="h3">
            {t('about.Q2')}
          </Typography>
          <Typography component="p" variant="subtitle1">
            {t('about.AnswerQ2')} <a href={flags().moreAboutCliniserve}>{t('about.Q2')}</a>.
          </Typography>
        </Grid>
      </Paper>
      
      <Paper className={fixedHeightPaper}>
        <Grid item md={12}>
          <Typography color="primary" component="p" variant="h3">
            {t('about.Q3')}
          </Typography>
          <Typography component="p" variant="subtitle1">
            {t('about.AnswerQ3')} <a href={flags().moreAboutCliniserveTest}>{t('about.Q3')}</a>.
          </Typography>
        </Grid>
      </Paper>

    </Grid>


  );
}