import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';


const useStyles = makeStyles((theme) => ({
  
}));

export default function BlogDetailHtml(props) {
  
  const { title , source } = props;

  // const classes = useStyles();

  const autoHeight = (event) => {
    const frame = event.target;
    const sub = frame.contentDocument ? frame.contentDocument : frame.contentWindow.document;
    frame.height = sub.body.scrollHeight;
  }

  return (
    <iframe onLoad={autoHeight} src={source} style={{width:'100%',border:0}}/>
  );
}

BlogDetailHtml.propTypes = {
  title: PropTypes.string,
};