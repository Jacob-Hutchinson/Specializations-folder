import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Header.module.css'

const Header = () => {
  return (
    <div>
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink  activeClassName={classes.active} to='/app1'>App 1</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/app2'>App 2</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/app3'>App 3</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/app4'>App 4</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header