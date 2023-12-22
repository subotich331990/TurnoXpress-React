import React, {useEffect, useState, CSSProperties} from 'react'

import { Helmet } from 'react-helmet'
import { TurnosServices } from '../services/turnoService';
import loader from '../components/skeleton';
import GridLoader from "react-spinners/CircleLoader"
const TurnosGet = new TurnosServices()

import NavBar from '../components/nav-bar'
import Footer from '../components/footer'
import './agenda.css'
import Skeleton from 'react-loading-skeleton';

const Agenda = () => {

  // const [turnos, setTurnos] = useState([]);

  // useEffect(() => {

    const [turnos, setTurnos] = useState([]);
    const [cargando, setCargando] = useState(true); // Nuevo estado para indicar si está cargando

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await TurnosGet.getAllTurnos();
          setTurnos(response.data);
          setCargando(false); // Establecer el estado de carga a falso cuando los datos se han cargado
          console.log(response.data);
        } catch (error) {
          console.log(error);
          setCargando(false); // Manejar errores también estableciendo el estado de carga a falso
        }
      };

      fetchData();
    }, []);


  //   TurnosGet.getAllTurnos()
  //     .then(response => {
  //       setTurnos(response.data);
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // }, []);

  return (
    <div className="agenda-container">
      <Helmet>
        <title>Agenda - TurnoXpress</title>
        <meta property="og:title" content="Agenda - TurnoXpress" />
      </Helmet>
      <div className="card agenda-main-container">
        <div className="agenda-header-container">
          <NavBar rootClassName="nav-bar-root-class-name3"></NavBar>
        </div>
        <div className="card-body agenda-body-container">
          {cargando ? (
            
            loader()
            
          ) : (
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
                      <td >{turnos.speciality}</td>
                      <td>{turnos.medic}</td>
                      <td>{turnos.date}</td>
                      <td>{turnos.status}</td>
                      <td>{turnos.hospital}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            </div>
          )}
        </div>
        <div className="agenda-footer-container">
          <Footer rootClassName="footer-root-class-name"></Footer>
        </div>
      </div>
    </div>
  )
}

export default Agenda
