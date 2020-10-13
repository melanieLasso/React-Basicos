import React from 'react';

const Footer = ({fecha}) => ( //Cuando se declara el componente como expresion no es necesario el return solo () sin {}
        <footer>
            <p>Todos los derechos reservados &copy; {fecha}</p>
        </footer>
    );  

export default Footer;