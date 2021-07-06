import React, { useState, useEffect } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import WarningIcon from '@material-ui/icons/Warning';
import axios from 'axios';
import Loading from '../loading/loading'

export const ChapterHOC = (WrappedText) => {

    function HOC(props){
        const [text, setText] = useState("")

        const setTextState = isText => {
            setText(isText)
        }

        useEffect(() => {
            axios("https://gabo534-api.herokuapp.com/future/threezerofive", {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              //data: payload,
            }).then(response => {
              console.log(response)
              setText(response.data)
            }).catch(error => {
              setText("error")
            })
          }, [])

        return (
            <>
            { text === "" && <Loading /> }
            { text !== "error" && text !== "" ? <WrappedText {...props} setText={setTextState} text={text} /> : null}
            { text === "error" ? 
            <div style={{display:"flex", flexDirection: "column", alignContent: "stretch", alignItems: "center"}} > <WarningIcon fontSize="large" /> Las fuerzas del universo han conspirado contra ti y se ha generado un error en el sitio web </div> : null }
            </>
        )
    }

    return HOC;

}
//"Las fuerzas del universo han conspirado contra ti y se ha generado un error en el sitio web"
export default ChapterHOC;