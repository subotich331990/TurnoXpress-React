import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <span className="navigation-links-text">{props.linkTurno}</span>
      <span className="navigation-links-text1">{props.linkEspecialidad}</span>
      <span className="navigation-links-text2">{props.linkAgenda}</span>
      <span className="navigation-links-text3">{props.linkFactura}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  linkEspecialidad: 'Especialidad',
  linkAgenda: 'Agenda',
  rootClassName: '',
  linkTurno: 'Turno',
  linkFactura: 'Factura',
}

NavigationLinks.propTypes = {
  linkEspecialidad: PropTypes.string,
  linkAgenda: PropTypes.string,
  rootClassName: PropTypes.string,
  linkTurno: PropTypes.string,
  linkFactura: PropTypes.string,
}

export default NavigationLinks
