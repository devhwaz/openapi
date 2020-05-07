import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { Menubar } from 'layouts/components';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import palette from 'theme/palette';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "transparent",
    paddingTop:10,
    transition: "all 300ms ease 0s"
  },
  content: theme.container,
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  toolbar: {
    ...theme.container,
    height:65
  },
  changeColorOnScroll :{
    backgroundColor: "white",
    boxShadow: theme.shadows[4]
  }
}));

const Topbar = props => {
  const { className, currentLocation, fixedTopbar, ...rest } = props;

  const classes = useStyles();
  
  const [transparent, setTransparent] = useState(true)

  useEffect(() => {
    if(fixedTopbar){
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes.changeColorOnScroll);
        setTransparent(false);
    } else {
      window.addEventListener("scroll", headerColorChange);
      return function cleanup() {
          window.removeEventListener("scroll", headerColorChange);
      };
    }
  });

  const changeTopbarColorScrollHeight = 100;

  const headerColorChange = () => {
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeTopbarColorScrollHeight) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes.changeColorOnScroll);
        setTransparent(false);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes.changeColorOnScroll);
        setTransparent(true);
    }
  };

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      elevation={0}
    >
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/">
          <img
            alt="Logo"
            src={transparent?"/images/logos/koscomci_light.png":"/images/logos/koscomci_dark.png"}
            width="150px"
          />
        </RouterLink>
        <div className={classes.flexGrow} />
        <Menubar currentLocation={currentLocation} transparent={transparent}/>
      </Toolbar>
      
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string
};

export default Topbar;
