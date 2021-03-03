import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const News = (props) => {
        const classes = useStyles();
    const {author,title,description,urlToImage,content,url,publishedAt} = props.article;
    console.log(props.article);


    return (
       <>
        <Card className={classes.root} style={{margin:' 30px'}}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={urlToImage}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
             {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
            <br/>
            <hr/>
           <p>Publisher: {author}</p>
           <p><small>{publishedAt}</small></p>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained" color="primary">
            <a style={{textDecoration:'none', color:'white'}} href={url} target="_blank">Learn More</a>
          </Button>
        </CardActions>
      </Card>

      </>
    );
};

export default News