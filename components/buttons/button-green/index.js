import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, useTheme } from '@material-ui/core';
import { useStyles } from './styles';

const ButtonGreen = (props) => {
  const styles = useStyles();
  const theme = useTheme();

  useEffect(() => {
    console.log(theme);
  }, []);

  return (
    <Button className={styles[props.variant]}>
      {props.title}
    </Button>
  );
};

ButtonGreen.defaultProps = {
  title: 'button',
  variant: 'contained'
};

ButtonGreen.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.oneOf(['contained', 'outlined'])
};

export default ButtonGreen;
