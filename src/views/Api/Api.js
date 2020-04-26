import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Sidebar } from 'layouts/components';
import React from 'react';
import { Budget, LatestOrders, LatestProducts, LatestSales, TasksProgress, TotalProfit, TotalUsers, UsersByDevice } from '../Dashboard/components';
import { SidebarNavigation, ApiDetail } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    [theme.breakpoints.up('lg')]:{
      marginLeft:240
    }
  }
}));

const Api = () => {
  const classes = useStyles();
  const navCallback = (value) => {
    alert(value);
  };

  return (
    <div className={classes.root}>
      <Sidebar>
        <SidebarNavigation callback={navCallback} />
      </Sidebar>
      <ApiDetail />
      <ApiDetail />
      <ApiDetail />
      <ApiDetail />
      <ApiDetail />
      <ApiDetail />
    </div>
  );
};

export default Api;
