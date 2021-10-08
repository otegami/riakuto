import React, { lazy, Suspense } from 'react'

const delay = (time: number) => (result: any) => new Promise((resolve) => {
  setTimeout(() => resolve(result), time)
})

const Other = lazy(() => import('./components/molecules/Other').then(delay(500)))

const App = () => (
  <div className="App">
    <h1>Hello Suspense</h1>
    <Suspense fallback={<div>Loading...</div>}>
      <Other />
    </Suspense>
  </div>
)

export default App
