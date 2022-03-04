import React from 'react';


import { Typography, useMediaQuery } from '@material-ui/core';

/* helpers */
import { ThemeContext } from '../../helpers/themeContext/themeContext';

export default function Footer(props) {

  const matches = useMediaQuery('(min-width:1200px)');

  const [contextTheme] = React.useContext(ThemeContext);

  return (
    <>
      {matches && <div style={{ padding: "10px", backgroundColor: "#011423", color: props.theme.elements1, borderTop: `1px solid` }}>
        <Typography variant="body2" /*align="center"*/ {...props}>

          Tecnotopía. San José, Costa Rica 2021. <>Este trabajo se encuentra bajo la licencia.&nbsp;
            <a style={{ color: contextTheme.details }} rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es" rel="noopener noreferrer" target="_blank">
              Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
            </a>. <img alt="Creative Commons License" style={{ borderWidth: 0 }} src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></>


        </Typography>


      </div>}
    </>
  );
}