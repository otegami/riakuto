import { useEffect, VFC } from 'react'
import { Redirect, Route, Switch, useLocation } from 'react-router'
import ReactGA from 'react-ga'

import Home from 'components/pages/Home'
import User from 'components/pages/User'
import NotFound from 'components/pages/NotFound'

const App: VFC = () => {
  const location = useLocation()
  
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search)
  }, [location.key])

  return(
    <Switch>
      <p>弊社のホームページ</p>
      <Route exact path="/">
        <Home />
      </Route>
      <Redirect
        from="/user/profile/:userId"
        to="/user/:userId"
      />
      <Route path="/user/:userId">
        <User />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  )
}

export default App
