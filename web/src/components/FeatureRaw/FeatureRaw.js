// React
import React from 'react';

// PropTypes
import PropTypes from 'prop-types';

// CLSX
import clsx from 'clsx';

// Material
import { Icon, Typography } from '@material-ui/core';

const FeatureRaw = (props) => {
  // Variables
  const { classes, iconLigature, iconOutlined = true, text } = props;
  const iconClass = clsx(
    classes.icon,
    iconOutlined && 'material-icons-outlined'
  );

  // JSX
  const view = (
    <div className={classes.root}>
      <Icon className={iconClass} color="primary">
        {iconLigature}
      </Icon>
      <Typography>{text}</Typography>
    </div>
  );

  return view;
};

// Typechecking
FeatureRaw.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }),
  iconLigature: PropTypes.string.isRequired,
  iconOutlined: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

// Dynamic styling
FeatureRaw.styledAs = 'FeatureRaw';

export default FeatureRaw;
