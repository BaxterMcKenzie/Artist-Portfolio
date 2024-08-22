import React from 'react'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className='header'>
          <h1>Rembrandt</h1>
      </div>
      <div className='links'>
          <Link to="/"> Gallery </Link>
          <Link to="/bio"> Biography</Link>
      </div>
    </>
  )
}

export default Header
