import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import {useMediaQuery} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import React from 'react';
import { useTheme } from '@material-ui/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    [theme.breakpoints.down("md")]:{
      flexDirection:"column"
    }
  },
  gridItem:{
    height:"300px !important",
    [theme.breakpoints.down("md")]:{
    width:"100% !important"
    }
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  }
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

const tileData = [
    {
      img: '/images/banners/account.jpg',
      title: '계좌 서비스',
      description: '금융투자회사가 제공하는 계좌기반 API',
      cols: 2,
      featured: true,
    },
    {
      img: '/images/banners/stock.jpg',
      title: '시세 서비스',
      description: '주식,선물,옵션등 주요 시세',
    },
    {
      img: '/images/banners/finance.jpg',
      title: '재무정보',
      description: '위버플, NICE, FABOT 제공 재무정보',
    },
    {
      img: '/images/banners/analytics.jpg',
      title: '분석 서비스',
      description: 'BC카드 업종정보, RA, BIGBOT',
      featured: true,
    }
];

export default function SingleLineGridList(props) {
  const classes = useStyles();

  const theme = useTheme();

  return (
      <GridList className={classes.gridList} cols={4}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} className={classes.gridItem}>
            <img src={tile.img} alt={tile.title} style={{height:"100%"}}/>
            <GridListTileBar
              title={tile.title}
              subtitle={<span>{tile.description}</span>}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <ArrowForwardRoundedIcon className={classes.icon} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
  );
}