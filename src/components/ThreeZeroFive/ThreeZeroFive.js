import Typography from '@material-ui/core/Typography';
//import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
//import { makeStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
//import clsx from 'clsx';

import ChapterHOC from '../../libs/ChapterHOC/ChapterHOC';
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

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

  //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  

  return (
    <Grid container spacing={3}>
      <Typography color="primary" component="p" variant="h3">
        305, humano después de todo
      </Typography>
      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={text} />
      {/*<div style={{ whiteSpace: "pre-wrap" }}>{text}</div>*/}
      

    </Grid>

  );
}

export default ChapterHOC(ThreeZeroFive);

//"Las fuerzas del universo han conspirado contra ti y se ha generado un error en el sitio web"