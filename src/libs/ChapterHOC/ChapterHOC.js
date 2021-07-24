import React, { useState, useEffect } from 'react';

import WarningIcon from '@material-ui/icons/Warning';
import axios from 'axios';
import Loading from '../loading/loading'
import { flags } from '../../../src/flags'
import FileSaver from 'file-saver';

export const ChapterHOC = (WrappedText) => {
  function HOC(props) {
    const [text, setText] = useState("")
    const [route, setRoute] = useState("")

    /*const setTextState = isText => {
      setText(isText)
    }*/

    const setRouteState = isRoute => {
      setRoute(isRoute)
    }

    useEffect(() => {
      axios(`${flags().api}/future/chapter`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        data: {
          chapter: route
        }
        //data: payload,
      }).then(response => {
        setText(response.data)
      }).catch(error => {
        setText("error")
      })
    }, [route])

    const [loading, setLoading] = React.useState(false)
    const download = (file_name) => {
      setLoading(true)
      axios(`${flags().api}/future${route}/download`, {
        method: 'POST',
        responseType: 'arraybuffer',
        headers: {
          'content-type': 'application/pdf'
        },
      }).then(response => {
        FileSaver.saveAs(
          new Blob([response.data], { type: 'application/pdf' }),
          `${file_name}.pdf`
        );
        setLoading(false)
      }).catch(error => {
        alert("error while downloading")
        setLoading(false)
      })
    }

    return (
      <>
        {text === "" && <Loading />}
        {<WrappedText {...props} setRoute={setRouteState} text={text} download={download} loading={loading} />}
        {text === "error" &&
          <div style={{ display: "flex", flexDirection: "column", alignContent: "stretch", alignItems: "center" }} > <WarningIcon fontSize="large" /> Las fuerzas del universo han conspirado contra ti y se ha generado un error en el sitio web </div>}
      </>
    )
  }

  return HOC;

}
//"Las fuerzas del universo han conspirado contra ti y se ha generado un error en el sitio web"
export default ChapterHOC;