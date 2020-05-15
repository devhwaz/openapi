import palette from '../palette';
import typography from '../typography';
import { colors } from '@material-ui/core';

export default {
  root: {
    ...typography.body1,
    borderBottom: `1px solid ${colors.grey[200]}`,
  },
  head: {
    backgroundColor: `${colors.blueGrey[300]} !important`,
    color:"white"
  },
  sizeSmall: {
    paddingTop:3,
    paddingBottom:3,
    borderRight:`1px solid ${colors.grey[300]}`,
    '&:last-child':{
      borderRight:0
    }
  }

};
