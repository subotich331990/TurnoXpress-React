import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className={`footer-container ${props.rootClassName} `}>
      <footer className="footer-footer">
        <div className="footer-container1">
          <div className="footer-logo">
            <div className="footer-container2">
              <img alt="logo" src="/logo.svg" className="footer-image" />
              <img
                alt="logo"
                src="/turnoxpresstitle.svg"
                className="footer-image1"
              />
            </div>
          </div>
          <div className="footer-links-container">
            <div className="footer-container3">
              <div className="footer-product-container">
                <span className="footer-text">Equipo</span>
                <span className="footer-text01">Nosotros</span>
                <span className="footer-text02">
                  <span className="">Servicios</span>
                  <br className=""></br>
                </span>
              </div>
              <div className="footer-company-container">
                <span className="footer-text05">Social</span>
                <span className="footer-text06">Linkedin</span>
                <span className="footer-text07">GitHub</span>
              </div>
            </div>
            <div className="footer-container4">
              <div className="footer-contact">
                <span className="footer-text08">Empresa</span>
                <a
                  href="mailto:turnoxpress@medicalcare.com?subject=Description"
                  className="footer-link"
                >
                  TurnoXpress@medicalcare.com
                </a>
                <a href="tel:+123 (4567) 890" className="footer-link1">
                  +123 (4567) 890
                </a>
              </div>
              <div className="footer-socials">
                <span className="footer-text09">Siguenos</span>
                <div className="footer-icon-group">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link2"
                  >
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="footer-icon"
                    >
                      <path
                        d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"
                        className=""
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link3"
                  >
                    <svg
                      id="iconGitHub"
                      viewBox="0 0 877.7142857142857 1024"
                      className="footer-icon2"
                    >
                      <path
                        d="M296.571 685.714v0c1.143-1.714 0.571-5.143-1.714-7.429-2.857-2.286-6.286-2.857-8-1.143-1.143 1.714-0.571 5.143 1.714 7.429 2.857 2.286 6.286 2.857 8 1.143zM280.571 662.286c-1.714-2.286-4.571-3.429-6.857-2.286-1.714 1.143-1.714 4.571 0 6.857 2.286 2.857 5.143 4 6.857 2.857v0c1.714-1.143 1.714-4.571 0-7.429zM257.143 639.429v0c0.571-1.143-0.571-3.429-2.857-4.571-1.714-0.571-4-0.571-4.571 1.143-1.143 1.714 0 3.429 2.286 4.571 2.286 0.571 4.571 0.571 5.143-1.143zM269.143 652.571v0c1.143-1.143 1.143-4-1.143-5.714-1.714-2.286-4.571-2.857-5.714-1.714-1.714 1.714-1.143 4 0.571 6.286 1.714 1.714 4.571 2.857 6.286 1.143zM318.286 695.429v0c0.571-2.286-1.714-5.143-5.143-6.286s-6.286 0-7.429 2.286c-0.571 2.286 1.714 5.143 5.143 6.286s6.286 0 7.429-2.286zM342.286 697.143v0c0-2.286-2.857-4.571-6.857-4.571-3.429 0-5.714 2.286-5.714 4.571s2.857 4.571 6.286 4.571 6.286-2.286 6.286-4.571zM364.571 693.143v0c-0.571-2.286-4-3.429-7.429-2.857s-5.714 2.857-5.143 5.143 3.429 4 6.857 3.429 5.714-3.429 5.714-5.714zM731.429 512c0-161.714-130.857-292.571-292.571-292.571s-292.571 130.857-292.571 292.571c0 129.143 84 238.857 200 277.714 14.857 2.857 20-6.286 20-14.286 0-6.857 0-29.714-0.571-54.286 0 0-81.143 17.714-98.286-34.857 0 0-13.143-33.714-32.571-42.286 0 0-26.286-18.286 2.286-18.286 0 0 28.571 2.286 44.571 30.286 25.714 45.143 68.571 32 85.143 24.571 2.857-18.857 10.286-32 18.857-39.429-65.143-7.429-133.714-32.571-133.714-144.571 0-32 11.429-57.714 30.286-78.286-2.857-7.429-13.143-37.143 2.857-77.714 24.571-7.429 80.571 30.286 80.571 30.286 23.429-6.857 48-9.714 73.143-9.714s49.714 2.857 73.143 9.714c0 0 56-37.714 80.571-30.286 16 40.571 5.714 70.286 2.857 77.714 18.857 20.571 30.286 46.286 30.286 78.286 0 112.571-68.571 137.143-133.714 144.571 10.286 9.143 20 26.857 20 54.286 0 38.857-0.571 70.286-0.571 80 0 8 5.143 17.143 20 14.286 116-38.857 200-148.571 200-277.714zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"
                        className=""
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-separator"></div>
        <span className="footer-text10">
          © 2023 TurnoXpress, All Rights Reserved.
        </span>
      </footer>
    </div>
  )
}

Footer.defaultProps = {
  rootClassName: '',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
}

export default Footer
