import React, { } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ThemeContext } from '../../contexts/theme-context';

//routing
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles({
  root: contextTheme => ({
    maxWidth: 445,
    backgroundColor: contextTheme.background,
    color: contextTheme.foreground,
    transition: "all 0.50s linear"
  }),
  media: {
    height: 300,
    width: 280,
  },
});

function CustomCard(props) {
  const [contextTheme] = React.useContext(ThemeContext);
  const classes = useStyles(contextTheme);

  const cardClick = () => {
    props.history.push(`/${props.route}`)
  }

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={cardClick}>
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
      {/*<CardActions>
        <Button size="small" color="primary" href={`/${props.route}`}>
          Leer más
        </Button>
      </CardActions>*/}
    </Card>
  );
}

export default withRouter(CustomCard);