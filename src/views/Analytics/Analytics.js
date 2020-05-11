import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Grid, Typography, List, ListItem, ListItemText, ListItemIcon, Paper } from "@material-ui/core";
import ReactPlayer from 'react-player';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.container,
    margin:theme.spacing(4,0)
  },
  listIcon: {
    color:theme.palette.koscomMain
  }
}));


export default function Analytics(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={12} align="center">
          <Typography variant="h2">"금년말, 코스콤만이 제공 할 수 있는 금융 데이터, 대화식 분석환경을 제공합니다."</Typography>
          <Typography variant="h4" align="center" style={{margin:"70px 0px"}}>다양하고 편리한 데이터 액세스, 커스터마이징된 시각화 도구를 갖춘,<br/>IPython Notebook 환경을 통해 백 테스트 및 실시간 거래 결과에 대한 분석이 가능합니다</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <List component="div">
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlinedIcon className={classes.listIcon}/>
              </ListItemIcon>
              <ListItemText>
                <Typography variant="subtitle1" align="left" gutterBottom >별도의 설치 또는 설정 필요 없이 브라우저를 통해 바로 IPython Notebook 사용이 가능합니다.</Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlinedIcon className={classes.listIcon} />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="subtitle1" align="left" gutterBottom >차트 및 플로팅 도구를 사용하여 가격 및 기본 데이터의 패턴을 찾으십시오.</Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlinedIcon className={classes.listIcon} />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="subtitle1" align="left" gutterBottom >Analytics에서 백 테스트하기 전에 알고리즘의 가장 복잡한 부분을 빠르게 반복하십시오.</Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlinedIcon className={classes.listIcon} />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="subtitle1" align="left" gutterBottom >커뮤니티에서 공유 된 노트북에서 새로운 코딩 및 데이터 분석 기술을 배우세요</Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
            <ReactPlayer url='/videos/analytics_mp.mp4' playing width="100%" loop={true}/>
        </Grid>
      </Grid>
    </div>
  );
}
