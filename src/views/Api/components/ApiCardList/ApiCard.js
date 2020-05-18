import { Card, CardActionArea, CardActions, CardContent, CardHeader, Chip, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {},
  cardHeader: {
    backgroundColor:theme.palette.divider
  },
  cardContent: {
    paddingLeft:theme.spacing(2),
    minHeight:80
  },
  statsItem: {
    display: 'flex',
    alignItems: 'left'
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1)
  },
  chip1: {
    color:"white",
    backgroundColor: theme.palette.success.light
  },
  chip2: {
    color:"white",
    backgroundColor: theme.palette.info.light
  },
  chip3: {
    color:"white",
    backgroundColor: theme.palette.warning.light
  }
}));

const ApiCard = props => {
  const { className, api, navigate, ...rest } = props;
  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardActionArea onClick={() => navigate(api.id)}>
      <CardHeader
        className={classes.cardHeader}
        avatar={<img src="/images/logos/koscom_arrow.png" width="11px"/>}
        title={api.title}
        titleTypographyProps={{variant:"h4"}}
      />
      <CardContent className={classes.cardContent}>
        <Typography
          align="left"
          variant="body1"
        >
          {api.description}
        </Typography>
      </CardContent>
      
      <Divider />
      <CardActions>
        <Chip className={classes.chip1} label={api.tags[0]} />
        <Chip className={classes.chip2} label={api.tags[1]} />
        <Chip className={classes.chip3} label={api.tags[2]} />
      </CardActions>
      </CardActionArea>
    </Card>
  );
};

ApiCard.propTypes = {
  className: PropTypes.string,
  api: PropTypes.object.isRequired
};

export default ApiCard;
