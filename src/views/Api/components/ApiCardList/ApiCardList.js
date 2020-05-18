import { Grid, IconButton, Typography } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ApiCard from './ApiCard';
import ApiCardListToolbar from './ApiCardListToolbar';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  toolbar:{
    width:"100%",
    marginBottom:theme.spacing(2)
  },
  toolbarPrimary: {
    display:"flex",
    alignItems:"center"
  },
  toolbarSecondary: {
    marginTop:theme.spacing(2),
    display:"flex",
    alignItems:"center",
    justifyContent:"right"
  },
  spacer: {
    flexGrow:1
  },
  searchInput: {
    width:370,
    [theme.breakpoints.down("sm")]:{
      width:"100%"
    }
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}));

const ApiCardList = (props) => {

  const {navigate, data, filter, setFilter, ...rest} = props;

  const classes = useStyles();

  const onSearchKeywordChange = (keyword) => {
    setFilter({
      ...filter,
      keyword:keyword
    });
  }

  const toggleAdvanceFilter = () => {
    setFilter({
      ...filter,
      showAdvance:!filter.showAdvance
    });
  }

  return (
    <div className={classes.root}>
      <ApiCardListToolbar filter={filter} setFilter={setFilter}/>
      <div className={classes.content}>
        <Grid
          container
          spacing={3}
        >
          {data.map(api => (
            <Grid
              item
              key={api.id}
              md={6}
              xs={12}
            >
              <ApiCard navigate={navigate} api={api}/>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default ApiCardList;
