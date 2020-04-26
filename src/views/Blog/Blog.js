import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import FeaturedPost from './FeaturedPost';
import MainFeaturedPost from './MainFeaturedPost';
import Search from './SearchBox.js';
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
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

export default function BlogPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  {/* MD파일 Fetch 추후 적용
    
    const createMarkup = () => {
      return {__html: 'First &middot; Second'};
    }

    const [markdown, setMarkdown] = useState("");

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
      <MainFeaturedPost post={mainFeaturedPost} />
      <Grid container justify="center"  spacing={5}>
        <Grid item xs={12} align="right">
          <Search />
        </Grid>
      </Grid>
      <Grid container spacing={5}>
        {featuredPosts.map((post) => (
          <FeaturedPost key={post.title} post={post} />
        ))}
      </Grid>
    </div>
  );
}
