import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { ApiToolbar, ApiCard } from './components';
import mockData from './apiCardData';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
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

  const {callback, ...rest} = props;

  const classes = useStyles();

  const [apis] = useState(mockData);



  return (
    <div className={classes.root}>
      <ApiToolbar />
      <div className={classes.content}>
        <Grid
          container
          spacing={3}
        >
          {apis.map(api => (
            <Grid
              item
              key={api.id}
              lg={12}
              md={12}
              xs={12}
            >
              <Link onClick={() => callback(api.id)}>
                <ApiCard api={api}/>
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
      <div className={classes.pagination}>
        <Typography variant="caption">1-6 of 20</Typography>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ApiCardList;