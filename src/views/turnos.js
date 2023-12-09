import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { TurnosServices } from "../services/turnoService";
import NavigationLinks from '../components/navigation-links';
import './turnos.css';
const TurnosGet = new TurnosServices()


const Turnos = () => {

  const [turnos, setTurnos] = useState([]);

  useEffect(() => {

    TurnosGet.getAllTurnos()
      .then(response => {
        setTurnos(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <div className="turnos-container">
      <Helmet>
        <title>Turnos - TurnoXpress</title>
        <meta property="og:title" content="Turnos - TurnoXpress" />
      </Helmet>
      <div className="turnos-container1">
        <header data-role="Header" className="turnos-header">
          <div
            data-thq="thq-dropdown"
            className="turnos-thq-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="turnos-dropdown-toggle"
            >
              <svg viewBox="0 0 1024 1024" className="turnos-icon">
                <path d="M64 192h896v192h-896zM64 448h896v192h-896zM64 704h896v192h-896z"></path>
              </svg>
            </div>
          </div>
          <img
            id="isoLogo"
            alt="logo"
            src="/external/turnoxpresstitle1.svg"
            loading="eager"
            className="turnos-image"
          />
          <div className="turnos-nav">
            <NavigationLinks rootClassName="rootClassName8"></NavigationLinks>
          </div>
          <div className="turnos-btn-group">
            <div className="turnos-container2">
              <div className="turnos-container3">
                <svg viewBox="0 0 1024 1024" className="turnos-icon2">
                  <path d="M725.333 384c0-58.923-23.893-112.256-62.464-150.827-38.613-38.613-91.947-62.507-150.869-62.507s-112.256 23.893-150.869 62.507c-38.571 38.571-62.464 91.904-62.464 150.827s23.893 112.256 62.464 150.827c38.613 38.613 91.947 62.507 150.869 62.507s112.256-23.893 150.869-62.507c38.571-38.571 62.464-91.904 62.464-150.827z"></path>
                  <path d="M256 810.667c0 42.667 96 85.333 256 85.333 150.101 0 256-42.667 256-85.333 0-85.333-100.437-170.667-256-170.667-160 0-256 85.333-256 170.667z"></path>
                </svg>
              </div>
              <div className="turnos-container4">
                <img alt="image" src="/chevron.svg" className="turnos-image1" />
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="turnos-container-main">
        <div className="turnos-container5">
          <div id="container-turnos" className="turnos-container-blur">
            {

              turnos.map(turnos => {
                return (
                  < div className="turnos-container-turnos" key={turnos.id} >
                    <div className="turnos-container-fecha">
                      <span className="turnos-text04">
                        <span>{turnos.fecha_turno}</span>
                        <br></br>
                      </span>
                    </div>
                    <div className="turnos-container-especialidad">
                      <span className="turnos-text07">{turnos.especialidad}</span>
                    </div>
                    <div className="turnos-container-doctor">
                      <span className="turnos-text08">
                        <span>{turnos.nombre_doctor}</span>
                        <br></br>
                      </span>
                    </div>
                    <div className="turnos-container-button">
                      <div className="turnos-button-modificar">
                        <button>Modificar</button>
                      </div>
                      <div className="turnos-button-cancelar"></div>
                    </div>
                  </div >
                
                )
              })
            }
          </div>
        </div>

      </div>
    </div>
  )
}



export default Turnos



