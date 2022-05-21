import React from 'react'
import { Fragment } from 'react'
import {Link} from 'react-router-dom'
import classes from './Header.module.css'
const Header = (props) => {
  return (
  <Fragment>
      <header className={classes.header}>
      <Link to='/'>
          <div className={classes.logo}>{props.dashboard?"Dashboard":
          "BirthDay Bash"}</div>
      </Link>
      {!props.dashboard&&
      <nav>
          <ul>
              <li>
                  <Link to='/login'>Login</Link>
              </li>
              <li>
                  <Link to='/signin'>Signin</Link>
              </li>
          </ul>
      </nav>
      }
      </header>
  </Fragment>
  )
}

export default React.memo(Header)
