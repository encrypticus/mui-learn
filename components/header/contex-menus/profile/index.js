import React from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';

export const ProfileMenu = ({ anchorEl, open, onClose }) => (
  <Menu
    anchorEl={anchorEl}
    open={open}
    onClose={onClose}
    keepMounted
    anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
    transformOrigin={{
      vertical: 'center',
      horizontal: 'center',
    }}
    getContentAnchorEl={null}
  >
    <MenuItem onClick={onClose} data-name='signUp'>
      Регистрация
    </MenuItem>
    <MenuItem onClick={onClose} data-name='signIn'>
      Вход
    </MenuItem>
  </Menu>
);

ProfileMenu.propTypes = {
  anchorEl: PropTypes.any,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,

};
