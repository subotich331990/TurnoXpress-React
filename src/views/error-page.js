import React from 'react'

import { Helmet } from 'react-helmet'

import './error-page.css'

const ErrorPage = (props) => {
  return (
    <div className="error-page-container">
      <Helmet>
        <title>ErrorPage - TurnoXpress</title>
        <meta property="og:title" content="ErrorPage - TurnoXpress" />
      </Helmet>
    </div>
  )
}

export default ErrorPage
