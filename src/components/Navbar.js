import React from 'react';
import PropTypes from 'prop-types';
import NavbarItems from './NavbarItem';


const Navbar = ({arrayOfString}) => {
return  (
    <div className="navbar">
    {arrayOfString.map(e =>
     <NavbarItems 
     datostring ={e}
     key={e}
     />
    )}
    </div>
)
}

Navbar.propTypes={
    arrayOfString : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Navbar