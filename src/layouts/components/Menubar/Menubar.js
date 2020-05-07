import { Button, Tooltip } from '@material-ui/core';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import Info from '@material-ui/icons/Info';
import MenuBook from '@material-ui/icons/MenuBook';
import People from '@material-ui/icons/People';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    
    height:30
  },
  menuButton: {
    borderRadius: 5,
    fontSize: 11,
    paddingLeft:10,
    paddingRight:10,
    [theme.breakpoints.up('md')]: {
      marginLeft:15,
      marginRight:15
    }
  },
  transparentText: {
    color:"white"
  },
  menuIcon: {
    fontSize: 17,
    marginRight: 3
  }
}));

const Menubar = props => {
  const { className, currentLocation, transparent, ...rest } = props;

  const classes = useStyles();

  const buttonClasses = clsx({
    [classes.transparentText]:transparent,
    [classes.menuButton]:true
  });

  const setContained = (value) => {
    return currentLocation.startsWith(value) ? "contained" : "text";
  }

  return (
    <div className={classes.root}>
      <Tooltip title="API 메뉴얼">
        <Button href="/api" variant={setContained("/api")} className={buttonClasses} color="secondary" disableElevation size="small">
          <DeveloperBoardIcon className={classes.menuIcon} /> API
        </Button>
      </Tooltip>
      <Tooltip title="데이터 분석플랫폼">
        <Button href="/analytics" variant={setContained("/analytics")} className={buttonClasses} color="secondary" disableElevation>
          <AssessmentOutlinedIcon className={classes.menuIcon} /> Analytics
        </Button>
      </Tooltip>
      <Tooltip title="데이터분석 테크 블로그">
        <Button href="/blog" variant={setContained("/blog")} className={buttonClasses} color="secondary" disableElevation>
          <MenuBook className={classes.menuIcon} /> Blog
        </Button>
      </Tooltip>
      {/* <Tooltip title="코스콤 마켓플레이스 커뮤니티">
        <Button href="/community" variant={setContained("/community")} className={buttonClasses} color="secondary" disableElevation disabled>
          <People className={classes.menuIcon} /> Community
        </Button>
      </Tooltip> */}
      <Tooltip title="소개, FAQ, 문의사항">
        <Button href="/info" variant={setContained("/info")} className={buttonClasses} color="secondary" disableElevation>
          <Info className={classes.menuIcon} /> About
        </Button>
      </Tooltip>
    </div>
  );
};

Menubar.propTypes = {
  className: PropTypes.string,
  currentLocation: PropTypes.string
};

export default Menubar;
