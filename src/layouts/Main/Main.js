import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

import { Topbar } from './components';
import { Footer } from '../components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    height: '100%'
  }
}));

const Main = props => {
  const { children, sidebar, fixedTopbar } = props;

  const classes = useStyles();

  return (
    <div
      className={clsx({
        [classes.root]: true
      })}
    >
      <Topbar
        currentLocation={children.props.location.pathname}
        fixedTopbar={fixedTopbar}/>
      <main className={classes.content}>
        {children}
        <Footer sidebar={sidebar} />
      </main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
