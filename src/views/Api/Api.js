import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Sidebar } from 'layouts/components';
import React, { useState } from 'react';
import { Budget, LatestOrders, LatestProducts, LatestSales, TasksProgress, TotalProfit, TotalUsers, UsersByDevice } from '../Dashboard/components';
import { SidebarNavigation, ApiDetail, ApiCardList } from './components';
import data from './sample';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('lg')]:{
      marginLeft:240
    },
    [theme.breakpoints.down('md')]:{
      padding:theme.spacing(3)
    }
  }
}));

const Api = () => {
  const classes = useStyles();

  const [cardData, setCardData] = useState({});
  const [viewApiCard, setViewApiCard] = useState(false);
  const [viewApiDetail, setViewApiDetail] = useState(false);

  var idx = 0;
  const navCallback = (id) => {
    if (id!=-1) {
      setCardData(data[id]);
      setViewApiDetail(true);
    } else {
      setViewApiDetail(false);
    }
    // if(id==1){
    //   setViewApiDetail(true);
    //   idx = 1;
    //   //get detail data
    //   // setApiDetailData(response.data);setViewDetail(true); << state
    //   // axios.get('/v1/api/getApiDetail/${idx}').then( (response) => { setApiDetailData(response.data);setViewDetail(true) } )
    // } else if(value == "view_card") {
    //   // get card list data
    //   // setApiListData << state
    //   setViewApiDetail(false);
    // }
    
  };
  return (
    <div className={classes.root}>
      <Sidebar>
        <SidebarNavigation callback={navCallback} />
      </Sidebar>
      { viewApiDetail &&
        <ApiDetail data={cardData}/>
      }
      { !viewApiDetail &&
        <ApiCardList callback={navCallback}/>
      }
    </div>
  );
};

export default Api;
