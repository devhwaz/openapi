import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import FeaturedPost from './FeaturedPost';
import MainFeaturedPost from './MainFeaturedPost';
import Search from './SearchBox.js';
import { Grid } from "@material-ui/core";
import posts from "./sample";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));


export default function BlogPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  {/* Blog 목록조회 필요.
    const [posts, setPosts] = useState("");

    useEffect(() => {
      fetch(note)
        .then(response => {
          return response.text()
        })
        .then(text => {
          setMarkdown(text);
        })
    })
  */}
  return (
    <div className={classes.root}>
        <MainFeaturedPost post={posts[0]} />
      <Grid container justify="center"  spacing={5}>
        <Grid item xs={12} align="center">
          <Search />
        </Grid>
      </Grid>
      <Grid container spacing={5}>
        {posts.map((post) => (
          <Grid item xs={12} md={4}>
            <FeaturedPost key={post.title} post={post} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
