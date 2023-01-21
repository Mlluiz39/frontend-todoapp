import React, { createContext, useEffect, useState } from 'react'

import PropTypes from 'prop-types'

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})

  const login = async (userInfo) => {
    setUser(userInfo)
    localStorage.setItem('user', JSON.stringify(userInfo))
    localStorage.setItem('token', userInfo.token)
  }

  const logout = () => {
    setUser({})
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  useEffect(() => {
    (async () => {
      const user = JSON.parse(localStorage.getItem('user'))
      if (user) {
        setUser(user)
      }
    }
    )()
  }, [])

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired
}
