import React from 'react';

class Mapa extends React.Component {

  render() {

    return (

        <div className="embed-responsive embed-responsive-4by3">
            <iframe className="embed-responsive-item" src="https://www.google.com.uy/maps/place/G%C3%A9minis+6232,+12100+Montevideo,+Departamento+de+Montevideo/@-34.833708,-56.112765,17z/data=!3m1!4b1!4m5!3m4!1s0x95a029f9a4334341:0x2e367abdf3b4f48!8m2!3d-34.8337124!4d-56.1105763?hl=es-419"></iframe>
        </div>

    )
    
  }

}

export default Mapa;