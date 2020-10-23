import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  contained: {
    color: '#fff',
    backgroundColor: '#81c784',
    '&:hover': {
      backgroundColor: '#73b376'
    }
  },
  outlined: {
    backgroundColor: 'transparent',
    color: '#fff',
    border: '1px solid #81c784'
  },
  outline: {
    outline: '1px solid red'
  }
});
