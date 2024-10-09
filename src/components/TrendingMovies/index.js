import Cookies from 'js-cookie'

const TrendingMovies = async () => {
  const url = 'https://apis.ccbp.in/movies-app/trending-movies'
  const jwtToken = Cookies.get('jwt_token')

  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer:${jwtToken}`,
    },
  }
  const response = await fetch(url, options)
  const data = await response.json()
  console.log(data)
}
export default TrendingMovies
