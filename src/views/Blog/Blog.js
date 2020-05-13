import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SearchInput } from "components";
import React from "react";
import FeaturedPost from "./FeaturedPost";
import MainFeaturedPost from './MainFeaturedPost';
import posts from "./sample";

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.container,
    marginTop:theme.spacing(4)
  },
  section: {
    padding:theme.spacing(2,0)
  }
}));


export default function BlogPage(props) {
  const classes = useStyles();
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
      <Grid container justify="flex-start" className={classes.section}>
        <Grid item xs={12} md={4}>
          <SearchInput
            placeholder="Search Blogs"
          />
        </Grid>
      </Grid>
      <Grid container spacing={4} className={classes.section}>
        {posts.map((post) => (
          <Grid item xs={12} md={4} align="center" key={post.id}>
            <FeaturedPost post={post} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
