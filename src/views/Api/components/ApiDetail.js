import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography, Divider } from '@material-ui/core';
import palette from 'theme/palette';
import Highlight from 'react-highlight';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(4),
      [theme.breakpoints.down("md")]:{
        padding:0
      }
    },
    divider: {
        marginBottom:10,
        height:3,
        backgroundColor:palette.koscomLight
    },
    table: {
      
    }
  }));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function ApiDetail(props) {
  const {data, ...rest} = props
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>■ {data.title}</Typography>
      <Typography variant="subtitle2" gutterBottom>{data.description}</Typography>
      <Divider className={classes.divider} />
      <Typography variant="h4" gutterBottom>■ 기본정보</Typography>
      <Highlight className='bash'>
        {"code snippet to be highlighted"}
      </Highlight>
      <Typography variant="h4" gutterBottom>■ 요청인자</Typography>
      <TableContainer component={Paper}>
        <Table size="small" className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">키</TableCell>
              <TableCell align="center">명칭</TableCell>
              <TableCell align="center">타입</TableCell>
              <TableCell align="center">설명</TableCell>
              <TableCell align="center">필수</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}