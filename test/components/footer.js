import React from 'react';
import PropTypes from 'prop-types';
import NavbarItems from './navbar-item';

// en header.js le habíamos pasado un array, aquí es donde indicamos que Navbar recibirá ese parámetro

   const Navbar = ({arrayOfString}) =>  {
        return (
            <div>
              {arrayOfString.map((e) =>
                <NavbarItems datosString = {e}
                key = {e}
                 />
              )}
           </div>

           // Los parámetros recibidos en el navbar, debemos pasarlo a navbar-item.js, quién es el encargado de renderizar cada elemento, pero al ser un array este se debe iterar y pasar solo el componente como parámetro /datosString = {e} => inicio, misión
      )
 }

 Navbar.propTypes = {
   arrayOfString : PropTypes.arrayOf(PropTypes.string).isRequired
 }

export default Navbar
