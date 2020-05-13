import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React from 'react';
import FeaturedPost from 'views/Blog/FeaturedPost';
import featuredPosts from '../Blog/sample';
import { BannerGrid, CarouselView, Contact, Notice } from './components';


const useStyles = makeStyles(theme => ({
  root: {
    overflow:"hidden"
  },
  content: {
    ...theme.container
  }
  ,
  banner: {
    
  },
  bannerContents: {
    position:"relative",
    top:-50,
    marginBottom: -18,
    [theme.breakpoints.down("md")]:{
      marginLeft:0,
      marginRight:0,
      padding: theme.spacing(2,0),
      borderRadius: 0,
      top:0
    }
  },
  carousel: {
  },
  section: {
    marginBottom:30
  },
  featuredBlogs: {
    
  },
  dividerTitle: {
    display:"flex",
    alignItems:"center",
    padding:theme.spacing(6,0),
    color:theme.palette.koscom.text
  },
  notice: {
    backgroundColor: theme.palette.divider,
    paddingBottom:theme.spacing(8)
  },
  noticeTitle: {
    fontSize:20
  },
  noticeMore: {
    position: 'relative',
    float: 'right',
    top: '-15px',
    height: 0
  },
  table: {
    backgroundColor: "transparent",
    boxShadow: "none"
    
  },
  tableHead: {
    // backgroundColor: "white",
    padding: 0
  },
  contactRoot: {
    backgroundColor:"transparent",
    
  },
  tabs: {
    height:24,
    borderBottom: `1px solid ${theme.palette.white}`
  },
  tab: {
    fontWeight:1000,
    minWidth:120
  },
  links: {
    
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CarouselView />
      <div className={classes.content}>
        <Paper className={classes.bannerContents} variant="elevation" elevation={1}>
          <BannerGrid />
        </Paper>
        <div className={classes.section}>
          <Typography className={classes.dividerTitle} variant="h1" align="left">FEATURED BLOGS</Typography>
          <div className={classes.featuredBlogs}>
            <Grid container spacing={4} justify="center" alignItems="center">
              {featuredPosts.slice(0,3).map((post) => (
                <Grid item xs={12} md={4} align="center" key={post.id}>
                  <FeaturedPost post={post} />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
      <div className={clsx(classes.notice)}>
        <div className={classes.content}>
          <Typography className={classes.dividerTitle} variant="h1" align="left">NOTICE</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Notice />
            </Grid>
            <Grid item xs={12} md={4}>
              <Contact />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Home;
