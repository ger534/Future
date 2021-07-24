import React, { useEffect } from 'react'

/* material ui */
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GetAppIcon from '@material-ui/icons/GetApp';
import IconButton from '@material-ui/core/IconButton';

/* third party packages */
//import rehypeRaw from 'rehype-raw'
//import ReactMarkdown from 'react-markdown'

/* intellectual property */
import ChapterHOC from '../../libs/ChapterHOC/ChapterHOC';
import Loading from '../../libs/loading/loading'

function Chapter(props) {
  const { text, download, loading, setRoute } = props;

  useEffect(() => {
    setRoute(props.file_name)
  }, [props.file_name, setRoute])

  return (
    <>
      {loading && <Loading />}
      {text !== "error" && <><Typography color="primary" component="p" variant="h3" style={{ textAlign: "center" }}>
        {props.title}
        <IconButton
          color="primary"
          aria-label="download"
          component="span"
          onClick={() => download(props.file_name)}
          size="medium"
          disabled={loading}>
          <GetAppIcon />
        </IconButton>
      </Typography>
        {/*<Button variant="contained" color="primary" onClick={download}>
          Descargar pdf
  </Button>*/}
        <Grid container spacing={3}>
          {/*<ReactMarkdown rehypePlugins={[rehypeRaw]} children={text} />*/}
          <div style={{ overflow: "hidden" }} dangerouslySetInnerHTML={{ __html: text }} />
          {/*<div style={{ whiteSpace: "pre-wrap" }}>{text}</div>*/}
        </Grid></>}
    </>
  );
}

export default ChapterHOC(Chapter);