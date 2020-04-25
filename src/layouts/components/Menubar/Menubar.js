import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton, Tooltip, Button } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import MenuBook from '@material-ui/icons/MenuBook';
import People from '@material-ui/icons/People';
import Info from '@material-ui/icons/Info';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#EEE",
    height:30
  },
  menuButton: {
    borderRadius: 50,
    fontSize: 11,
    paddingLeft:10,
    paddingRight:10,
    [theme.breakpoints.up('md')]: {
      marginLeft:15,
      marginRight:15
    }
  },
  menuIcon: {
    fontSize: 17,
    marginRight: 3
  }
}));

const Menubar = props => {
  const { className, currentLocation, ...rest } = props;

  const classes = useStyles();

  const setContained = (value) => {
    return currentLocation.startsWith(value) ? "contained" : "text";
  }

  return (
    <div className={classes.root}>
      <Tooltip title="API 메뉴얼">
        <Button variant={setContained("/home")} className={classes.menuButton} color="secondary" disableElevation size="small">
          <DeveloperBoardIcon className={classes.menuIcon} /> API
        </Button>
      </Tooltip>
      <Tooltip title="데이터 분석플랫폼">
        <Button variant={setContained("/analytics")} className={classes.menuButton} color="secondary" disableElevation>
          <AssessmentOutlinedIcon className={classes.menuIcon} /> 분석플랫폼
        </Button>
      </Tooltip>
      <Tooltip title="데이터분석 테크 블로그">
        <Button variant={setContained("/blog")} className={classes.menuButton} color="secondary" disableElevation>
          <MenuBook className={classes.menuIcon} /> Blog
        </Button>
      </Tooltip>
      <Tooltip title="코스콤 마켓플레이스 소개">
        <Button variant={setContained("/about")} className={classes.menuButton} color="secondary" disableElevation>
          <People className={classes.menuIcon} /> 소개
        </Button>
      </Tooltip>
      <Tooltip title="FAQ, 문의사항">
        <Button variant={setContained("/info")} className={classes.menuButton} color="secondary" disableElevation>
          <Info className={classes.menuIcon} /> 이용안내
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
