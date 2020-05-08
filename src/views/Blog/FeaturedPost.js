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
import clsx from 'clsx';

const useStyles = makeStyles({
  root: {
    maxWidth: 360,
    maxHeight: 440
  },
  media: {
    height: 300
  },
  title: {
    height:40
  },
  description: {
    height:36
  }
});

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (

    <Card className={classes.root} raised={true} elevation={2}>
      <CardActionArea component = "a" href = { "/blog/"+post.id }>
        <CardMedia
          className={classes.media}
          image={post.image} title={post.imageTitle}
        />
        <CardContent>
          <Typography className={clsx(classes.title,"text-overflow")} gutterBottom variant="h5">
            {post.title}
          </Typography>
          <Typography className={clsx(classes.description,"text-overflow")} variant="body2">
            {post.description}
          </Typography>
          <Typography variant="caption">
            {post.date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
