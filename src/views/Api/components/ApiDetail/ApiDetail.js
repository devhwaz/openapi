import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import { Typography, Divider, IconButton } from '@material-ui/core';
import palette from 'theme/palette';
import Highlight from 'react-highlight';
import clsx from 'clsx';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { urlReplacer, flattenData } from 'common/utils';
import MaterialTable from 'material-table';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import { useTheme } from '@material-ui/styles';
import { Toolbar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(4),
      [theme.breakpoints.down("md")]:{
        padding:0
      }
    },
    title: {
      marginBottom: theme.spacing(1)
    },
    section: {
      marginBottom: theme.spacing(3)
    },
    divider: {
        height:3,
        backgroundColor:palette.koscomLight
    },
    table: {
      boxShadow: theme.shadows[1]
    },
    code: {
      fontFamily:"roboto",
      borderRadius:10,
      whiteSpace: "break-spaces",
      overflowWrap: "anywhere"
    },
    chip: {
      backgroundColor:theme.palette.customblue
    },
    leftpad: {
      paddingLeft: theme.spacing(2)
    }
  }));

export default function ApiDetail(props) {
  const {data, navigate, ...rest} = props
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h2" gutterBottom component="span">({data.category}) {data.title}</Typography>
        <Divider className={classes.divider} />
      </div>
      <div className={classes.section}>
        <Toolbar><Typography variant="h4">■ 기본정보</Typography></Toolbar>
        
        <div style={{display:"flex", alignItems:"center"}}>
        <Chip className={classes.chip} label={data.request.method}/>
        &nbsp;
        <Typography variant="h5">{data.request.urlFormat} </Typography>
        </div>
        <br/>
        <Typography variant="h5" gutterBottom>{data.description}</Typography>
      </div>
      <div className={classes.section}>
        <MaterialTable
          components={{
            Container: props => <Paper {...props} elevation={0}/>
          }}
          title={<Typography variant="h4">■ 요청헤더</Typography>}
          data={data.request.headers}
          columns={[
            { title: '키', field: 'name' },
            { title: '명칭', field: 'title' },
            { title: '설명', field: 'description'},
            { title: '필수', field: 'required', render: rowData => rowData.required? "O" : "X"},
            { title: '기본값', field: 'default'},
            { title: '옵션', field: 'remarks', render:rowData => rowData.remarks.map((d,index) => <li key={index}>{d}</li>)}
          ]}
          options={{
            paging: false,
            padding: "dense",
            defaultExpanded :true
          }}
        />
      </div>
      <div className={classes.section}>
        <MaterialTable
          components={{
            Container: props => <Paper {...props} elevation={0}/>
          }}
          title={<Typography variant="h4">■ URL Path 요청인자</Typography>}
          data={data.request.parameters.path}
          columns={[
            { title: '키', field: 'name' },
            { title: '명칭', field: 'title' },
            { title: '타입', field: 'type' },
            { title: '설명', field: 'description'},
            { title: '옵션', field: 'remarks', render:rowData => rowData.remarks.map((d,index) => <li key={index}>{d}</li>)}
          ]}
          options={{
            paging: false,
            padding: "dense",
            defaultExpanded :true
          }}
        />
      </div>
      <div className={classes.section}>
        <MaterialTable
          components={{
            Container: props => <Paper {...props} elevation={0}/>
          }}
          title={<Typography variant="h4">■ URL Query 요청인자</Typography>}
          data={data.request.parameters.query}
          columns={[
            { title: '키', field: 'name' },
            { title: '명칭', field: 'title' },
            { title: '타입', field: 'type' },
            { title: '설명', field: 'description'},
            { title: '필수', field: 'required', render: rowData => rowData.required? "O" : "X"},
            { title: '기본값', field: 'default'},
            { title: '옵션', field: 'remarks', render:rowData => rowData.remarks.map((d,index) => <li key={index}>{d}</li>)}
          ]}
          options={{
            paging: false,
            padding: "dense",
            defaultExpanded :true
          }}
        />
      </div>
      <div className={classes.section}>
        <MaterialTable
          components={{
            Container: props => <Paper {...props} elevation={0}/>
          }}
          title={<Typography variant="h4">■ Body 요청인자</Typography>}
          data={flattenData(data.request.parameters.body, "attributes")}
          columns={[
            { title: '키', field: 'name' },
            { title: '명칭', field: 'title' },
            { title: '타입', field: 'type' },
            { title: '설명', field: 'description'},
            { title: '필수', field: 'required', render: rowData => rowData.required? "O" : "X"},
            { title: '기본값', field: 'default'},
            { title: '옵션', field: 'remarks', render:rowData => rowData.remarks.map((d,index) => <li key={index}>{d}</li>)}
          ]}
          options={{
            paging: false,
            padding: "dense",
            defaultExpanded :true
          }}
        />
      </div>
      <div className={classes.section}>
        <Toolbar><Typography variant="h4">■ 요청샘플</Typography></Toolbar>
        <Highlight className={clsx('bash', classes.code)}>
          <p>curl \</p>
          <p className={classes.leftpad}>-i \</p>
          {
            Object.keys(data.request.sample.headers).map((k,index) => 
              <p key={index} className={classes.leftpad}>-H "{k}:{data.request.sample.headers[k]}" \</p>
            )
          }
          <p className={classes.leftpad}>-X {data.request.method}</p>
          {data.request.method !== "GET" && Object.keys(data.request.sample.parameters.body).length > 0 &&
            <p className={classes.leftpad}>-d '{JSON.stringify(data.request.sample.parameters.body, null, '')}' \</p>
          }
          <p className={classes.leftpad}>
            {data.request.sample.baseUrl}
            {encodeURI(urlReplacer(data.request.urlFormat, data.request.sample.parameters.path, data.request.sample.parameters.query))}
          </p>
        </Highlight>
      </div>
        {Object.keys(data.response).map( (rescode, index) => 
          <div className={classes.section} key={index}>
            <Toolbar>
              <Typography variant="h4" gutterBottom>■ 응답코드({rescode})</Typography>
            </Toolbar>
            <Typography variant="h5">{data.response[rescode].description}</Typography>
              <div>
                {rescode == "200" &&
                  <div>
                    <MaterialTable
                      components={{
                        Container: props => <Paper {...props} elevation={0}/>
                      }}
                      title=""
                      data={flattenData(data.response[rescode].schema, "attributes")}
                      columns={[
                        { title: '키', field: 'name' },
                        { title: '명칭', field: 'title' },
                        { title: '타입', field: 'type' },
                        { title: '설명', field: 'description'},
                        { title: '옵션', field: 'remarks', render:rowData => rowData.remarks.map((d,index) => <li key={index}>{d}</li>)}
                      ]}
                      parentChildData={(row, rows) => rows.find(r => r.id === row.parent)}
                      options={{
                        paging: false,
                        padding: "dense",
                        defaultExpanded :true
                      }}
                      onTreeExpandChange={(data) => console.log(data)}
                    />
                    <br/>
                    <Highlight className={clsx('json', classes.code)}>
                      {JSON.stringify(data.response[rescode].sample, null, '  ' )}
                    </Highlight>
                  </div>
                }
              </div>
          </div>
        )}
    </div>
  );
}