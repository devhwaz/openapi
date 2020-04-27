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
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(4),
      [theme.breakpoints.down("md")]:{
        padding:0
      }
    },
    title: {
      marginBottom: theme.spacing(4)
    },
    section: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4)
    },
    divider: {
        height:3,
        backgroundColor:palette.koscomLight
    },
    table: {
      
    },
    code: {
      borderRadius:10
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
      <div className={classes.title}>
        <Typography variant="h3" gutterBottom>{data.title}</Typography>
        <Typography variant="subtitle2" gutterBottom>{data.description}</Typography>
        <Divider className={classes.divider} />
      </div>
      <div className={classes.section}>
        <Typography variant="h4" gutterBottom>■ 기본정보</Typography>
        
      </div>
      <div className={classes.section}>
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
              {data.request.queryParameters.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.title}</TableCell>
                  <TableCell align="center">{row.type}</TableCell>
                  <TableCell align="left">{row.description}</TableCell>
                  <TableCell align="center">{row.required? "O" : "X"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className={classes.section}>
        <Typography variant="h4" gutterBottom>■ 응답결과</Typography>
        <TableContainer component={Paper}>
          <Table size="small" className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">키</TableCell>
                <TableCell align="center">명칭</TableCell>
                <TableCell align="center">타입</TableCell>
                <TableCell align="center">설명</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.response.parameters.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.title}</TableCell>
                  <TableCell align="center">{row.type}</TableCell>
                  <TableCell align="left">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className={classes.section}>
        <Typography variant="h4" gutterBottom>■ 요청샘플</Typography>
        <Highlight className={clsx('bash', classes.code)}>
          {data.request.sample}
        </Highlight>
      </div>
      <div className={classes.section}>
        <Typography variant="h4" gutterBottom>■ 응답샘플</Typography>
        <Highlight className={clsx('json', classes.code)}>
          {JSON.stringify(data.response.sample, null, '  ' )}
        </Highlight>
      </div>
    </div>
  );
}