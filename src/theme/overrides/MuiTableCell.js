import palette from '../palette';
import typography from '../typography';

export default {
  root: {
    ...typography.body1,
    borderBottom: `1px solid ${palette.divider}`,
    
  },
  head: {
    color: palette.black,
    fontWeight:1000
  },
  sizeSmall: {
    paddingTop:3,
    paddingBottom:3,
    borderRight:`1px solid ${palette.divider}`,
    '&:last-child':{
      borderRight:0
    }
  }

};
