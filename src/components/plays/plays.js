import React, { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery';

import CustomCard from '../../libs/customCard/customCard';

//import X035 from '../../assets/X035.png'
import Placeholder from '../../assets/Test2.png'
import { Container } from '@material-ui/core';
import useWindowDimensions from '../../helpers/useWindowDimensions/useWindowDimensions';

function Plays(props) {
    const matches = useMediaQuery('(min-width:720px)');
    const { height, width } = useWindowDimensions();

    const [plays, setPlays] = useState([])

    const fillWithGhosts = (elementsPerRow, array, setter) => {
        if(elementsPerRow === 1) {elementsPerRow = 2}
        if(elementsPerRow > 4) {elementsPerRow = 4}
        let length = array.length
        let elementGhosted = [...array]
        while(length % elementsPerRow !== 0){
            elementGhosted.push({ title: "", image: Placeholder })
            length=length+1
        }
        setter(elementGhosted)
    }

    useEffect(() => {
        fillWithGhosts(Math.floor(width/350), props.mainPlays, setPlays)
    }, [height, width, props.mainPlays])

    return (
        <>
        <br></br>
            <h1 style={{ textAlign: "center" }}>{`<Obras disponibles/>`}</h1>
            <Container>
                <Grid container justify={matches ? "space-evenly" : "center"} >
                    {plays.map((play, i) =>
                        <Grid item key={i}>
                            <CustomCard title={play.title} text={play.author} image={play.image} route={play.route}></CustomCard>
                        </Grid>
                    )}
                </Grid>
            </Container>
        </>
    )
}
export default Plays;
