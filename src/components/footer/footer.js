import React from 'react';
import { Typography } from '@material-ui/core';

export default function Footer(props) {

  return (
    <>
      <div style={{ padding: "10px", backgroundColor: "#011423", color: props.contextTheme.elements1, borderTop: `1px solid` }}>
        <Typography variant="body2" /*align="center"*/ {...props}>
          Tecnotopía. San José, Costa Rica 2021.
        </Typography>
      </div>
    </>
  );
}