import React from 'react';
import PropTypes from 'prop-types';

const Panel = props => (
  <div className="Panel">
    Show date
    <label className="Panel__label">
      <input
        className="Panel__input"
        type="checkbox"
        checked={props.showDate}
        onChange={props.toggleDate}
      />
      <span className="Panel__slider" />
    </label>
  </div>
);

Panel.defaultProps = {
  dateOn: true,
  toggleDate: () => {}
};

Panel.propTypes = {
  dateOn: PropTypes.bool.isRequired,
  toggleDate: PropTypes.func.isRequired
};

export default Panel;
