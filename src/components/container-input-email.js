import React from 'react'

import PropTypes from 'prop-types'

import './container-input-email.css'

const ContainerInputEmail = (props) => {
  return (
    <div
      className={`container-input-email-container-input-email input ${props.rootClassName} `}
    >
      <img
        alt={props.image_alt3}
        src={props.envelopeInputEmail_image}
        className="container-input-email-envelope-image-input"
      />
      <input
        type="text"
        placeholder={props.EmailInput}
        autoComplete="off"
        className="container-input-email-input-email"
      />
    </div>
  )
}

ContainerInputEmail.defaultProps = {
  envelopeInputEmail_image: '/envelopeicon.svg',
  image_alt3: 'image',
  EmailInput: 'Correo eléctronico',
  rootClassName: '',
}

ContainerInputEmail.propTypes = {
  envelopeInputEmail_image: PropTypes.string,
  image_alt3: PropTypes.string,
  EmailInput: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ContainerInputEmail
