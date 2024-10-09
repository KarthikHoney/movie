import {useEffect} from 'react'
import Cookies from 'js-cookie'
import Header1 from '../Header1'
import Footer from '../Footer'

const Home = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token') // Ensure this matches the key used to set the token
    const {history} = props
    history.replace('/login')
  }

  useEffect(() => {
    const fetchTrending = async () => {
      const url = 'https://apis.ccbp.in/movies-app/trending-movies'
      const jwtToken = Cookies.get('jwt_token')
      console.log('JWT Token:', jwtToken)
      if (!jwtToken) {
        console.error('JWT Token is undefined. User might not be logged in.')
        return
      }

      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          'Content-Type': 'application/json',
        },
      }

      try {
        const res = await fetch(url, options)
        if (!res.ok) {
          const errorData = await res.json()
          console.error('Error response:', errorData)
          throw new Error(`Network response was not ok: ${errorData.message}`)
        }
        const data = await res.json()
        console.log(data) // Log the successful data
      } catch (error) {
        console.error('Error fetching trending movies:', error)
      }
    }

    fetchTrending() // Fetch trending movies when the component mounts
  }, [])

  return (
    <div>
      <Header1 />
      <button type="button" onClick={onClickLogout}>
        Logout
      </button>
      <Footer />
    </div>
  )
}

export default Home
