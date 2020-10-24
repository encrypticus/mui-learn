import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  menuButton: {
    display: 'none',
    marginLeft: 'auto',
    color: theme.palette.common.white,
    [theme.breakpoints.down('601')]: {
      display: 'block'
    }
  }
}));
