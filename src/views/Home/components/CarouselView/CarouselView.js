import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const useStyles = makeStyles(theme => ({
    carousel: {
        
    },
    carouselPaper: {
        boxShadow: "none",
        borderRadius: 0,
        height:500,
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
    },
    carouselTextContainer:{
        ...theme.container,
        marginTop:120        
    },
    carouselTitle: {
        fontSize: 50,
        color: "white",
        textShadow:"2px 2px 5px black",
        marginBottom:10,
        [theme.breakpoints.down("sm")]:{
            fontSize:40
        }
    },
    carouselText: {
        fontSize: 32,
        marginBottom:20,
        color: "white",
        textShadow:"0px 0px 5px black",
        [theme.breakpoints.down("sm")]:{
            fontSize:24
        }
    }
}));

const items = [
    {
        index: 1,
        name: "마켓플레이스",
        description: ["자본시장에 특화된", "다양한 데이터 유통 마켓 플레이스"],
        img: "/images/bg/bg01.jpg"
    },
    {
        index: 2,
        name: "코스콤 Kapi",
        description: ["제공자와 수요자간", "다양한 데이터 마켓 플레이스"],
        img: "/images/bg/bg02.png"
    },
    {
        index: 3,
        name: "마켓플레이스",
        description: ["인공지능으로 분석된", "투자분석 데이터 마켓 플레이스"],
        img: "/images/bg/bg03.png"
    }
    // ,
    // {
    //     index: 4,
    //     name: "코스콤 Kapi",
    //     description: ["데이터와 소스코드는 카피", "누구나 쉽게 사용 가능한 개발 공간"],
    //     img: "/images/bg/bg04.jpg"
    // }
];

export default function CarouselView(props) {

    const classes = useStyles();

    function Project(props) {

        const { item, ...rest } = props;

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
                    {item.description.map((text,index) => 
                        <Typography align="center" className={classes.carouselText} gutterBottom key={index}>{text}</Typography>
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