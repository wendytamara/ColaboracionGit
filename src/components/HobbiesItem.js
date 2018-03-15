import React from 'react';
import PropTypes from 'prop-types';

const HobbiesItem = ({datostring}) => (
     <a>{datostring}</a>
    )
HobbiesItem.PropTypes={
    datostring: PropTypes.string.isRequired
}
export default HobbiesItem
