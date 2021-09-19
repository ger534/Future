import React, { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery';

import CustomCard from '../../libs/customCard/customCard';

//import X035 from '../../assets/X035.png'
//import Test from '../../assets/Test.png'
import Test from '../../assets/Test2.png'
import { Container } from '@material-ui/core';
import useWindowDimensions from '../../helpers/useWindowDimensions/useWindowDimensions';


let secondaryCardsArray = [
    {
        title: "305",
        text: "La introducción",
        image: Test,
    },
    {
        title: "99",
        text: "La sombra",
        image: Test,
    },
    {
        title: "696",
        text: "El enamorado",
        image: Test,
    },

    {
        title: "1",
        text: "La introducción",
        image: Test,
    },
    {
        title: "2",
        text: "La sombra",
        image: Test,
    },
    {
        title: "3",
        text: "El enamorado",
        image: Test,
    },
    {
        title: "4",
        text: "La introducción",
        image: Test,
    },
    {
        title: "5",
        text: "La sombra",
        image: Test,
    },
]


function Cards(props) {
    const matches = useMediaQuery('(min-width:720px)');
    const { height, width } = useWindowDimensions();

    const [cards, setCards] = useState([])
    const [secondaryCards, setSecondaryCards] = useState([])

    const fillWithGhosts = (elementsPerRow, array, setter) => {
        if(elementsPerRow === 1) {elementsPerRow = 2}
        if(elementsPerRow > 4) {elementsPerRow = 4}
        let length = array.length
        let cardGhosted = [...array]
        while(length % elementsPerRow !== 0){
            cardGhosted.push({ title: "", image: Test })
            length=length+1
        }
        setter(cardGhosted)
    }

    useEffect(() => {
        fillWithGhosts(Math.floor(width/350), props.mainCards, setCards)
        fillWithGhosts(Math.floor(width/350), secondaryCardsArray, setSecondaryCards)
    }, [height, width, props.mainCards])

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Historia principal</h1>
            <Container>
                <Grid container justify={matches ? "space-evenly" : "center"} >
                    {cards.map((card, i) =>
                        <Grid item key={i}>
                            <CustomCard title={card.title} text={card.text} image={card.image} route={card.title}></CustomCard>
                        </Grid>
                    )}
                </Grid>
            </Container>
            <h1 style={{ textAlign: "center" }}>Subtramas</h1>
            <Container>
                <Grid container justify={matches ? "space-evenly" : "center"}>
                    {secondaryCards.map((card, i) =>
                        <Grid item key={i}>
                            <CustomCard title={card.title} text={card.text} image={card.image}></CustomCard>
                        </Grid>
                    )}
                </Grid>
            </Container>
        </>
    )
}
export default Cards;
