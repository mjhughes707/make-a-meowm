import React from "react"

import Cartoon from "../img/black-cat-cartoon.png"

function Header() {
  return (
    <header>
      <img 
        src={Cartoon}
        alt="Black Cat Cartoon"
      />
      <h1>Make-A-Meowm</h1>
    </header>
  )
}


export default Header