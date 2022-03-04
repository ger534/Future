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

import useMediaQuery from '@material-ui/core/useMediaQuery';

/* intellectual property */
import LoadingHOC from '../../libs/loading/LoadingHOC';
import { Container, makeStyles } from '@material-ui/core';

/* services */
import chapterService from '../../services/chapter.service'

/* helpers */
import app from '../../helpers/firebase/firebase'
import { ThemeContext } from '../../helpers/themeContext/themeContext';

import './tale.css'

//firebase analytics
import { getAnalytics, logEvent } from 'firebase/analytics';
const analytics = getAnalytics(app);

const useStyles = makeStyles((theme) => ({
  root: props => ({
    "& > *": {
      margin: theme.spacing(1),
      color: props.contextTheme.foreground,
      transition: "all 0.50s linear",
    },
    "& p": {
      fontSize: props.fontSize
    },
    "& a": {
      //style={contextTheme.foreground === "#000000" ? {} : { color: contextTheme.details }}
      color: props.contextTheme.foreground === "#000000" ? "#551A8B" : props.contextTheme.details,
      transition: "all 0.50s linear",
    }
  }),
  Button: props => ({
    outlineColor: props.contextTheme.foreground,
    outline: `1px solid ${props.contextTheme.foreground}`
  })
}));

function Tale(props) {

  logEvent(analytics, 'tale', { name: props.file_name });
  logEvent(analytics, 'screen_view', { screen_name: props.file_name });
  console.log("tale ", props.file_name)

  const [text, setText] = useState("")

  const [textSizeValue, setTextSizeValue] = useState(16)

  const { loading, setLoading } = props;

  const matches = useMediaQuery('(min-width:1200px)');

  const [contextTheme] = React.useContext(ThemeContext);

  const classes = useStyles({ contextTheme: contextTheme, fontSize: textSizeValue });

  //dialog
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //get tale
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

  //download tale
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

  //change text size
  const textSize = (command) => {
    if (command === "+") {
      setTextSizeValue(textSizeValue + 1)
    } else if (command === "-") {
      setTextSizeValue(textSizeValue - 1)
    } else {
      setTextSizeValue(16)
    }
  }

  return (
    <>
      <Container maxWidth="lg" style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
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
                  ¿Desea descargar esta historia?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => download(props.file_name)} color="primary" autoFocus>
                  Sí
                </Button>
              </DialogActions>
            </Dialog>
          </Typography>

          <>
            {/* Control */}
            <div style={{ display: "flex" }}>
              <Button variant="outlined" className={classes.Button} style={{ color: contextTheme.foreground }} onClick={() => textSize("-")} >-A</Button>
              <Button variant="outlined" className={classes.Button} style={{ color: contextTheme.foreground }} onClick={() => textSize("")} >A</Button>
              <Button variant="outlined" className={classes.Button} style={{ color: contextTheme.foreground }} onClick={() => textSize("+")} >A+</Button>
            </div>
          </>

          <Grid className={classes.root} style={matches ? { width: "90%", textAlign: "center" } : { width: "95%", textAlign: "center" }}>
            <div style={{ overflow: "hidden" }} dangerouslySetInnerHTML={{ __html: text }} />

            <img src={props.cover} width={"80%"} style={{ s: "1px" }} alt={`${props.file_name}`} />
          </Grid>

          {/* space for comments (?) */}
          {/*but we would need a moderator or something like that*/}
        </>}

        {text === "error" && <div style={{ display: "flex", flexDirection: "column", alignContent: "stretch", alignItems: "center" }} > <WarningIcon fontSize="large" /> Las fuerzas del universo han conspirado contra ti y se ha generado un error en el sitio web </div>}

      </Container>
    </>
  );
}

export default LoadingHOC(Tale);
