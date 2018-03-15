import React from 'react';
import Navbar from './Navbar';

const datosEspañol=['inico ', ' nosotros', ' mision'];

const datosIngles=['Wellcome','Us','They']

const Header = () => (
    <div>
    <Navbar arrayOfString={datosEspañol} />
    </div>

)


export default Header