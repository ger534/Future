import React, { useEffect, useState } from 'react';

/* third party packages */
import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Container } from '@material-ui/core';

/* helpers */
import useWindowDimensions from '../../helpers/useWindowDimensions/useWindowDimensions';

/* intellectual property */
import CustomCard from '../../libs/customCard/customCard';
import Test from '../../assets/Test2.png'

//routing
import { useHistory } from "react-router-dom";


function Cards(props) {

    const history = useHistory();

    const matches = useMediaQuery('(min-width:720px)');
    const { height, width } = useWindowDimensions();

    const [cards, setCards] = useState([])
    const [secondaryCards, setSecondaryCards] = useState([])

    const fillWithGhosts = (elementsPerRow, array, setter) => {
        if (elementsPerRow === 1) { elementsPerRow = 2 }
        if (elementsPerRow > 4) { elementsPerRow = 4 }
        let length = array.length
        let cardGhosted = [...array]
        while (length % elementsPerRow !== 0) {
            cardGhosted.push({ title: "", image: Test })
            length = length + 1
        }
        setter(cardGhosted)
    }

    useEffect(() => {
        fillWithGhosts(Math.floor(width / 350), props.mainCards, setCards)
    }, [height, width, props.mainCards])

    return (
        <>
            <h1 style={{ textAlign: "center" }}>{`<Personajes principales/>`}</h1>

            <Container>
                <Grid container justify={matches ? "space-evenly" : "center"} >
                    {cards.map((card, i) =>
                        <div style={{ width: "30%"/*, padding: "0px"*/ }} key={i}>
                            {/*<CustomCard title={card.title} text={card.text} image={card.image} route={card.title}></CustomCard>*/}
                            <div onClick={() => { history.push(card.route) }} style={{ cursor:"pointer", paddingTop: "1%", margin: "1px", display: "flex", justifyContent: "center", flexDirection: "column", border: "1px solid ", alignItems: "center" }}>
                                <img src={card.image} width={"100%"} height={"30%"} style={{ s: "1px" }} alt={`image ${card.title}`} />
                                <h1 style={{ textAlign: "center" }}>{card.title}</h1>
                            </div>
                        </div>
                    )}
                </Grid>
            </Container>
        </>
    )
}
export default Cards;
