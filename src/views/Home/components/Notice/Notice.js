import { Button, Grid, Paper, Typography, Link } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';

const useStyles = makeStyles(theme => ({
    root: {
      ...theme.container,
      backgroundColor:"white",
      padding:theme.spacing(4),
      paddingBottom:theme.spacing(1)
    },
    board: {

    },
    article: {
        paddingLeft:theme.spacing(1),
        paddingRight:theme.spacing(1)
    },
    title: {
        width:"100%"
    },
    date: {
        minWidth:80
    },
    buttonActive: {
        borderRadius:50,
        margin:theme.spacing(0,1),
        boxShadow:"none",
        "&:hover": {
            boxShadow:"none",
            backgroundColor:theme.palette.koscom.main
        }
    },
    buttonInactive: {
        borderRadius:50,
        margin:theme.spacing(0,1),
        boxShadow:"none",
        backgroundColor:theme.palette.divider,
        "&:hover": {
            boxShadow:"none",
        }
    },
    link: {
        backgroundColor:theme.palette.koscom.main,
        borderRadius:50,
        "&:hover": {
            textDecoration:"none"
        }
    }
}))

const rows = [
    createData('2019/12/07(토) 오픈플랫폼 방화벽 작업', '2019-11-29'),
    createData('2019/12/11(토) 오픈플랫폼 방화벽 작업', '2019-11-29'),
    createData('시세API 일시중단, 매주 금요일 17:50~18:10', '2019-11-27'),
    createData('시세API 일시중단, 매주 금요일 17:50~18:10', '2019-11-27')
];

function createData(title, date) {
    return { title, date };
}

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

const Notice = (props) => {

    const classes = useStyles();

    const [board, setBoard] = useState(0);

    const setNoticeBoard = () => {
        setBoard(0);
    }

    const setFaqBoard = () => {
        setBoard(1);
    }

    const createArticle = (idx, title,date) => {return(
        <ListItem className={classes.article} key={idx}>
            <ListItem button disableGutters divider={idx!=3}>
                <Typography className={classes.title} variant="subtitle2" align="left">{title}</Typography>
                <Typography className={classes.date} variant="subtitle2" align="center">{date}</Typography>
            </ListItem>
        </ListItem>
    );}

    return (
        <div className={classes.root}>
            <Button className={board==0?classes.buttonActive:classes.buttonInactive} variant="contained" color={board==0?"secondary":"default"} onClick={setNoticeBoard}>공지사항</Button>
            <Button className={board==1?classes.buttonActive:classes.buttonInactive} variant="contained" color={board==1?"secondary":"default"} onClick={setFaqBoard}>FAQ</Button>
            {
                board==0 &&
                <List className={classes.board}>
                    {rows.slice(0,4).map((data,index) => createArticle(index,data.title,data.date))}
                </List>
            }
            {
                board==1 &&
                <List className={classes.board}>
                    {rows.slice(0,4).map((data,index) => createArticle(index,data.title,data.date))}
                </List>
            }
        </div>
    );
}

export default Notice;