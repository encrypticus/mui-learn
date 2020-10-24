import React from 'react';
import { InputBase } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { useStyles } from './styles';

export const Search = () => {
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <SearchIcon className={classes.searchIcon}/>
      <InputBase
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        placeholder='Поиск'
      />
    </div>
  );
};