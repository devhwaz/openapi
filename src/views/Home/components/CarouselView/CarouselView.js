import { Grid, Paper } from '@material-ui/core';
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
        height: 320,
    },
    carouselTitle: {
        fontSize: 45,
        color: "white",
    },
    carouselText: {
        fontSize: 20,
        color: "white",
        textAlign: "center"
    }
}));

const items = [
    {
        index: 1,
        name: "마켓플레이스",
        description: "깊이있는 시장데이터와 다양한 산업 및 통계 데이터를 융합 분석할 수 있는 분석 플랫폼을 제공합니다.",
        img: "/images/bg/bg01.jpg"
    },
    {
        index: 2,
        name: "코스콤 Kapi",
        description: "Kapi는 다양한 국내외 자본 시장의 다양한 데이터셋과 쉽게 활용할 수 있는 편리한 라이브러리를 제공합니다.",
        img: "/images/bg/bg02.jpg"
    },
    {
        index: 3,
        name: "마켓플레이스",
        description: "나의 데이터를 간단한 절차를 통하여 판매와 유통을 할 수 있는 국내 유일의 자본시장 특화 데이터 마켓플레이스",
        img: "/images/bg/bg03.jpg"
    },
    {
        index: 4,
        name: "코스콤 Kapi",
        description: "데이터도 카피~ 소스도 카피~ 그리고 Paste하세요",
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
                    container
                    spacing={4}
                    direction="column"
                    alignItems="center"
                    justify="center"
                >
                    <Grid item xs={12}>
                        <h1 className={classes.carouselTitle}>{item.name}</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <p className={classes.carouselText}>{item.description}</p>
                    </Grid>
                </Grid>
            </Paper>
        )
    };

    return (
        <Carousel
            className={classes.carousel}
            autoPlay={true}
            interval={4000}
            showStatus={false}
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