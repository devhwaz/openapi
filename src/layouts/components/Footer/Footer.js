import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Link, Grid, Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0)
  },
  logoContainer: {
    paddingLeft: 3,
    [theme.breakpoints.up('md')]: {
      paddingLeft: 150
    }
  },
  logo: {
    padding:"20px 0px"
  },
  item: {
    paddingBottom:"5px",
    display:"block"
  },
  itemRight: {
    paddingTop:"20px",
    display:"block",
    paddingRight:3,
    [theme.breakpoints.up('md')]: {
      paddingRight: 150
    }
  }
}));

const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      
      <Grid container>
        <Grid item xs={12}>
          <Divider variant="middle" style={{height:5}}/>
        </Grid>
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
