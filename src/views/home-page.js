import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import Footer from '../components/footer'
import './home-page.css'

const HomePage = (props) => {
  return (
    <div className="home-page-container">
      <Helmet>
        <title>HomePage - TurnoXpress</title>
        <meta property="og:title" content="HomePage - TurnoXpress" />
      </Helmet>
      <div className="home-page-main-container">
        <div className="home-page-header-container">
          <NavBar rootClassName="nav-bar-root-class-name2"></NavBar>
        </div>
        <div className="home-page-body-container">
          <div className="home-page-left-container">
            <div className="home-page-sub-left-container">
              <span className="home-page-title-home-page">
                Nuestros servicios
              </span>
              <div className="home-page-down-message-container">
                <span className="home-page-down-message-home-page">
                  <span>
                    No esperes más para
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-page-text1">solicitar</span>
                  <span> tu TurnoXpress</span>
                </span>
              </div>
              <div className="home-page-button-container">
                <button
                  type="button"
                  id="reserva-ahora"
                  name="reserva-ahora"
                  className="home-page-button button"
                >
                  Reserva ahora
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="home-page-footer-container">
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}

export default HomePage
