import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'

import X035 from '../../assets/X035.png'

function Home(props)
{
    var items = [
        {
            name: "Futuro",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "X035",
            img: <img  src={X035} alt="X035" width="168" height="256"/>,
            description: "Hello World!"
        },
        {
            name: "Acerca de este sitio",
            description: "Stil testing"
        }
    ] 

    return (
        <>
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        
        </>
    )
}
export default Home;

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            {props.item.img}

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}