import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Typography, Link, Grid, Divider, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    position:"relative",
    zIndex:theme.zIndex.appBar,
    padding:theme.spacing(4,0),
    borderTop:`5px solid ${theme.palette.divider}`
  },
  contents: theme.container
  ,
  logoContainer: {
    
  },
  logo: {
    paddingBottom:theme.spacing(2)
  },
  item: {
    paddingBottom:"5px",
    display:"block"
  },
  itemRight: {
    
    display:"block"
  }
}));

const Footer = props => {
  const { className, sidebar, ...rest } = props;

  const classes = useStyles();

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
      style={{marginLeft: sidebar && isDesktop ? 240: 0}}
    >
      <Grid container className={classes.contents}>
        <Grid item xs={6}>
          <div className={classes.logoContainer}>
          <Link
            component="a"
            href="https://www.koscom.co.kr/"
            target="_blank"
          >
            <img alt="koscom" src="/images/logos/koscom_transparent.svg"  className={classes.logo} />
          </Link>
          <Typography className={classes.item} variant="caption">
          서울시 영등포구 여의나루로 76 ㈜코스콤
          </Typography>
          <Typography className={classes.item} variant="caption" gutterBottom>
          대표전화 : 02-767-7114
          </Typography>
          <Typography className={classes.item} variant="caption">
            &copy; {1900 + new Date().getYear()}. {" "} KOSCOM CORP.
            <br></br>
            ALL RIGHTS RESERVED.
          </Typography>
          </div>
        </Grid>
        <Grid item xs={6} >
          <Typography variant="body2" align="right" className={classes.itemRight}>
            <Link
              color="inherit"
              href="https://developers.koscom.co.kr/apiresources/introServiceTerms"
              target="_blank"
            >
              서비스이용약관
            </Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link
              color="inherit"
              href="https://developers.koscom.co.kr/apiresources/person_info"
              target="_blank"
            >
              개인정보취급방침
              </Link>
          </Typography>
        </Grid>
      </Grid>
    </div >
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
