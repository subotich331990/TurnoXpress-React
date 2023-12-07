import React from 'react'

import PropTypes from 'prop-types'

import './login.css'

const Login = (props) => {
  return (
    <main id="main-container" className="login-container">
      <div className="login-container-col-left">
        <div className="login-container-col-header-left">
          <div className="login-container-title teleport-show">
            <div className="login-sub-container-title">
              <img
                alt={props.imageAlt2}
                src={props.imageSrc2}
                className="login-image-title"
              />
            </div>
            <div className="login-container-subtitle">
              <h1 className="login-greating-h1">{props.heading}</h1>
              <span className="login-downtext">
                <span>Nos alegra verte de nuevo.</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
        <div className="login-container-col-main-left">
          <div className="login-container-form">
            <form className="login-login-form">
              <div id="inputMail" className="login-sub-container-mail">
                <div className="login-container-input-email input">
                  <img
                    alt={props.imageAlt3}
                    src={props.envelopeInputEmailImage}
                    className="login-envelope-image-input"
                  />
                  <input
                    type="text"
                    placeholder={props.emailInput}
                    autoComplete="off"
                    className="login-input-email"
                  />
                </div>
              </div>
              <div className="login-sub-container-password">
                <div className="login-container-input-password input">
                  <img
                    alt={props.imageAlt4}
                    src={props.imageSrc4}
                    className="login-image-lock-password"
                  />
                  <input
                    type="password"
                    outline="none"
                    placeholder="Contraseña"
                    className="login-input-password input"
                  />
                  <img
                    id="showPasswordBtn"
                    alt={props.showPassworsImage}
                    src={props.imageSrc5}
                    className="login-image-show-password"
                  />
                </div>
              </div>
              <div className="login-container-forgot-password-link">
                <a
                  href={props.forgotPasswordInput}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="login-link"
                >
                  {props.text2}
                </a>
              </div>
              <button type="submit" className="login-button button">
                {props.loginButton}
              </button>
            </form>
          </div>
        </div>
        <div className="login-container-line-left">
          <div className="login-sub-container-line-left"></div>
          <div className="login-sub-container-circle">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="login-circle-icon"
            >
              <path d="M438.857 146.286c-201.714 0-365.714 164-365.714 365.714s164 365.714 365.714 365.714 365.714-164 365.714-365.714-164-365.714-365.714-365.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857v0c242.286 0 438.857 196.571 438.857 438.857z"></path>
            </svg>
          </div>
          <div className="login-sub-container-line-right"></div>
        </div>
        <div className="login-container-footer">
          <button type="submit" className="login-google-button button">
            <img
              alt={props.imageAlt1}
              src={props.imageSrc1}
              className="login-image-google-logo"
            />
          </button>
          <div className="login-container-register">
            <span className="login-question-register">{props.text}</span>
            <a
              href={props.linkText}
              target="_blank"
              rel="noreferrer noopener"
              className="login-register-link"
            >
              {props.text1}
            </a>
          </div>
        </div>
      </div>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="login-nurse-image"
      />
    </main>
  )
}

Login.defaultProps = {
  showPassworsImage: 'image',
  envelopeInputEmailImage: '/envelopeicon.svg',
  emailInput: 'Correo eléctronico',
  forgotPasswordInput: 'https://example.com',
  imageSrc: '/d00910a2f58ebd9be8b4590c673efe1c-1500h.png',
  imageSrc4: '/lcokicon.svg',
  loginButton: 'Iniciar Sesión',
  imageAlt4: 'image',
  imageAlt3: 'image',
  imageAlt1: 'image',
  imageSrc5: '/eyeicon.svg',
  linkText: 'https://example.com',
  imageSrc2: '/turnoxpresstitle.svg',
  imageSrc1: '/google_ic.svg',
  text1: 'Registrarse',
  heading: '¡Hola nuevamente! 👋🏻',
  text: '¿No tienes cuenta? \n',
  text2: '¿Olvidaste tu contraseña?',
  imageAlt: 'image',
  imageAlt2: 'image',
}

Login.propTypes = {
  showPassworsImage: PropTypes.string,
  envelopeInputEmailImage: PropTypes.string,
  emailInput: PropTypes.string,
  forgotPasswordInput: PropTypes.string,
  imageSrc: PropTypes.string,
  imageSrc4: PropTypes.string,
  loginButton: PropTypes.string,
  imageAlt4: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc5: PropTypes.string,
  linkText: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageSrc1: PropTypes.string,
  text1: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt2: PropTypes.string,
}

export default Login
