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
                    <li>
                        <NavLink activeClassName={classes.active} to='/app5'>App 5</NavLink>
                    </li>
                    <li>
                        <NavLink  activeClassName={classes.active} to='/app6'>App 6</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/app7'>App 7</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/app8'>App 8</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/app9'>App 9</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/app10'>App 10</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header