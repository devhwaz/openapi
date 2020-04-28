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
        color: "white"
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