import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import { Menubar } from 'layouts/components';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "white",
    paddingTop:10
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  toolbar: {
    height:65,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 50
    }
  }
}));

const Topbar = props => {
  const { className, currentLocation, ...rest } = props;

  const classes = useStyles();

  const [notifications] = useState([]);

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/">
          <img
            alt="Logo"
            src="/images/logos/koscomci.png"
            width="150px"
          />
        </RouterLink>
        <div className={classes.flexGrow} />
      </Toolbar>
      <Menubar currentLocation={currentLocation}/>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string
};

export default Topbar;
