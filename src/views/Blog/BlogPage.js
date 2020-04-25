import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/blogPage.js";
import classNames from "classnames";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import React from "react";
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import FeaturedPost from './FeaturedPost';
import MainFeaturedPost from './MainFeaturedPost';
import Search from './SearchBox.js';




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

          <MainFeaturedPost post={mainFeaturedPost} />
          <GridContainer justify="center"  spacing={5}>
            <GridItem xs={12} align="right">
              <Search />
            </GridItem>
          </GridContainer>
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
