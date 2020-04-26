import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root:{
        width:'100%'
    }
}))

export default function TabPanel(props) {
    const { children, value, index, ...other } = props;

    const classes = useStyles()
  
    return (

      <Typography
        className={classes.root}
        component="div"
        role="tabpanel"
        hidden={value !== index}
        {...other}
      >
        {value === index && <Box display="flex" alignItems="center" justifyContent="center" p={3}>{children}</Box>}
      </Typography>
    );
  }
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};