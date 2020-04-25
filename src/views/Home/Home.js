import { Button, Grid, Paper, Typography, Divider,Card,CardContent, CardActions, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import FeaturedPost from 'views/Blog/FeaturedPost';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



const useStyles = makeStyles(theme => ({
  root: {

  },
  content: {
    padding:theme.spacing(2)
  },
  carousel: {
    top: -3
  },
  carouselPaper: {
    boxShadow: "none",
    borderRadius: 0,
    height: 320,
  },
  carouselTitle: {
    fontSize:45,
    color: "white"
  },
  carouselText: {
    fontSize:20,
    color: "white",
    textAlign: "center"
  },
  carouselButton:
  {
    marginTop: 20,
    color: "white",
    fontSize: 20,
    border: "5px solid white",
    textTransform: "capitalize"
  },
  blogs: {
    [theme.breakpoints.up("lg")]:{
      padding:"0 200px"
    }
  },
  notice: {
    [theme.breakpoints.up("lg")]:{
    padding:"0 200px"
    }
  },
  noticeMore:{
    position:'relative',
    float: 'right',
    top: '-15px',
    height: 0
  },
  table: {
    backgroundColor:"transparent",
    boxShadow:"none",
    borderTop:"2px solid black"
  },
  tableHead: {
    backgroundColor:"white",
    padding:0
  }
}));


const items = [
  {
    index:1,
    name: "마켓플레이스",
    description: "자본시장에 특화된 다양한 데이터",
    img: "/images/bg/bg2.jpg"
  },
  {
    index:2,
    name: "마켓플레이스",
    description: "인공지능으로 분석된 투자분석 데이터",
    img: "/images/bg/bg7.jpg"
  },
  {
    index:3,
    name: "마켓플레이스",
    description: "제공자와 수요자간 데이터 유통",
    img: "/images/bg/bg9.jpg"
  }
]

const featuredPosts = [
  {
    id:1,
    title: 'Blog Title',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text'
  },
  {
    id:2,
    title: 'Blog Title',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text'
  }
];

function createData(name,  date) {
  return { name,  date };
}

const rows = [
  createData('2019/12/07(토) 오픈플랫폼 방화벽 작업', '2019-11-29'),
  createData('2019/12/07(토) 오픈플랫폼 방화벽 작업', '2019-11-29'),
  createData('시세API 일시중단, 매주 금요일 17:50~18:10', '2019-11-27'),
  createData('시세API 일시중단, 매주 금요일 17:50~18:10', '2019-11-27')
];

const Home = () => {
  const classes = useStyles();

  function Project(props) {
    return (
      <Paper
        className={classes.carouselPaper}
        style={{
          backgroundImage: `url(${props.item.img})`,
          borderRadius: 0,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          paddingTop: 70
        }}
      >

        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item xs={12}>
            <h1 className={classes.carouselTitle}>{props.item.name}</h1>
          </Grid>
          <Grid item xs={12}>
            <p className={classes.carouselText}>{props.item.description}</p>
          </Grid>
          <br/>
          <Grid item xs={12}>
            <Button className={classes.carouselButton}>
              자세히 보기
            </Button>
          </Grid>
        </Grid>
      </Paper>
    )
  }

  return (
    <div className={classes.root}>
      <Carousel
        className={classes.carousel}
        autoPlay={true}
        timer={500}
        animation="fade"
        indicators={true}
        timeout={500}
      >
        {
          items.map((item, index) => {
            return <Project item={item} key={index} />
          })
        }
      </Carousel>
      <div className={classes.content}>
          <Grid container className={classes.blogs} spacing={4} justify="center" alignItems="center">
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.id} post={post} />
            ))}

            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
          </Grid>
          <Grid container className={classes.notice} spacing={4} justify="center" alignItems="center">
            <Grid item xs={12} md={4}>
              <Typography className={classes.noticeTitle} variant="h3" align="center" gutterBottom>
                공지사항
              </Typography>
              <Typography className={classes.noticeMore} variant="caption" align="right">more</Typography>
              <TableContainer className={classes.table} component={Paper}>
                <Table size="small" aria-label="a dense table">
                  <TableHead className={classes.tableHead}>
                    <TableRow>
                      <TableCell>제목</TableCell>
                      <TableCell align="right">일자</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography className={classes.noticeTitle} variant="h3" align="center" gutterBottom>
                FAQ
              </Typography>
              <Typography className={classes.noticeMore} variant="caption" align="right">more</Typography>
              <TableContainer className={classes.table} component={Paper}>
                <Table size="small" aria-label="a dense table">
                  <TableHead className={classes.tableHead}>
                    <TableRow>
                      <TableCell>제목</TableCell>
                      <TableCell align="right">일자</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography className={classes.noticeTitle} variant="h3" align="center" gutterBottom>
                문의사항
              </Typography>
              <Typography className={classes.noticeMore} variant="caption" align="right">more</Typography>
              <TableContainer className={classes.table} component={Paper}>
                <Table size="small" aria-label="a dense table">
                  <TableHead className={classes.tableHead}>
                    <TableRow>
                      <TableCell>제목</TableCell>
                      <TableCell align="right">일자</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            
        </Grid>
      </div>
    </div>
  );
};

export default Home;
