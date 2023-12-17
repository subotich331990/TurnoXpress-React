import React from 'react'

import { Helmet } from 'react-helmet'

import Login from '../components/login'
import './login-page.css'

const LoginPage = (props) => {
  return (
    <div className="login-page-container">
      <Helmet>
        <title>TurnoXpress</title>
        <meta property="og:title" content="TurnoXpress" />
      </Helmet>
      <Login image_alt="NurseImage" image_alt2="LogoName"></Login>
    </div>
  )
}

export default LoginPage
