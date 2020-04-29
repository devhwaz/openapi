import { Divider, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SearchInput } from "components";
import React from "react";
import MainFeaturedPost from './MainFeaturedPost';
import posts from "./sample";
import SmallFeaturedPost from "./SmallFeaturedPost";

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.container,
    marginTop:theme.spacing(4)
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
      <MainFeaturedPost post={posts[3]} />
      <Grid container justify="flex-start">
        <Grid item xs={12} md={4}>
          <SearchInput
            placeholder="Search Blogs"
          />
        </Grid>
      </Grid>
      <Divider style={{margin:"20px 0px"}}/>
      <Grid container spacing={4}>
        {posts.map((post) => (
            <SmallFeaturedPost key={post.title} post={post} />
        ))}
      </Grid>
    </div>
  );
}
