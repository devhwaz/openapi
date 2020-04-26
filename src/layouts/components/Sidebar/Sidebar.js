import { Drawer, IconButton, useMediaQuery } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState } from 'react';


const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 105,
      height: 'calc(100% - 105px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100% - 249px)',
    padding: theme.spacing(2),
    paddingTop: theme.spacing(4)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  },
  menu: {
    position:"fixed",
    top:20,
    right:30,
    zIndex:100000

  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, children, ...rest } = props;

  const classes = useStyles();
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        classes={{ paper: classes.drawer }}
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      >
        <div
          {...rest}
          className={clsx(classes.root, className)}
        >
          {children}
        </div>
      </Drawer>
      {!isDesktop &&
        <IconButton
          className={classes.menu}
          onClick={handleSidebarOpen}
        >
          <MenuIcon />
        </IconButton>
      }
    </React.Fragment>
    
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
