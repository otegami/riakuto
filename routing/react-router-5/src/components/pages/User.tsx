import { VFC } from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'

const User: VFC = () => {
  const { userId } = useParams()
  const match = useRouteMatch()

  console.log(userId)
  console.log(match)

  return(
    <></>
  )
}

export default User
