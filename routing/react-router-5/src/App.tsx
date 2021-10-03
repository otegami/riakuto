import { VFC } from 'react'
import { Redirect, Route, Switch } from 'react-router'

import Home from 'components/pages/Home'
import About from 'components/pages/About'
import User from 'components/pages/User'
import NotFound from 'components/pages/NotFound'
import Contact from 'components/pages/Contact'

const App: VFC = () => (
  <Switch>
    <p>弊社のホームページ</p>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Redirect
      from="/user/profile/:userId"
      to="/user/:userId"
    />
    <Route path="/user/:userId">
      <User />
    </Route>
    <Route path="/contact">
      <Contact destAddress="contact@our-company.com" />
    </Route>
    <Route>
      <NotFound />
    </Route>
  </Switch>
)

export default App
