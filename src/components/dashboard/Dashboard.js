import * as React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from './auxilars/Chart';
import Update from './auxilars/Update';
import Cases from './auxilars/Cases';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {

  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Grid container spacing={3}>
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={fixedHeightPaper}>
          <Chart />
        </Paper>
      </Grid>
      {/* Last Update */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper}>
          <Update />
        </Paper>
      </Grid>
      {/* Cases */}
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Cases />
        </Paper>
      </Grid>
    </Grid>

  );
}