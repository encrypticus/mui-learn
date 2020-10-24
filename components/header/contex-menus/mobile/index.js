import React from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';

export const MobileMenu = ({ anchorEl, open, profileMenuOpen, onClose }) => (
  <Menu
    anchorEl={anchorEl}
    open={open}
    onClose={onClose}
    keepMounted
    getContentAnchorEl={null}
    anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
    transformOrigin={{
      vertical: 'center',
      horizontal: 'center',
    }}
  >
    <MenuItem onClick={profileMenuOpen}>
      Авторизация
    </MenuItem>
  </Menu>
);

MobileMenu.propTypes = {
  anchorEl: PropTypes.any,
  open: PropTypes.bool.isRequired,
  profileMenuOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};