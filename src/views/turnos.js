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
                  EmailInput="Nombre Completo"
                  rootClassName="container-input-email-root-class-name"
                  envelopeInputEmail_image="/nombrecompletoinput.svg"
                ></ContainerInputEmail>
                <div className="turnos-container-input-email input">
                  <img
                    alt="image"
                    src="/calendaricon.svg"
                    className="turnos-envelope-image-input"
                  />
                  <input
                    type="date"
                    placeholder="Fecha de turno"
                    autoComplete="off"
                    className="turnos-input-email"
                  />
                </div>
                <ContainerInputEmail
                  EmailInput="Especialidad"
                  rootClassName="container-input-email-root-class-name2"
                ></ContainerInputEmail>
                <div className="turnos-container-input-email1 input">
                  <svg
                    viewBox="0 0 804.5714285714286 1024"
                    className="turnos-icon"
                  >
                    <path d="M219.429 749.714v36.571c0 9.714-8.571 18.286-18.286 18.286h-36.571c-9.714 0-18.286-8.571-18.286-18.286v-36.571c0-9.714 8.571-18.286 18.286-18.286h36.571c9.714 0 18.286 8.571 18.286 18.286zM219.429 603.429v36.571c0 9.714-8.571 18.286-18.286 18.286h-36.571c-9.714 0-18.286-8.571-18.286-18.286v-36.571c0-9.714 8.571-18.286 18.286-18.286h36.571c9.714 0 18.286 8.571 18.286 18.286zM365.714 603.429v36.571c0 9.714-8.571 18.286-18.286 18.286h-36.571c-9.714 0-18.286-8.571-18.286-18.286v-36.571c0-9.714 8.571-18.286 18.286-18.286h36.571c9.714 0 18.286 8.571 18.286 18.286zM219.429 457.143v36.571c0 9.714-8.571 18.286-18.286 18.286h-36.571c-9.714 0-18.286-8.571-18.286-18.286v-36.571c0-9.714 8.571-18.286 18.286-18.286h36.571c9.714 0 18.286 8.571 18.286 18.286zM658.286 749.714v36.571c0 9.714-8.571 18.286-18.286 18.286h-36.571c-9.714 0-18.286-8.571-18.286-18.286v-36.571c0-9.714 8.571-18.286 18.286-18.286h36.571c9.714 0 18.286 8.571 18.286 18.286zM512 603.429v36.571c0 9.714-8.571 18.286-18.286 18.286h-36.571c-9.714 0-18.286-8.571-18.286-18.286v-36.571c0-9.714 8.571-18.286 18.286-18.286h36.571c9.714 0 18.286 8.571 18.286 18.286zM365.714 457.143v36.571c0 9.714-8.571 18.286-18.286 18.286h-36.571c-9.714 0-18.286-8.571-18.286-18.286v-36.571c0-9.714 8.571-18.286 18.286-18.286h36.571c9.714 0 18.286 8.571 18.286 18.286zM658.286 603.429v36.571c0 9.714-8.571 18.286-18.286 18.286h-36.571c-9.714 0-18.286-8.571-18.286-18.286v-36.571c0-9.714 8.571-18.286 18.286-18.286h36.571c9.714 0 18.286 8.571 18.286 18.286zM512 457.143v36.571c0 9.714-8.571 18.286-18.286 18.286h-36.571c-9.714 0-18.286-8.571-18.286-18.286v-36.571c0-9.714 8.571-18.286 18.286-18.286h36.571c9.714 0 18.286 8.571 18.286 18.286zM658.286 457.143v36.571c0 9.714-8.571 18.286-18.286 18.286h-36.571c-9.714 0-18.286-8.571-18.286-18.286v-36.571c0-9.714 8.571-18.286 18.286-18.286h36.571c9.714 0 18.286 8.571 18.286 18.286zM512 950.857h219.429v-658.286h-146.286v18.286c0 30.286-24.571 54.857-54.857 54.857h-256c-30.286 0-54.857-24.571-54.857-54.857v-18.286h-146.286v658.286h219.429v-128c0-9.714 8.571-18.286 18.286-18.286h182.857c9.714 0 18.286 8.571 18.286 18.286v128zM512 274.286v-182.857c0-9.714-8.571-18.286-18.286-18.286h-36.571c-9.714 0-18.286 8.571-18.286 18.286v54.857h-73.143v-54.857c0-9.714-8.571-18.286-18.286-18.286h-36.571c-9.714 0-18.286 8.571-18.286 18.286v182.857c0 9.714 8.571 18.286 18.286 18.286h36.571c9.714 0 18.286-8.571 18.286-18.286v-54.857h73.143v54.857c0 9.714 8.571 18.286 18.286 18.286h36.571c9.714 0 18.286-8.571 18.286-18.286zM804.571 256v731.429c0 20-16.571 36.571-36.571 36.571h-731.429c-20 0-36.571-16.571-36.571-36.571v-731.429c0-20 16.571-36.571 36.571-36.571h182.857v-164.571c0-30.286 24.571-54.857 54.857-54.857h256c30.286 0 54.857 24.571 54.857 54.857v164.571h182.857c20 0 36.571 16.571 36.571 36.571z"></path>
                  </svg>
                  <input
                    type="text"
                    placeholder="Hospital"
                    autoComplete="off"
                    className="turnos-input-email1"
                  />
                </div>
                <button
                  id="sendTurno"
                  name="submit"
                  type="submit"
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
