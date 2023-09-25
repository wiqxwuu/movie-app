import React from 'react'
import './Header.css'

const Header = ({onOpen}) => {
  return (
    <header>
        <h1>Favourite Movies</h1>
        <button onClick={onOpen}>Add Movie</button>
    </header>
  )
}

export default Header
