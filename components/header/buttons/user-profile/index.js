import React from 'react';
import { IconButton } from '@material-ui/core';
import { AccountBox as AccountBoxIcon } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { useStyles } from './styles';

export const UserProfileButton = ({ handleProfileMenuOpen }) => {
  const classes = useStyles();
  return (
    <IconButton
      className={classes.userButton}
      onClick={handleProfileMenuOpen}
    >
      <AccountBoxIcon className={classes.userIcon}/>
    </IconButton>
  )
};

UserProfileButton.propTypes = {
  handleProfileMenuOpen: PropTypes.func.isRequired
};
