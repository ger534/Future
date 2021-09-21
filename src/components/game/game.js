import React, { useCallback, useEffect, useState, } from 'react';

/* helpers */
import LoadingHOC from '../../libs/loading/LoadingHOC';

/* style */
import './game.css'

const screens = [
    {
        id: "game",
        html: `<p>Empresa A concluye el contrato con tu Empleador B.</p>\
                <p className='transient'> > Empleador B te despide.\
                    </p>\
                <p className='transient'> > Empleador B te asigna otro contrato.\
                    </p><br/>`
    },
    {
        id: "no_contrato_B_contrato_A_1",
        html: `<p>¿Empresa A te contrata?.<p>\
                <p class='transient'>> Sí.\
                </p>\
                <p class='transient'>> No.\
                </p><br/>`
    },
    {
        id: "contrato_A",
        html: `<p class='transient'>Empleado mejor empleado. Felicidades.<br/><a href='/game'>REINICIAR</a></p><br/>`
    },
    {
        id: "contrato_B",
        html: `<p class='transient'>Empleado. Nothing was done.<br/><a href='/game'>REINICIAR</a></p><br/>`
    },
    {
        id: "no_contrato",
        html: `<p class='transient'>Empleado desempleado. Mala suerte.<br/><a href='/game'>REINICIAR</a></p><br/>`
    },
    {
        id: "contrato_B_1",
        html: `<p>¿Empresa A te contrata?.<p>\
                <p class='transient'>> Sí.\
                </p>\
                <p class='transient'>> No.\
                </p><br/>`
    },{
            id: "contrato_A_or_contrato_B",
            html: `<p>¿Empresa A o Empleador B?.<p>\
                    <p class='transient'>> Empresa A.\
                    </p>\
                    <p class='transient'>> Empleador B.\
                    </p><br/>`
        }
]

const screens_with_options = [
    {
        id: "game",
        html: `<p>Empresa A concluye el contrato con tu Empleador B.</p>\
                <p className='transient'> > Empleador B te despide.\
                    <a href='${window.location.pathname+'/no_contrato_B_contrato_A_1'}'>NEXT</a></p>\
                <p className='transient'> > Empleador B te asigna otro contrato.\
                    <a href='${window.location.pathname+'/contrato_B_1'}'>NEXT</a></p><br/>`
    },
    {
        id: "no_contrato_B_contrato_A_1",
        html: `<p>¿Empresa A te contrata?.<p>\
                <p class='transient'>> Sí.\
                <a href='${window.location.pathname+'/contrato_A'}'>NEXT</a></p>\
                <p class='transient'>> No.\
                <a href='${window.location.pathname+'/no_contrato'}'>NEXT</a></p><br/>`
    },
    {
        id: "contrato_A",
        html: `<p class='transient'>Empleado mejor empleado. Felicidades.<br/><a href='/game'>REINICIAR</a></p><br/>`
    },
    {
        id: "contrato_B",
        html: `<p class='transient'>Empleado. Nothing was done.<br/><a href='/game'>REINICIAR</a></p><br/>`
    },
    {
        id: "no_contrato",
        html: `<p class='transient'>Empleado desempleado. Mala suerte.<br/><a href='/game'>REINICIAR</a></p><br/>`
    },
    {
        id: "contrato_B_1",
        html: `<p>¿Empresa A te contrata?.<p>\
                <p class='transient'>> Sí.\
                <a href='${window.location.pathname+'/contrato_A_or_contrato_B'}'>NEXT</a></p>\
                <p class='transient'>> No.\
                <a href='${window.location.pathname+'/contrato_B'}'>NEXT</a></p><br/>`
    },{
            id: "contrato_A_or_contrato_B",
            html: `<p>¿Empresa A o Empleador B?.<p>\
                    <p class='transient'>> Empresa A.\
                    <a href='${window.location.pathname+'/contrato_A'}'>NEXT</a></p>\
                    <p class='transient'>> Empleador B.\
                    <a href='${window.location.pathname+'/contrato_B'}'>NEXT</a></p><br/>`
        }
]

function Game(props) {

    const [currentGame, setCurrentGame] = useState([])

    const removeDuplicates = (array) => {
        let noDoubles = []
        for(let i = 0; i < array.length; i++){
            if(!noDoubles.includes(array[i])){
                noDoubles.push(array[i])
            }
        }
        return noDoubles
    }

    const renderGame = useCallback( (gamePath) => {
        let current = []
        let path = gamePath.split("/").filter(e => String(e).trim());
        for (let i = 0; i < path.length; i++) {
            for (let j = 0; j < screens.length; j++) {
                if(path[i] === screens[j].id){
                    i === path.length-1 ? current.push(screens_with_options[j]) : current.push(screens[j])
                }
            }
        }
        setCurrentGame([...removeDuplicates([...current])])
    }, [])

    
    useEffect(() => {
        renderGame(window.location.pathname)
    }, [renderGame])

    return (
        <>
            <h1>Empleado</h1>

            {<div id="content_wrapper">
                <div id="content">
                    {currentGame.map((screen) =>
                        <div key={screen.id} style={{ overflow: "hidden" }} dangerouslySetInnerHTML={{ __html: screen.html }} />
                    )}
                </div>
            </div>}

        </>
    )
}
export default LoadingHOC(Game);