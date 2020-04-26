import { Button, Grid, Paper, Typography, Divider, Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import FeaturedPost from 'views/Blog/FeaturedPost';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { TabPanel } from 'components';
import ContactMailRoundedIcon from '@material-ui/icons/ContactMailRounded';
import ContactPhoneRoundedIcon from '@material-ui/icons/ContactPhoneRounded';

const useStyles = makeStyles(theme => ({
  root: {

  },
  content: {
    padding: theme.spacing(2)
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
    fontSize: 45,
    color: "white"
  },
  carouselText: {
    fontSize: 20,
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
    [theme.breakpoints.up("lg")]: {
      padding: "0 200px"
    }
  },
  notice: {
    [theme.breakpoints.up("lg")]: {
      padding: "0 200px"
    }
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
  }
}));


const items = [
  {
    index: 1,
    name: "마켓플레이스",
    description: "자본시장에 특화된 다양한 데이터",
    img: "/images/bg/bg2.jpg"
  },
  {
    index: 2,
    name: "마켓플레이스",
    description: "인공지능으로 분석된 투자분석 데이터",
    img: "/images/bg/bg7.jpg"
  },
  {
    index: 3,
    name: "마켓플레이스",
    description: "제공자와 수요자간 데이터 유통",
    img: "/images/bg/bg9.jpg"
  }
]

const featuredPosts = [
  {
    id: 1,
    title: 'Blog Title',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text'
  },
  {
    id: 2,
    title: 'Blog Title',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text'
  }
];

function createData(name, date) {
  return { name, date };
}

const rows = [
  createData('2019/12/07(토) 오픈플랫폼 방화벽 작업', '2019-11-29'),
  createData('2019/12/11(토) 오픈플랫폼 방화벽 작업', '2019-11-29'),
  createData('시세API 일시중단, 매주 금요일 17:50~18:10', '2019-11-27')
];

const tabPanelStyle = {
  backgroundColor:"#999",
  borderRadius:10,
  color:"white",
  fontSize:20
}

const Home = () => {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          <br />
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
            <Typography className={classes.noticeTitle} variant="h3" align="center">
              공지사항
              </Typography>
            <Typography className={classes.noticeMore} variant="caption" align="right">more</Typography>
            <TableContainer className={classes.table} component={Paper}>
              <Table size="small" aria-label="a dense table">
                <TableHead className={classes.tableHead}>
                  <TableRow>
                    <TableCell align="center">제목</TableCell>
                    <TableCell align="center">일자</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="center">{row.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography className={classes.noticeTitle} variant="h3" align="center">
              FAQ
              </Typography>
            <Typography className={classes.noticeMore} variant="caption" align="right">more</Typography>
            <TableContainer className={classes.table} component={Paper}>
              <Table size="small" aria-label="a dense table">
                <TableHead className={classes.tableHead}>
                  <TableRow>
                    <TableCell align="center">제목</TableCell>
                    <TableCell align="center">일자</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="center">{row.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12} md={4} style={{paddingTop:30}}>
            <div className={classes.contactRoot}>
              <Tabs
                value={value}
                indicatorColor="secondary"
                textColor="secondary"
                variant="fullWidth"
                onChange={handleChange}
                className={classes.tabs}
              >
                <Tab className={classes.tab} label="이메일 문의" />
                <Tab className={classes.tab} label="전화 연락처" />

              </Tabs>
              <TabPanel style={tabPanelStyle} value={value} index={0} align="center">
                <ContactMailRoundedIcon style={{fontSize:30, marginRight:10}}/>developers@koscom.co.kr
              </TabPanel>
              <TabPanel style={tabPanelStyle} value={value} index={1} align="center">
                <ContactPhoneRoundedIcon style={{fontSize:30, marginRight:10}} /> 대표번호 : 02-767-7114
              </TabPanel>
            </div>
          </Grid>

        </Grid>
      </div>
    </div>
  );
};

export default Home;
