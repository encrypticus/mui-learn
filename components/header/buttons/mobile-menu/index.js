import React from 'react';
import { IconButton } from '@material-ui/core';
import { MoreVert as MoreVertIcon } from '@material-ui/icons';
import PropTypes from 'prop-types';
import {useStyles} from './styles';

export const MobileMenuButton = ({ handleMobileMenuOpen }) => {
  const classes = useStyles();

  return (
    <IconButton
      className={classes.menuButton}
      onClick={handleMobileMenuOpen}
    >
      <MoreVertIcon/>
    </IconButton>
  );
};

MobileMenuButton.propTypes = {
  handleMobileMenuOpen: PropTypes.func.isRequired
};
