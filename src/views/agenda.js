import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import Footer from '../components/footer'
import './agenda.css'

const Agenda = (props) => {
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
          <div className="agenda-container1"></div>
        </div>
        <div className="agenda-footer-container">
          <Footer rootClassName="footer-root-class-name"></Footer>
        </div>
      </div>
    </div>
  )
}

export default Agenda
