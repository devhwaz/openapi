import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 380,
    height:380,
    borderRadius:0
  },
  mediaContainer:{
    display: "flex",
    justifyContent: "center",
    marginTop:theme.spacing(5),
    marginBottom:theme.spacing(2)
  },
  media: {
    height: 122,
    width:122
  },
  actionContainer:{
    display: "flex",
    justifyContent: "center",
    marginTop:theme.spacing(2)
  }
}));

const tileData = [
    {
      img: '/images/banners/price.svg',
      title: '시세 서비스',
      description: '주식, 선물, 옵션 등 주요 시세',
      cols: 2,
      featured: true,
    },
    {
      img: '/images/banners/finance.svg',
      title: '재무정보',
      description: '위버플, NICE, FABOT 제공 재무정보',
    },
    {
      img: '/images/banners/analytics.svg',
      title: '분석 서비스',
      description: 'BC카드 업종정보, RA, BIGBOT',
    }
];

export default function SingleLineGridList(props) {
  const classes = useStyles();

  const theme = useTheme();

  return (
      <Grid container>
        {tileData.map((tile) => (
          <Grid item xs={12} md={4}>
            <Card className={classes.root}>
              <div className={classes.mediaContainer}>
                <CardMedia
                  className={classes.media}
                  image={tile.img}
                  title={tile.title}
                />
              </div>
              <CardContent>
                <Typography gutterBottom variant="h2" align="center">
                  {tile.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" align="center">
                  {tile.description}
                </Typography>
              </CardContent>
              <CardActions className={classes.actionContainer}>
                <Button color="primary" variant="contained">
                  자세히보기
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
  );
}