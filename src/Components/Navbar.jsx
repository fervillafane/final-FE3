import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {ContextGlobal} from '../Context/Context'
import styles from '../stylesheet/Navbar.module.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, setDarkTheme, setLightTheme } = useContext(ContextGlobal);
  const darkMode = theme === "dark" || false;
  
  const changeTheme = () => {
    if (darkMode) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  };

  const enlaces = [
    {titulo: 'Home', route: '/'}, 
    {titulo: 'favs', route: '/favs'},
    {titulo: 'Contact', route: '/contact'}
  ]

  return (
    <header className="sticky-top">
      <nav style={{display: 'flex', }}>
        {enlaces.map((enlace, indice) => (
            <Link to={enlace.route} key={indice}> 
                <h4 style={{margin: 10}} >{enlace.titulo}</h4>
            </Link>
        ))}
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button className={`btn btn-${darkMode ? "light" : "dark"} ${styles.btnStyle}`} onClick={changeTheme}> {darkMode ? "☀️" : "🌙"}{" "}</button>
      </nav>
    </header>
  )
}

export default Navbar