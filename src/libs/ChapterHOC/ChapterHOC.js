import React, { useState, useEffect } from 'react';

import WarningIcon from '@material-ui/icons/Warning';
import axios from 'axios';
import Loading from '../loading/loading'
import { flags } from '../../../src/flags'
import FileSaver from 'file-saver';

export const ChapterHOC = (WrappedText, file_name) => {

  function HOC(props) {
    const [text, setText] = useState("")

    const setTextState = isText => {
      setText(isText)
    }

    useEffect(() => {
      axios(`${flags().api}/future/threezerofive`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        //data: payload,
      }).then(response => {
        setText(response.data)
      }).catch(error => {
        setText("error")
      })
    }, [])

    const [loading, setLoading] = React.useState(false)
    const download = () => {
      setLoading(true)
      axios(`${flags().api}/future/threezerofive/download`, {
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
        {text !== "error" && text !== "" ? <WrappedText {...props} setText={setTextState} text={text} download={download} loading={loading} /> : null}
        {text === "error" ?
          <div style={{ display: "flex", flexDirection: "column", alignContent: "stretch", alignItems: "center" }} > <WarningIcon fontSize="large" /> Las fuerzas del universo han conspirado contra ti y se ha generado un error en el sitio web </div> : null}
      </>
    )
  }

  return HOC;

}
//"Las fuerzas del universo han conspirado contra ti y se ha generado un error en el sitio web"
export default ChapterHOC;