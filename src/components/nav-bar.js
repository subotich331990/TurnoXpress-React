import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './nav-bar.css'

const NavBar = (props) => {
  return (
    <div className={`nav-bar-container ${props.rootClassName} `}>
      <header data-thq="thq-navbar" className="nav-bar-navbar-interactive">
        <img alt="logo" src="/turnoxpresstitle.svg" className="nav-bar-image" />
        <img
          alt={props.image_alt5}
          src={props.image_src3}
          loading="lazy"
          className="nav-bar-image1"
        />
        <div data-thq="thq-navbar-nav" className="nav-bar-desktop-menu">
          <nav className="nav-bar-links">
            <div className="nav-bar-container1">
              <span
                id="especialidad-link"
                className="nav-bar-especialidad-link"
              >
                <Link to="/home-page">
                  Inicio
                </Link>
              </span>
            </div>
            <div className="nav-bar-container2">
              <Link
                to="/turnos"
                id="turnos-link"
                className="nav-bar-turnos-link"
              >
                Turnos
              </Link>
            </div>
            <div className="nav-bar-container3">
              <Link
                to="/agenda"
                id="agenda-link"
                className="nav-bar-agenda-link"
              >
                Agenda
              </Link>
            </div>
            <div className="nav-bar-container4">
              <span id="pago-link" className="nav-bar-pago-link visually-hidden" >
                Pagos
              </span>
            </div>
          </nav>
          <div className="nav-bar-buttons">
            <svg viewBox="0 0 1024 1024" className="nav-bar-icon">
              <path
                d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"
                className=""
              ></path>
            </svg>
            <img
              alt={props.Especialidad}
              src={props.image_src6}
              className="nav-bar-image2"
            />
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="nav-bar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="nav-bar-icon02">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              className=""
            ></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="nav-bar-mobile-menu">
          <div className="nav-bar-nav">
            <div className="nav-bar-top">
              <img
                alt="image"
                src="/turnoxpresstitle.svg"
                className="nav-bar-logo"
              />
              <div data-thq="thq-close-menu" className="nav-bar-close-menu">
                <svg viewBox="0 0 1024 1024" className="nav-bar-icon04">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <nav className="nav-bar-links1">
              <span className="nav-bar-especialidad-text">Especialidad</span>
              <span className="nav-bar-turnos-text">
                <span className="nav-bar-text">Turnos</span>
                <br className=""></br>
              </span>
              <span className="nav-bar-agenda-text">Agenda</span>
              <span className="nav-bar-pagos">Pagos</span>
            </nav>
            <div className="nav-bar-buttons1">
              <button className="nav-bar-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div className="">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="nav-bar-icon06"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                className=""
              ></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="nav-bar-icon08"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                className=""
              ></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="nav-bar-icon10"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
  )
}

NavBar.defaultProps = {
  Especialidad: 'image',
  image_alt5: 'image',
  image_src3: '/logo.svg',
  rootClassName: '',
  image_src6: '/chevron.svg',
}

NavBar.propTypes = {
  Especialidad: PropTypes.string,
  image_alt5: PropTypes.string,
  image_src3: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src6: PropTypes.string,
}

export default NavBar
