import React, { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery';

import CustomCard from '../../libs/customCard/customCard';

//import X035 from '../../assets/X035.png'
//import Test from '../../assets/Test.png'
import Test from '../../assets/Test2.png'
import { Container } from '@material-ui/core';
import useWindowDimensions from '../../hooks/useWindowDimensions';


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
        let length = array.length //array.length
        let cardGhosted = [...array]

        console.log("length")
        console.log(length)
        console.log("elementsPerRow")
        console.log(elementsPerRow)
        while(length % elementsPerRow !== 0){
            cardGhosted.push({ title: "", image: Test })
            length=length+1
        }
        setter(cardGhosted)
    }

    useEffect(() => {
        fillWithGhosts(Math.floor(width/350), props.mainCards, setCards)
        fillWithGhosts(Math.floor(width/350), secondaryCardsArray, setSecondaryCards)
        //fillWithGhosts(Math.floor((width/350)-1.1), secondaryCardsArray, setSecondaryCards)
    }, [height, width, props.mainCards])

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Historia principal</h1>
            <Container /* maxWidth={'lg'} fixed={true} */>
                <Grid container justify={matches ? "space-evenly" : "center"} >
                    {/*<Grid container spacing={1} justify={matches ? "flex-start" : "center"} style={{paddingLeft:'15%',paddingRight:'10%'}}>*/}
                    {cards.map((card, i) =>
                        <Grid item /*style={{padding:"10%"}}*/ key={i} /*sm={matches ? 6 : 7} md={4} lg={3} xl={3}*/>
                            <CustomCard title={card.title} text={card.text} image={card.image} route={card.title}></CustomCard>
                        </Grid>
                    )}
                </Grid>
            </Container>
            <h1 style={{ textAlign: "center" }}>Subtramas</h1>
            <Container /*maxWidth={false}*/>
                <Grid container /*spacing={1}*/ justify={matches ? "space-evenly" : "center"}>
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
