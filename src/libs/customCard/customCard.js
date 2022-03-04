import React, { } from 'react';

/* intellectual property */
import { ThemeContext } from '../../helpers/themeContext/themeContext';

/* third party packages */
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

//routing
import { useHistory } from "react-router-dom";


const useStyles = makeStyles({
  rootHome: props => ({
    visibility: props.ghost ? "hidden" : "",
    width: "97%",
    transition: "all 0.50s linear",
    margin: "1em",
    height: props.ghost ? 0 : "",
  }),
  root: props => ({
    visibility: props.ghost ? "hidden" : "",
    width: 280,
    transition: "all 0.50s linear",
    backgroundColor: props.contextTheme.elements2,
    color: props.contextTheme.elements2Text,
    margin: "1em",
    height: props.ghost ? 0 : "",
  }),
  content: props => ({

  }),
  contentBig: props => ({
    width: 10,
    color: "white",
  }),
  mediaHome: props => ({
    height: "50vh",
    width: "100%",
  }),
  media: props => ({
    height: 335,
    width: 300,
  }),
});

function CustomCard(props) {

  const history = useHistory();

  const [contextTheme] = React.useContext(ThemeContext);
  const propsForStyling = { contextTheme: contextTheme, ghost: props.title === "" }
  const classes = useStyles(propsForStyling);

  return (
    <>
      {props.bigCard ? <Card className={props.bigCard ? classes.rootHome : classes.root}>
        <CardMedia
          className={props.bigCard ? classes.mediaHome : classes.root}
          image={props.image}
          title={props.title}
        >
          <Paper style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", width: "50%", position: "absolute", top: "30%", color: "white" }}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" style={{ color: "white", fontSize: "30px" }}>
              {props.text}
            </Typography>
          </Paper>
        </CardMedia>
        <CardActionArea onClick={() => { history.push(props.route) }}>
        </CardActionArea>
      </Card> :
        <Card className={classes.root}>
          <CardActionArea onClick={() => { history.push(props.route) }}>
            <CardMedia
              className={classes.media}
              image={props.image}
              title={props.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.text}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>}

    </>
  );
}

export default CustomCard;