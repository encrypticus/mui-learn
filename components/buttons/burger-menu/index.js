import React from 'react';
import { IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import {useStyles} from './styles';

export const BurgerMenuButton = () => {
  const classes = useStyles();

  return(
    <IconButton className={classes.burgerButton}>
    <MenuIcon className={classes.burgerIcon}/>
  </IconButton>
  );
};
