import * as React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import { getData } from '../../../api/data';
import { flags } from '../../../flags'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

function preventDefault() {
  window.location(flags().api_doc)
}

const useStyles = makeStyles((theme) => ({

  container: {
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

export default function Update() {

  //language
  const { t } = useTranslation('common');
  const [updateDate, setupdateDate] = useState('');
  const classes = useStyles();

  //fetch data
  useEffect(() => getData(t).then(res => {
    setupdateDate(res.data);
    return () => {
      setupdateDate(undefined) 
    };
  }).catch(e => {
    setupdateDate('')
  }), []);  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <React.Fragment>
      <div style={{textAlign: 'center'}}>
        <Title className={clsx(classes.container)}>{t('dashboard.update.title')}</Title>
        {updateDate !== '' && <Typography component="p" variant="h4">
          {updateDate.meta["lastUpdate"].toString().slice(0, -14)}
        </Typography>}
        <div>
          <Link color="primary" href={'https://api.corona-zahlen.org/docs/'} onClick={preventDefault}>
            {t('dashboard.update.more')}
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}
