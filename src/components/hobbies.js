import React from 'react';
import PropTypes from 'prop-types';
import HobbiesItem from './HobbiesItem';


const Hobbies = ({datos}) => {
return  (
    <div>
    {datos.map(e =>
     <HobbiesItem 
     datostring ={e}
     key={e}
     />
    )}
    </div>
)
}

Hobbies.propTypes={
    datos : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Hobbies