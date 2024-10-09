import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import Login from './components/Login'

import Home from './components/Home'
import PopularRoute from './components/PopularRoute'
import MovieItemDetailRoute from './components/MovieItemDetailRoute'
import NotFound from './components/NotFound'
import TrendingMovies from './components/TrendingMovies'

import './App.css'

const ProtectedRoute = ({component: Component, ...rest}) => {
  const jwtToken = Cookies.get('jwt_token')

  return (
    <Route
      {...rest}
      render={props =>
        jwtToken ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}

const App = () => (
  <BrowserRouter>
    <Switch>
      <ProtectedRoute path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/popular" component={PopularRoute} />
      <Route path="/moviedetail" component={MovieItemDetailRoute} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)
export default App
