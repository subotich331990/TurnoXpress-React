import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import ContainerInputEmail from '../components/container-input-email'
import Footer from '../components/footer'
import './turnos.css'

const Turnos = (props) => {
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
          <div className="turnos-blur-container"></div>
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
            <form className="turnos-form">
              <div className="turnos-container09">
                <ContainerInputEmail
                  rootClassName="container-input-email-root-class-name"
                  EmailInput="Nombre Completo"
                  envelopeInputEmail_image="/nombrecompletoinput.svg"
                ></ContainerInputEmail>
                <ContainerInputEmail
                  rootClassName="container-input-email-root-class-name1"
                  EmailInput="Fecha de turno"
                ></ContainerInputEmail>
                <ContainerInputEmail
                  rootClassName="container-input-email-root-class-name2"
                  EmailInput="Especialidad"
                ></ContainerInputEmail>
                <ContainerInputEmail
                  rootClassName="container-input-email-root-class-name3"
                  EmailInput="Hospital"
                ></ContainerInputEmail>
                <button
                  type="submit"
                  name="submit"
                  id="sendTurno"
                  className="turnos-button button"
                >
                  <span>
                    <span>Enviar</span>
                    <br></br>
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
                      <span>
                        {' '}
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
                      <span className="turnos-text16">
                        Mantente informado en todo momento
                      </span>
                    </li>
                    <li className="turnos-li3 list-item">
                      <span className="turnos-text17">
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
