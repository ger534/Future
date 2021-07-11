import Typography from '@material-ui/core/Typography';
//import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
//import { makeStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
//import clsx from 'clsx';
import React from 'react'
import ChapterHOC from '../../libs/ChapterHOC/ChapterHOC';
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import axios from 'axios';
import FileSaver from 'file-saver';
import GetAppIcon from '@material-ui/icons/GetApp';
import IconButton from '@material-ui/core/IconButton';
import Loading from '../../libs/loading/loading'
/*const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
  },
  title: {
    flexGrow: 1,
  },
  container: {
    display: 'block',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    display: 'block',
    padding: theme.spacing(2),
    overflow: 'auto',
    flexDirection: 'column',
    //backgroundColor: "blue"

  },
  fixedHeight: {
    height: 240,
    width: "100%"
  },
}));*/

function ThreeZeroFive(props) {

  //const classes = useStyles();

  //language
  //const { t } = useTranslation('common');

  const { text } = props;
  const [loading, setLoading] = React.useState(false)
  //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const download = () => {
    setLoading(true)
    //axios("http://localhost:3001/future/threezerofive/download", {
    axios("https://gabo534-api.herokuapp.com/future/threezerofive/download", {
      method: 'POST',
      responseType: 'arraybuffer',
      headers: {
        'content-type': 'application/pdf'
      },
    }).then(response => {
      FileSaver.saveAs(
        new Blob([response.data], { type: 'application/pdf' }),
        `hello_world.pdf`
      );
      setLoading(false)
    }).catch(error => {
      alert("error while downloading")
      setLoading(false)
    })
  }

  return (
    <>
    {loading && <Loading/>}
      <Typography color="primary" component="p" variant="h3" style={{ textAlign: "center" }}>
        305, humano después de todo
        <IconButton color="primary" aria-label="upload picture" component="span" onClick={download} size="medium" disabled={loading}>
          <GetAppIcon />
        </IconButton>
      </Typography>
      {/*<Button variant="contained" color="primary" onClick={download}>
          Descargar pdf
  </Button>*/}


      <Grid container spacing={3}>


        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={text} />
        {/*<div style={{ whiteSpace: "pre-wrap" }}>{text}</div>*/}


      </Grid>
    </>
  );
}

export default ChapterHOC(ThreeZeroFive);

//"Las fuerzas del universo han conspirado contra ti y se ha generado un error en el sitio web"