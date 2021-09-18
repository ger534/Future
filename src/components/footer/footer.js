import * as React from 'react';
import { Typography } from '@material-ui/core';
import { flags } from '../../flags';
import { useTranslation } from 'react-i18next';

export default function Footer(props) {

    //language
    const { t } = useTranslation('common');

    return (
        <>
            <Typography variant="body2" color="textSecondary" align="center" {...props}>
                <a href={flags().moreAboutFuture} style={{ textDecoration: 'none', color: 'gray' }}>{t('footer')}</a>
                {' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </>
    );
}


/*
 function Footer(props) {
    return (
      <Typography variant="body2" color="textSecondary" align="center" {...props}>
        <a href={flags().moreAboutFuture} style={{ textDecoration: 'none', color: 'gray' }}>{t('footer')}</a>
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
*/