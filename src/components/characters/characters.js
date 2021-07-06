import React from 'react';

import Grid from '@material-ui/core/Grid'

import Avatar from '@material-ui/core/Avatar'

import Test from '../../assets/Test.png'

function Characters(props) {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item>
                    <Avatar alt="test" src={Test} style={{width:"200px",height:"200px"}}></Avatar>
                    <h1>El supervisor</h1>
                    <p>El ingeniero, el experto, miembro de la brigada 
de rescate, un antivirus?</p>

                    <h2>Descripción</h2>
                    <p>Es el protagonista de la historia
Al principio se pinta como un humano intentando ayudar a 
otro humano</p>
                    <h2>Psicología</h2>
                    <p>Se preocupa, se emociona, se irrita. Es un humano</p>

                    <h2>Trayectoria</h2>
                    <p>En algún punto de la obra luego de ver como la realidad y 
las simulaciones pueden confundirse, comienza a dudar de la
 realidad. Tal vez él también está encerrado en una simulación.
  Tal vez es imposible saberlo.</p>



                </Grid>

            </Grid>
        </>
    )
}
export default Characters;
