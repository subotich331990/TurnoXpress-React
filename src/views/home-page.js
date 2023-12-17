import React from 'react'

import { Helmet } from 'react-helmet'

import Login from '../components/login'
import './home-page.css'

const HomePage = (props) => {
  return (
    <div className="home-page-container">
      <Helmet>
        <title>HomePage - TurnoXpress</title>
        <meta property="og:title" content="HomePage - TurnoXpress" />
      </Helmet>
      <Login image_alt="NurseImage" image_alt2="LogoName"></Login>
    </div>
  )
}

export default HomePage
