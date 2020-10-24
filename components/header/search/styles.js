import { makeStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/index';

export const useStyles = makeStyles(theme => ({
  searchIcon: {
    position: 'absolute',
    left: 10
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: fade(theme.palette.common.white, .15),
    borderRadius: theme.shape.borderRadius,
    paddingLeft: '40px',
    marginLeft: 'auto'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    width: 60,
    [theme.breakpoints.down('601')]: {
      width: '100%'
    },
    transition: 'width .2s',
    '&:focus': {
      width: '200px',
      [theme.breakpoints.down('601')]: {
        width: '100%'
      }
    }
  }
}));