// encabezado, nombre del participanete, texto, redes, hastag de la conferencia
import React from 'react';
import confLogo from '../images/badge-header.svg'


class Badge extends React.Component {
    render() { //es obligatorio
      return <div>
        <div>
            <img src = {confLogo} alt = "logo de la conferencia" /> 
            {/* el conflogo es un prop */}
        </div>

        <div>
            <img src = "https://www.gravatar.com/avatar?d=identicon" alt = "Avatar" />
            <h1>
                Rafael <br/>Cabrera 
            </h1>
        </div>

        <div>
            <p>Frontend Developer</p>
            <p>@rafaelcabrera</p>
        </div>

        <div>
            #platziconf
        </div>
      </div>;
       
    }
}

export default Badge;