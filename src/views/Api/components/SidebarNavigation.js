import { Typography, Divider } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { makeStyles } from '@material-ui/core/styles';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import PowerIcon from '@material-ui/icons/Power';
import ShopTwoIcon from '@material-ui/icons/ShopTwo';
import TimelineIcon from '@material-ui/icons/Timeline';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function SidebarNavigation(props) {

  const { callback, ...rest } = props;

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          <Typography variant="subtitle2" gutterBottom align="center">KOSCOM API 서비스</Typography>
          <Divider style={{marginBottom:15}}/>
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button selected onClick={() => callback("service_connection")}>
        <ListItemIcon>
          <PowerIcon />
        </ListItemIcon>
        <ListItemText primary="서비스 연결" />
      </ListItem>

      <ListItem button onClick={() => callback("account_service")}>
        <ListItemIcon>
          <AccountBalanceWalletIcon />
        </ListItemIcon>
        <ListItemText primary="계좌 서비스" />
      </ListItem>

      <ListItem button onClick={() => callback("order_service")}>
        <ListItemIcon>
          <ShopTwoIcon />
        </ListItemIcon>
        <ListItemText primary="주문 서비스" />
      </ListItem>

      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <TimelineIcon />
        </ListItemIcon>
        <ListItemText primary="시세 서비스" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} onClick={() => callback("stock_price")}>
            <ListItemIcon>
              <ArrowRightRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="주식 시세" />
          </ListItem>
          <ListItem button className={classes.nested} onClick={() => callback("future_price")}>
            <ListItemIcon>
              <ArrowRightRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="선물 시세" />
          </ListItem>
          <ListItem button className={classes.nested} onClick={() => callback("option_price")}>
            <ListItemIcon>
              <ArrowRightRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="옵션 시세" />
          </ListItem>
        </List>
      </Collapse>
      
      <ListItem button onClick={() => callback("fundamental")}>
        <ListItemIcon>
          <LocalAtmIcon />
        </ListItemIcon>
        <ListItemText primary="재무 서비스" />
      </ListItem>

      <ListItem button onClick={() => callback("fundamental")}>
        <ListItemIcon>
          <LocalAtmIcon />
        </ListItemIcon>
        <ListItemText primary="재무 서비스" />
      </ListItem><ListItem button onClick={() => callback("fundamental")}>
        <ListItemIcon>
          <LocalAtmIcon />
        </ListItemIcon>
        <ListItemText primary="재무 서비스" />
      </ListItem><ListItem button onClick={() => callback("fundamental")}>
        <ListItemIcon>
          <LocalAtmIcon />
        </ListItemIcon>
        <ListItemText primary="재무 서비스" />
      </ListItem><ListItem button onClick={() => callback("fundamental")}>
        <ListItemIcon>
          <LocalAtmIcon />
        </ListItemIcon>
        <ListItemText primary="재무 서비스" />
      </ListItem><ListItem button onClick={() => callback("fundamental")}>
        <ListItemIcon>
          <LocalAtmIcon />
        </ListItemIcon>
        <ListItemText primary="재무 서비스" />
      </ListItem><ListItem button onClick={() => callback("fundamental")}>
        <ListItemIcon>
          <LocalAtmIcon />
        </ListItemIcon>
        <ListItemText primary="재무 서비스" />
      </ListItem><ListItem button onClick={() => callback("fundamental")}>
        <ListItemIcon>
          <LocalAtmIcon />
        </ListItemIcon>
        <ListItemText primary="재무 서비스" />
      </ListItem><ListItem button onClick={() => callback("fundamental")}>
        <ListItemIcon>
          <LocalAtmIcon />
        </ListItemIcon>
        <ListItemText primary="재무 서비스" />
      </ListItem><ListItem button onClick={() => callback("fundamental")}>
        <ListItemIcon>
          <LocalAtmIcon />
        </ListItemIcon>
        <ListItemText primary="재무 서비스" />
      </ListItem>
    </List>
  );
}