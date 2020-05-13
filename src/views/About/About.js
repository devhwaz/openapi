import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.container,
    margin:theme.spacing(4,0)
  },
  quote: {
    margin:theme.spacing(8,0),
    paddingLeft:30,
    borderLeft:"10px solid "+theme.palette.divider
  }
}));


export default function About(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={12} align="center">
          <Typography variant="h2">코스콤 API 서비스 소개</Typography>
          <Typography variant="h4" align="left" className={classes.quote}>코스콤 API는 자본시장의 모든 데이터를 자유롭게 유통하여 
                  <br/>자본시장의 발전에 기여하기 위한 종합 데이터 유통 마켓플레이스 입니다.
                  <br/>
                  <br/>국내 유일의 글로벌 자본시장 특화 투자 및 분석 데이터 제공 마켓플레이스 입니다.
                  <br/>
                  <br/>코스콤만의 자본시장에 특화된 인공지능 분석 툴을 통한 다양한 분석 데이터를 제공하고 있으며
                  <br/>여러 기관들이 생성한 데이터를 API를 통하여 게시를 하고 필요한 기관들이 편리하게 사용 할 수 있도록 하는
                  <br/><b>종합 데이터 유통 플랫폼</b>을 지향합니다.
                  <br/>
                  <br/>부가적으로 투자분석 정보를 이용하여 주문까지도 가능한 서비스 입니다.
                  <br/>본 마켓플레이스는 누구나 참여하여 자유롭게 데이터를 이용하여 새로운 서비스를 만들고
                  <br/>그 분석데이터를 다시 본 마켓플레이스에 제공하여 데이터 유통의 선순환 구조를 만들고자 합니다.
                  <br/>
                  <br/>많은 이용 바랍니다.</Typography>
        </Grid>
        {/* <Grid item xs={12} md={3}>
          <Typography variant="h3" style={{display:"flex"}}><EmailIcon />&nbsp;제휴문의</Typography>
          <Typography variant="subtitle1" gutterBottom>open@koscom.co.kr</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h3" style={{display:"flex"}}><EmailIcon />&nbsp;신규 데이터 요청</Typography>
          <Typography variant="subtitle1">developers@koscom.co.kr</Typography>
        </Grid> */}
      </Grid>
    </div>
  );
}
