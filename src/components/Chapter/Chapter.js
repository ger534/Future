import React, { useState, useEffect } from 'react'

/* material ui */
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GetAppIcon from '@material-ui/icons/GetApp';
import IconButton from '@material-ui/core/IconButton';
import WarningIcon from '@material-ui/icons/Warning';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

/* third party packages */
import FileSaver from 'file-saver';
//import rehypeRaw from 'rehype-raw'
//import ReactMarkdown from 'react-markdown'

/* intellectual property */
import LoadingHOC from '../../libs/loading/LoadingHOC';
import { Container } from '@material-ui/core';

//routing
import { useHistory } from "react-router-dom";

/* services */
import chapterService from '../../services/chapter.service'

/* helpers */
import app from '../../helpers/firebase/firebase'

import './chapter.css'

//firebase analytics
import { getAnalytics, logEvent } from 'firebase/analytics';
const analytics = getAnalytics(app);

function Chapter(props) {

  logEvent(analytics, 'chapter', { name: props.file_name});
  logEvent(analytics, 'screen_view', { screen_name: props.file_name });
  console.log("chapter ", props.file_name)

  const [text, setText] = useState("")

  const { loading, setLoading } = props;

  const history = useHistory();

  //dialog
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //get chapter
  useEffect(() => {
    setLoading(true)
    chapterService.getChapter(props.route).then(response => {
      setText(response)
      setLoading(false)
    }).catch(error => {
      setText("error")
      setLoading(false)
    })
  }, [props.route, setLoading])

  //download chapter
  const download = (file_name) => {
    setLoading(true)
    chapterService.downloadChapter(file_name).then(response => {
      FileSaver.saveAs(
        new Blob([response], { type: 'application/pdf' }),
        `${file_name}.pdf`
      );
      setLoading(false)
      handleClose()
    }).catch(error => {
      alert("error while downloading")
      setLoading(false)
      handleClose()
    })
  }

  //send user to next chapter
  const nextChapter = () => {
    history.push(`${props.next}`)

  }

  return (
    <>
    <br></br>
      <Container maxWidth="lg">
        {text !== "error" && !loading && <>
          <Typography color="primary" component="p" variant="h3" style={{ textAlign: "center" }}>
            {props.title}
            <IconButton color="primary" aria-label="download" component="span" onClick={handleClickOpen} size="medium" disabled={loading}>
              <GetAppIcon />
            </IconButton>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Descarga"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  ¿Desea descargar la novela completa o solo este capítulo?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => download("tecnotopia")} color="primary">
                  Novela completa
                </Button>
                <Button onClick={() => download(props.file_name)} color="primary" autoFocus>
                  Este capítulo
                </Button>
              </DialogActions>
            </Dialog>
          </Typography>

          <Grid container spacing={3}>
            {/*<ReactMarkdown rehypePlugins={[rehypeRaw]} children={text} />*/}
            <div style={{ overflow: "hidden" }} dangerouslySetInnerHTML={{ __html: text }} />
            {/*<div style={{ whiteSpace: "pre-wrap" }}>{text}</div>*/}
          </Grid>
          <Button variant="contained" color="primary" onClick={nextChapter} style={{ float: "right" }}>
            Siguiente capítulo
          </Button>
        </>}

        {text === "error" && <div style={{ display: "flex", flexDirection: "column", alignContent: "stretch", alignItems: "center" }} > <WarningIcon fontSize="large" /> Las fuerzas del universo han conspirado contra ti y se ha generado un error en el sitio web </div>}

      </Container>
    </>
  );
}

export default LoadingHOC(Chapter);
