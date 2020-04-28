import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import { Link, CardActions, Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
  },
  media: {
    height: 140,
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (

    <Card className={classes.root} raised={true}>
      <CardActionArea component = "a" href = { "/blog/"+post.id }>
        <CardMedia
          className={classes.media}
          image={post.image} title={post.imageTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.description}
          </Typography>
          <Typography variant="caption" color="textSecondary" component="p">
            {post.date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        → 읽어보기
        </Button>
      </CardActions>
    </Card>

    // <CardActionArea component = "a" href = { "/blog/"+post.id } >
    //   <Card className={classes.card} raised={true}>
    //     <div className={classes.cardDetails}>
    //       <CardContent>
    //         <Typography component="h2" variant="h5">
    //           {post.title}
    //         </Typography>
    //         <Typography variant="subtitle1" color="textSecondary">
    //           {post.date}
    //         </Typography>
    //         <Typography variant="subtitle1" paragraph>
    //           {post.description}
    //         </Typography>
    //         <Typography variant="subtitle1" color="primary">
    //           <Link variant="subtitle1" href={"/blog/" + post.id}>
    //             → 읽어보기
    //           </Link>
    //         </Typography>
    //       </CardContent>
    //     </div>
    //     <Hidden xsDown>
    //       <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
    //     </Hidden>
    //   </Card>
    //   </CardActionArea >
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
