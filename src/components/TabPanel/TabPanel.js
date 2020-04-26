import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';

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