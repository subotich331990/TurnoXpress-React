import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { TurnosServices } from "../services/turnoService";
import NavigationLinks from '../components/navigation-links';
import { Button } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
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
                        <Button as='a' variant="outline-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                          </svg>
                        </Button>
                      </div>
                      <div className="turnos-button-cancelar">
                        <Button variant='outline-danger' >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                          </svg>
                        </Button>
                      </div>
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



