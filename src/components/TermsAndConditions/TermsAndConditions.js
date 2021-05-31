import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import { flags } from '../../flags'

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../Themes"
import  {useDarkMode} from "../useDarkMode"
import { TermsAndConditionsText } from './TermsAndConditionsText'

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
    //backgroundColor: "blue"
    
  },
  fixedHeight: {
    height: 240,
    width: "100%"
  },
}));

export default function TermsAndConditions() {

  const classes = useStyles();

  //language
  const { t } = useTranslation('common');

  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  //console.log(TermsAndConditionsText)

  return (
      <Grid container spacing={3}>
        <div style={{whiteSpace: "pre-wrap"}}>{TermsAndConditionsText}</div>
        <Paper className={fixedHeightPaper}>
          <Grid item md={12}>
            <Typography color="primary" component="p" variant="h3">
              {t('about.Q1')}
            </Typography>
            <Typography component="p" variant="subtitle1">

              {TermsAndConditionsText}

          </Typography>
          </Grid>
        </Paper>

      </Grid>

  );
}