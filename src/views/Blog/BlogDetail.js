import { Avatar, Grid, Typography, Divider } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { AvatarGroup } from '@material-ui/lab';
import React, { useEffect, useState } from "react";
import BlogDetailMarkdown from './BlogDetailMarkdown';
import FeaturedPost from './FeaturedPost';
import posts from "./sample";
import BlogDetailHtml from './BlogDetailHtml';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(4,50)
    }
  },
  recommendGrid: {
    marginTop:theme.spacing(6),
    [theme.breakpoints.up("lg")]: {
      
    }
  }
}));

export default function BlogDetail(props) {
  const classes = useStyles();

  // URL 쿼리 파라미터
  const { id, ...rest } = props.match.params;

  const [post, setPost] = useState({
    authors:[]
  });

  const [featuredPosts, setFeaturedPosts] = useState([]);

  useEffect(() => {
    // id 값으로 Blog 컨텐츠 fetch 및 Blog 목록조회 필요
    setPost(posts[id-1]);
    setFeaturedPosts(posts);
  }, [])

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={12}>
          <Typography variant="h1" gutterBottom align="center" className={classes.title}>
            {post.title}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <AvatarGroup max={3} style={{paddingLeft:5}}>
            {post.authors.map((author) => 
              <Avatar key={author.name} alt={author.name} src={author.avatar} /> 
            )}
          </AvatarGroup>
          <Typography variant="subtitle1" gutterBottom >
            {post.authors.map((author) => author.name).join(',')}
          </Typography>
          <Typography variant="body2" gutterBottom >
            {post.date}
          </Typography>
        </Grid>
        <Grid item xs={12}><Divider variant="middle" style={{marginTop:10}}/></Grid>
        <Grid item xs={12}>
          <BlogDetailHtml source={post.source}/>
        </Grid>
        {/* TODO: Markdown Fetch 후 결과 데이터 필요 
        <Grid item xs={12}>
          <BlogDetailMarkdown source={""}/>
        </Grid> */}
      </Grid>
      <Grid container spacing={5} className={classes.recommendGrid}>
        <Grid item xs={12}><Typography variant="h3" align="center">Featured Blogs</Typography></Grid>
        {featuredPosts.slice(0,3).map((post) => (
          <Grid item xs={12} md={4} align="center">
            <FeaturedPost key={post.title} post={post} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
