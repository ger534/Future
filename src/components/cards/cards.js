import React from 'react';

import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery';

import CustomCard from '../../libs/customCard/customCard';

//import X035 from '../../assets/X035.png'
import Test from '../../assets/Test.png'
let mainCards = [
    {
        title: "Aniristuv", 
        text: "El supervisor",
        image: Test,
    },
    {
        title: "503",
        text: "El antagonista",
        image: Test,
    },
    {
        title: "Letenci Alestopor", 
        text: "El soporte",
        image: Test,
    },
    {
        title: "Masram Zitesti", 
        text: "La máquina",
        image: Test,
    }
]

let secundaryCards = [
    {
        title: "305",
        text: "La introducción",
        image: Test,
    },
    {
        title: "99",
        text: "La sombra",
        image: Test,
    }
]


function Cards(props) {
    const matches = useMediaQuery('(min-width:760px)');
    
    return (
        <>
            <h1 style={{textAlign:"center"}}>Historia principal</h1>
            <Grid container spacing={1} justify={matches ? "space-between" : "center"}>
                {mainCards.map(card =>
                    <Grid item key={card.title}>
                        <CustomCard title={card.title} text={card.text} image={card.image} route={card.title}></CustomCard>
                    </Grid>
                )}
            </Grid>
            <h1 style={{textAlign:"center"}}>Subtramas</h1>
            <Grid container spacing={1} justify={matches ? "flex-start" : "center"}>
                {secundaryCards.map(card =>
                    <Grid item key={card.title}>
                        <CustomCard title={card.title} text={card.text} image={card.image}></CustomCard>
                    </Grid>
                )}
            </Grid>
        </>
    )
}
export default Cards;
