import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './homa-page.css'

const HomaPage = (props) => {
  return (
    <div className="homa-page-container">
      <Helmet>
        <title>HomaPage - TurnoXpress</title>
        <meta property="og:title" content="HomaPage - TurnoXpress" />
      </Helmet>
      <div className="homa-page-container1">
        <header data-role="Header" className="homa-page-header">
          <div
            data-thq="thq-dropdown"
            className="homa-page-thq-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="homa-page-dropdown-toggle"
            >
              <svg viewBox="0 0 1024 1024" className="homa-page-icon">
                <path d="M64 192h896v192h-896zM64 448h896v192h-896zM64 704h896v192h-896z"></path>
              </svg>
            </div>
            <ul
              data-thq="thq-dropdown-list"
              className="homa-page-dropdown-list"
            >
              <li
                data-thq="thq-dropdown"
                className="homa-page-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="homa-page-dropdown-toggle1"
                >
                  <span className="homa-page-text">Turno</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="homa-page-dropdown1 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="homa-page-dropdown-toggle2"
                >
                  <span className="homa-page-text01">Especialidad</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="homa-page-dropdown2 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="homa-page-dropdown-toggle3"
                >
                  <span className="homa-page-text02">Agenda</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="homa-page-dropdown3 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="homa-page-dropdown-toggle4"
                >
                  <span className="homa-page-text03">Factura</span>
                </div>
              </li>
            </ul>
          </div>
          <img
            id="isoLogo"
            alt="logo"
            src="/external/turnoxpresstitle1.svg"
            loading="eager"
            className="homa-page-image"
          />
          <div className="homa-page-nav">
            <NavigationLinks rootClassName="rootClassName10"></NavigationLinks>
          </div>
          <div className="homa-page-btn-group">
            <div className="homa-page-container2">
              <div className="homa-page-container3">
                <svg viewBox="0 0 1024 1024" className="homa-page-icon2">
                  <path d="M725.333 384c0-58.923-23.893-112.256-62.464-150.827-38.613-38.613-91.947-62.507-150.869-62.507s-112.256 23.893-150.869 62.507c-38.571 38.571-62.464 91.904-62.464 150.827s23.893 112.256 62.464 150.827c38.613 38.613 91.947 62.507 150.869 62.507s112.256-23.893 150.869-62.507c38.571-38.571 62.464-91.904 62.464-150.827z"></path>
                  <path d="M256 810.667c0 42.667 96 85.333 256 85.333 150.101 0 256-42.667 256-85.333 0-85.333-100.437-170.667-256-170.667-160 0-256 85.333-256 170.667z"></path>
                </svg>
              </div>
              <div className="homa-page-container4">
                <img
                  alt="image"
                  src="/chevron.svg"
                  className="homa-page-image1"
                />
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="homa-page-container-main">
        <div className="homa-page-container5">
          <div id="container-blur" className="homa-page-container-blur">
            <div className="homa-page-container6">
              <h1
                id="titulo-principal-home-page"
                className="homa-page-titulo-principal"
              >
                <span>
                  Saca turnos de
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>forma rápida</span>
              </h1>
              <span id="mensaje-bajada" className="homa-page-down-message">
                <span>
                  Agenda y programa tu
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="homa-page-text08">cita médica</span>
                <span>
                   desde la
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="homa-page-text10">comodidad</span>
                <span> de tu casa </span>
              </span>
              <div
                id="container-button-agendar-turno"
                className="homa-page-container-button"
              >
                <button
                  id="agendar-turno-button"
                  type="button"
                  className="homa-page-button button"
                >
                  <span className="homa-page-text12">
                    <span className="homa-page-text13">Agendar turno</span>
                    <br></br>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomaPage
