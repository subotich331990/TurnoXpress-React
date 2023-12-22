import React, {useEffect, useState} from 'react'

import { Helmet } from 'react-helmet'
import { TurnosServices } from '../services/turnoService';
const TurnosGet = new TurnosServices()

import NavBar from '../components/nav-bar'
import Footer from '../components/footer'
import './agenda.css'

const Agenda = () => {

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
    <div className="agenda-container">
      <Helmet>
        <title>Agenda - TurnoXpress</title>
        <meta property="og:title" content="Agenda - TurnoXpress" />
      </Helmet>
      <div className="agenda-main-container">
        <div className="agenda-header-container">
          <NavBar rootClassName="nav-bar-root-class-name3"></NavBar>
        </div>
        <div className="agenda-body-container">
          <div className="agenda-container1 ">

            <table className="table caption-top agenda-text" >
              <thead>
                <tr className="table-primary">
                  <th scope="col" className='caption-top-color '>Especialidad</th>
                  <th scope="col" className='caption-top-color '>Doctor/a</th>
                  <th scope="col" className='caption-top-color '>Fecha de turno</th>
                  <th scope="col" className='caption-top-color '>Estado</th>
                  <th scope="col" className='caption-top-color '>Hospital</th>
                </tr>
              </thead>
             
              <tbody>
                {
                  turnos.map((turnos) => (
                    <tr key = {turnos.id_app}>
                      <td >{turnos.patient}</td>
                      <td>{turnos.medic}</td>
                      <td>{turnos.date}</td>
                      <td>{turnos.time}</td>
                      <td>{turnos.status}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
        <div className="agenda-footer-container">
          <Footer rootClassName="footer-root-class-name"></Footer>
        </div>
      </div>
    </div>
  )
}

export default Agenda
