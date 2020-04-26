import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import React, { useEffect } from "react";
import BlogDetailMain from './BlogDetailMain';
import FeaturedPost from './FeaturedPost';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  mainGrid: {
    marginBottom: theme.spacing(4)
  },
  recommendGrid: {
    [theme.breakpoints.up("lg")]: {
      padding: "0 200px"
    }
  }
}));

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

const authors = [
  {name: "Remy Sharp", avatar:"/images/avatars/avatar_1.png"},
  {name: "Travis Howard", avatar:"/images/avatars/avatar_2.png"},
  {name: "Cindy Baker", avatar:"/images/avatars/avatar_3.png"}
];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function BlogDetail(props) {
  const classes = useStyles();

  // URL 쿼리 파라미터
  const { id, ...rest } = props.match.params;

  useEffect(() => {
    //console.log(id);
  }, [])

  return (
    <div className={classes.root}>
      <Grid container spacing={5} className={classes.mainGrid}>
        <BlogDetailMain title={mainFeaturedPost.title} post={""/* TODO: Post 데이터 필요 */} authors={authors}/>
      </Grid>
      <Grid container spacing={5} className={classes.recommendGrid}>
        {featuredPosts.map((post) => (
          <FeaturedPost key={post.title} post={post} />
        ))}
      </Grid>
    </div>
  );
}
