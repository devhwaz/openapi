import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";
import styles from "assets/jss/material-kit-react/views/blogPage.js";
import classNames from "classnames";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import React, { useEffect } from "react";
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import FeaturedPost from './FeaturedPost';
import BlogDetailPageMain from './BlogDetailPageMain';



const useStyles = makeStyles(styles);

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

const posts = [post1, post2, post3];

const authors = [
  {name: "Remy Sharp", avatar:team1},
  {name: "Travis Howard", avatar:team2},
  {name: "Cindy Baker", avatar:team3}
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

export default function BlogDetailPage(props) {
  const classes = useStyles();

  // URL 쿼리 파라미터
  const { id, ...rest } = props.match.params;

  useEffect(() => {
    //console.log(id);
  }, [])

  return (
    <div>
      <Header
        color="gray"
        brand=""
        rightLinks={<HeaderLinks />}
        fixed
        {...rest}
      />
      <div className={classNames(classes.main, classes.paper)}>
        <div className={classes.container}>
          <GridContainer spacing={5} className={classes.mainGrid}>
            <BlogDetailPageMain title={mainFeaturedPost.title} post={posts[0]} authors={authors}/>
          </GridContainer>
          <Divider style={{marginBottom:20}}/>
          <GridContainer spacing={5}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
