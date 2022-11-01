import axios from 'axios'
import React, { useState } from 'react'
import Button from '../components/button/Button'
import './home.scss'

const Home = () => {
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(false)
  const [activeUser, setActiveUser] = useState(false)
  const [activeLink, setActiveLink] = useState(0)

  const handleClick = () => {
    setLoading(true)
    axios.get("https://randomuser.me/api/")
        .then((response) => {
          console.log(response)
          setUserData(response.data.results)
        }).catch((error) => {
          console.log(error)
        }).finally(() => {
          setLoading(false)
        })
  }
  return (
    <div className='home-page'>
        <h1>Random User Generator App</h1>
        <Button btnText='Get User' arrRight={true} clickHandler={handleClick} />
    </div>
  )
}

export default Home