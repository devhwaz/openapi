import { Typography } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor:"white",
      height:"100%",
      padding:theme.spacing(4),
      paddingBottom:0
    },
    title:{
        marginBottom:theme.spacing(2)
    },
    line: {
        display:"flex",
        alignItems:"center",
        justifyContent:"left",
        height:80
    },
    icon: {
        marginRight:theme.spacing(2),
        width:40,
        height:40,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:theme.palette.divider,
        borderRadius:100
    }
}))

const Contact = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.title} variant="h2" align="center">보다 편리한 금융IT 솔루션과<br></br>신속한 고객서비스</Typography>
            <div className={classes.line}>
                <span className={classes.icon}><PhoneIcon /></span>
                <Typography variant="subtitle1">02-767-7114</Typography>
            </div>
            <div className={classes.line}>
                <span className={classes.icon}><EmailIcon /></span>
                <Typography variant="subtitle1">developers@koscom.co.kr</Typography>
            </div>
        </div>
    );
}

export default Contact;