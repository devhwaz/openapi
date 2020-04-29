import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const useStyles = makeStyles(theme => ({
    carousel: {
        top: -3
    },
    carouselPaper: {
        boxShadow: "none",
        borderRadius: 0,
        height:300,
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        [theme.breakpoints.up("lg")]:{
            height: 600,
        }
    },
    carouselTextContainer:{
        marginRight:50,
        marginTop:0,
        [theme.breakpoints.up("lg")]:{
            marginRight:150,
            marginTop:70
        }
        
    },
    carouselTitle: {
        fontSize: 70,
        color: "white",
        textShadow:"2px 2px 5px black",
        marginBottom:30,
        [theme.breakpoints.down("sm")]:{
            fontSize:50
        }
    },
    carouselText: {
        fontFamily:"NanumMyeongjo",
        fontWeight:500,
        fontSize: 23,
        color: "white",
        textShadow:"0px 0px 5px black",
        [theme.breakpoints.down("sm")]:{
            fontSize:17
        }
    }
}));

const items = [
    {
        index: 1,
        name: "마켓플레이스",
        description: ["깊이있는 시장데이터", "다양한 산업 및 통계 데이터", "융합 분석이 가능한 분석 플랫폼"],
        img: "/images/bg/bg01.jpg"
    },
    {
        index: 2,
        name: "코스콤 Kapi",
        description: ["다양한 국내외 자본 시장의 데이터셋", "즉시 활용 가능한 편리한 라이브러리"],
        img: "/images/bg/bg02.jpg"
    },
    {
        index: 3,
        name: "마켓플레이스",
        description: ["내 데이터의 판매와 유통", "국내 유일의 자본시장 특화 데이터 시장"],
        img: "/images/bg/bg03.jpg"
    },
    {
        index: 4,
        name: "코스콤 Kapi",
        description: ["데이터도 카피", "소스도 카피", "누구나 쉽게"],
        img: "/images/bg/bg04.jpg"
    }
];

export default function CarouselView(props) {

    const classes = useStyles();

    function Project(props) {

        const { item, key, ...rest } = props;

        return (
            <Paper
                className={classes.carouselPaper}
                style={{
                    backgroundImage: `url(${item.img})`,
                    borderRadius: 0,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    paddingTop: 70
                }}
            >

                <Grid
                    className={classes.carouselTextContainer}
                    container
                    spacing={4}
                >
                    <Grid item xs={12}>
                        <Typography align="right" className={classes.carouselTitle}>{item.name}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                    {item.description.map((text) => 
                        <Typography align="right" className={classes.carouselText} gutterBottom>{text}</Typography>
                    )}
                    </Grid>
                </Grid>
            </Paper>
        )
    };

    return (
        <Carousel
            className={classes.carousel}
            autoPlay={true}
            interval={3000}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
        >
            {
                items.map((item, index) => {
                    return <Project item={item} key={index} />
                })
            }
        </Carousel>
    );
}