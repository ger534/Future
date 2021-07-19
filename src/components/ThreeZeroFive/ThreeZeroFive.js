import React from 'react'

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

const title = "Hola mundo"
const file_name = `hello_world`
function ThreeZeroFive(props) {

  const { text, download, loading } = props;
  
  return (
    <>
      {loading && <Loading />}
      <Typography color="primary" component="p" variant="h3" style={{ textAlign: "center" }}>
        {title}
        <IconButton
          color="primary"
          aria-label="download"
          component="span"
          onClick={download}
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
      </Grid>
    </>
  );
}

export default ChapterHOC(ThreeZeroFive, file_name);