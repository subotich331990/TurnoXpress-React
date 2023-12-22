import React, { useState } from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import NavBar from '../components/nav-bar'
import Footer from '../components/footer'
import { obtenerHoraYMinuto } from '../services/getHora';
import { obtenerMedico } from '../services/medicList';
import './turnos.css'

const URL_BASE_API_TURNOS = "https://turnoxpress-api-v3.onrender.com/api/v3/appointment"

const Turnos = () => {

  const [datos, setDatos] = useState({
    // Inicializa tus datos aquí
    // Por ejemplo:
    hospital: '',
    medic: obtenerMedico(),
    speciality: '',
    date: '',
    time: obtenerHoraYMinuto(),
    status:'Pendiente'
    
    // ...
  });

  const enviarDatos = async (event) => {
    
    event.preventDefault(); 

    try {
      // Cambia la URL con la dirección de tu API
      const response = await axios.post(URL_BASE_API_TURNOS, datos);
      response
      alert('Turno guardado con exito');
    } catch (error) {
      console.error('Error al enviar la solicitud POST:', error);
    }
  };

  const manejarCambio = (event) => {
    // Actualiza los datos del estado cuando el usuario cambia un campo
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };


  return (
    <div className="turnos-container">
      <Helmet>
        <title>Turnos - TurnoXpress</title>
        <meta property="og:title" content="Turnos - TurnoXpress" />
      </Helmet>
      <div className="turnos-container01">
        <div className="turnos-header-container">
          <NavBar></NavBar>
        </div>
        <div className="turnos-first-body-container">
          <div className="turnos-container02">
            <div className="turnos-container03">
              <div className="turnos-container04">
                <span className="turnos-up-text">
                  <span>
                    No esperes más para
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="turnos-text01">solicitar</span>
                  <span> tu TurnoXpress</span>
                </span>
              </div>
              <div className="turnos-big-text-container">
                <h1 className="turnos-title-page">
                  <span>¡Tu salud es nuestra prioridad!</span>
                  <br></br>
                  <br></br>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="turnos-second-body-container">
          <div className="turnos-container05">
            <div className="turnos-container06">
              <div className="turnos-container07">
                <h1 className="turnos-text06">
                  <span>
                    Agenda tu
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="turnos-text08">cita</span>
                </h1>
              </div>
              <div className="turnos-container08">
                <span className="turnos-text09">
                  Vuelve tu experiencia segura y sencilla, te ayudamos a
                  agilizar tu turno.
                </span>
              </div>
            </div>
          </div>
          <div className="turnos-form-container">
            <form className="turnos-form" onSubmit={enviarDatos}>
              <div className="turnos-container09">
                <div className="turnos-container-input-email input">
                  <img
                    alt="image"
                    src="/nombrecompletoinput.svg"
                    className="turnos-envelope-image-input"
                  />
                  <input
                    type="text"
                    placeholder="Nombre Completo"
                    autoComplete="off"
                    className="turnos-input-email"
                    name="nombreCompleto"
                  />
                </div>
                <div className="turnos-container-input-email1 input">
                  <img
                    alt="image"
                    src="/calendaricon.svg"
                    className="turnos-envelope-image-input1"
                  />
                  <input
                    type="date"
                    placeholder="Fecha de turno"
                    autoComplete="off"
                    name='date'
                    min="2024-01-01"
                    className="turnos-input-email1"
                    value={datos.date} onChange={manejarCambio}
                  />
                </div>
                <div className="turnos-container-input-email2 input">
                  <img
                    alt="especialidad"
                    src="/medical-history-doctor-svgrepo-com.svg"
                    className="svg-image turnos-stethoscope-image-input .turnos-icon"
                  />
                  <select
                    required
                    autoComplete="off"
                    className="turnos-select"
                    name="speciality"
                    value={datos.speciality} onChange={manejarCambio}

                  >
                    <option disabled defaultValue>Especialidades</option>
                    <option value="Traumatología">Traumatología</option>
                    <option value="Medicina General">Medicina General</option>
                    <option value="Nutrición">Nutrición</option>
                    <option value="OOtorrinolaringología">Otorrinolaringología</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Especialidad"
                    autoComplete="off"
                    className="turnos-input-email2"
                  />
                </div>
                <div className="turnos-container-input-hospital input">
                  <img
                    alt="hospital"
                    src="/hospital-grey-icon.svg"
                    className="svg-image turnos-stethoscope-image-input .turnos-icon"
                  />
                  <select
                    id="hospital-select"
                    required
                    className="turnos-select1"
                    name="hospital"
                    value={datos.hospital} onChange={manejarCambio}
                  >
                    <option disabled defaultValue>Hospital</option>
                    <option value="Karolinska University Hospital">
                      Karolinska University Hospital
                    </option>
                    <option value="Cleveland Clinic">Cleveland Clinic</option>
                    <option value="Hospital General de Agudos Dr. E. Tornú">
                      Hospital General de Agudos Dr. E. Tornú
                    </option>
                    <option value="Hospital de Niños">Hospital de Niños</option>
                    <option value="Hospital Santa Lucía">Hospital Santa Lucía</option>
                  </select>
                </div>
                <button
                  id="sendTurno"
                  name="submit"
                  type="submit"
                  className="turnos-button button"
                >
                  <span>
                    <span>Enviar</span>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="turnos-third-body-container">
          <div className="turnos-container10">
            <div className="turnos-container11">
              <div className="turnos-container12">
                <div className="turnos-container13"></div>
              </div>
              <div className="turnos-text-container">
                <h3 className="turnos-text13">Beneficios</h3>
                <div className="turnos-container14">
                  <ul className="turnos-ul list">
                    <li className="turnos-li list-item">
                      <span className="turnos-text15">
                        Evita largas esperas y accede a servicios médicos en el
                        momento que más te convenga.
                      </span>
                    </li>
                    <li className="turnos-li1 list-item">
                      <span className="turnos-text15">
                        Accede y controla tu agenda médica de manera fácil
                      </span>
                    </li>
                    <li className="turnos-li2 list-item">
                      <span className="turnos-text15">
                        Mantente informado en todo momento
                      </span>
                    </li>
                    <li className="turnos-li3 list-item">
                      <span className="turnos-text15">
                        Proceso de pago simplificado y seguro
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="turnos-footer-container">
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}

export default Turnos
