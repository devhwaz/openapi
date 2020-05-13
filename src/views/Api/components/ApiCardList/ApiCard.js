import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Divider,
  CardHeader,
  Chip
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';

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
    backgroundColor: theme.palette.success.main
  },
  chip2: {
    color:"white",
    backgroundColor: theme.palette.info.main
  },
  chip3: {
    color:"white",
    backgroundColor: theme.palette.warning.main
  }
}));

const ApiCard = props => {
  const { className, api, ...rest } = props;
  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        className={classes.cardHeader}
        avatar={<img src="/images/logos/koscom_arrow.png" />}
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
    </Card>
  );
};

ApiCard.propTypes = {
  className: PropTypes.string,
  api: PropTypes.object.isRequired
};

export default ApiCard;
