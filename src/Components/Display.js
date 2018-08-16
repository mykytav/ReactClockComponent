import React from 'react';
import PropTypes from 'prop-types';

import DateTime from '../helpers/DateTime';

const Display = props => (
  <div className="Display">
    <span className="Display__time">{DateTime.timeToTime(props.date)}</span>
    {props.showDate && (
      <span className="Display__date">{DateTime.timeToDate(props.date)}</span>
    )}
  </div>
);

Display.defaultProps = {
  date: new Date(),
  showDate: true
};

Display.propTypes = {
  date: PropTypes.object.isRequired,
  showDate: PropTypes.bool.isRequired
};

export default Display;
