import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import Header1 from '../Header1'
import Footer from '../Footer'

const Home = props => {
  // State to store the trending movies
  const [trendingMovies, setTrendingMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [errors, setError] = useState('')

  const onClickLogout = () => {
    Cookies.remove('jwt_Token') // Ensure this matches the key used to set the token
    const {history} = props
    history.replace('/login')
  }

  useEffect(() => {
    const fetchTrending = async () => {
      const url = 'https://apis.ccbp.in/movies-app/trending-movies'
      const jwtToken = Cookies.get('jwt_Token')
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
        const data = await res.json()
        console.log(data)
        setTrendingMovies(data.results)
        setLoading(false)
      } catch (error) {
        setError('Error fetching trending movies.')
        setLoading(false)
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
      <div>
        {loading && <p>Loading...</p>} {/* Display a loading message */}
        {errors && <p style={{color: 'red'}}>{errors}</p>}{' '}
        {/* Display an error message */}
        {trendingMovies.length > 0 ? (
          <ul>
            {trendingMovies.map(movie => (
              <li key={movie.id}>{movie.title}</li> // Render movie titles in a list
            ))}
          </ul>
        ) : (
          !loading && <p>No movies to display.</p> // Show message if no movies are fetched
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Home
