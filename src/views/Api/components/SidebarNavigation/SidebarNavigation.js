import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PublicIcon from '@material-ui/icons/Public';
import ShopTwoIcon from '@material-ui/icons/ShopTwo';
import TimelineIcon from '@material-ui/icons/Timeline';
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Typography } from '@material-ui/core';

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

  const { navigate } = props;

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
      disablePadding
    >
      <ListItem button divider onClick={() => navigate(-1)} style={{marginBottom:16}} >
        <ListItemText align="center" primary="API 분류" primaryTypographyProps={{variant:"h3"}} style={{margin:0}}/>
      </ListItem>

      <ListItem button onClick={() => navigate(-1, "order_service")}>
        <ListItemIcon>
          <ShopTwoIcon />
        </ListItemIcon>
        <ListItemText primary="주문 서비스" />
      </ListItem>

      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <TimelineIcon />
        </ListItemIcon>
        <ListItemText primary="국내 시세" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} onClick={() => navigate(-1, "stock_price")}>
            <ListItemIcon>
              <ArrowRightRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="주식 시세" />
          </ListItem>
          <ListItem button className={classes.nested} onClick={() => navigate(-1, "future_price")}>
            <ListItemIcon>
              <ArrowRightRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="선물 시세" />
          </ListItem>
          <ListItem button className={classes.nested} onClick={() => navigate(-1, "option_price")}>
            <ListItemIcon>
              <ArrowRightRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="옵션 시세" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleOpenDialog}>
        <ListItemIcon>
          <PublicIcon />
        </ListItemIcon>
        <ListItemText primary="해외 시세" />
      </ListItem>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography variant="h3">죄송합니다</Typography>
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText id="alert-dialog-description">
            해외시세는 현재 준비중에 있습니다. 조금만 기다려 주세요.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </List>
  );
}