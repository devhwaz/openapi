import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Sidebar } from 'layouts/components';
import React from 'react';
import { Budget, LatestOrders, LatestProducts, LatestSales, TasksProgress, TotalProfit, TotalUsers, UsersByDevice } from '../Dashboard/components';
import { SidebarNavigation, ApiDetail } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    [theme.breakpoints.up('lg')]:{
      marginLeft:240
    },
    [theme.breakpoints.down('md')]:{
      padding:theme.spacing(3)
    }
  }
}));

const apiDataSample = 
  {
    title:"배당에 관한 사항",
    description:"배당에 관한 회사의 중요한 정책, 배당의 제한에 관한 사항 등 배당에 대한 전반적인 사항을 기재한다. 최근 3사업연도중 배당금총액, 배당성향, 배당수익률, 주당 배당금 등을 다음의 표에 따라 기재하되, 내용에 대한 부가적인 설명이나 그 밖의 정보는 별도로 기술한다.",
    request:{
      method:"GET",
      urlFormat:"https://{APIGWAddr}/v2/market/stocks/{marketcode}/lists",
      pathParameters:[
        { name:"marketcode", type:"string", title:"시장구분", description:"kospi, kosdaq중 시장 코드를 입력", required:true }
      ],
      queryParameters:[
        { name:"crtfc_key", type:"string", title:"API 인증키", description:"발급받은 인증키(40자리)", required:true },
        { name:"corp_code", type:"string", title:"고유번호", description:"공시대상 회사의 고유번호(8자리)", required:true },
        { name:"bsns_year", type:"string", title:"사업연도", description:"사업연도(4자리)"},
        { name:"reprt_code", type:"string", title:"보고서 코드", description:"1분기보고서 : 11013, 반기보고서 : 11012, 3분기보고서 : 11014, 사업보고서 : 11011"}
      ],
      sample:`curl --include --header "apikey:l7xx230ef2235e3xxxxxc982eb192ac98e206" \
      --request GET \
      'https://sandbox-apigw.koscom.co.kr/v2/market/stocks/kospi/lists'`
    },
    response:{
      parameters :[
        { name:"trdDd", type:"string", title:"일자", description:"체결일자, 거래일자, 매매일자"},
        { name:"isuLists", type:"string", title:"종목리스트", description:"공시대상 회사의 고유번호(8자리)", required:true },
        { name:"isuCd", type:"string", title:"종목코드", description:"대상종목의 코드", required:true },
        { name:"isuSrtCd", type:"string", title:"종목단축코드", description:"대상종목의 단축 예) KR7000660001 → 000660", required:true },
        { name:"isuKorNm", type:"string", title:"종목 한글명", description:"종목 한글명", required:true },
        { name:"isuKorAbbrv", type:"string", title:"종목 한글 약명", description:"종목 한글 약명", required:true }
      ],
      sample:{
        trdDd: "20181228",
        mktEndTm: "1540",
        isuLists: [ 
         {
            "isuSrtCd": "000020",
            "isuCd": "KR7000020008",
            "isuKorNm": "동화약품",
            "isuKorAbbr": "동화약품",
            "map_to": "000020*001" 
         },
     
         {
            "isuSrtCd": "000030",
            "isuCd": "KR7000030007",
            "isuKorNm": "우리은행",
            "isuKorAbbr": "우리은행",
            "map_to": "000030*001" 
         },
     
         {
            "isuSrtCd": "000040",
            "isuCd": "KR7000040006",
            "isuKorNm": "KR모터스",
            "isuKorAbbr": "KR모터스",
            "map_to": "000040*001" 
         }
        ]
    }
  }
};

const Api = () => {
  const classes = useStyles();
  const navCallback = (value) => {
    alert(value);
  };

  return (
    <div className={classes.root}>
      <Sidebar>
        <SidebarNavigation callback={navCallback} />
      </Sidebar>
      <ApiDetail data={apiDataSample}/>
    </div>
  );
};

export default Api;
