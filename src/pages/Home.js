import { useNavigate } from 'react-router-dom'
import Button from '../components/button/Button'
import './home.scss'

const Home = () => {
  

  const navigator = useNavigate()
  const navigateToUsers = () => {
    navigator(`/users`)
  }

  
  const clickNavigation = () => {
      navigateToUsers()
  }

  return (
    <div className='home-page'>
        <h1>Random User Generator App</h1>
        <Button btnText='Get User' arrRight={true} clickHandler={clickNavigation} />
    </div>
  )
}

export default Home