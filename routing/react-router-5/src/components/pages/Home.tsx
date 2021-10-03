import { VFC } from 'react'
import { Link } from 'react-router-dom'

const Home: VFC = () => (
  <ul>
    <li>
      <Link to="/">トップページ</Link>
    </li>
    <li>
      <Link
        to="{{
          pathname: '/contact',
          search: '?from=here',
          hash: '#subject',
          state: { secretCode: '8yUfa9KECH' }
        }}"
      >
        お問い合わせ
      </Link>
    </li>
    <li>
      <Link to="/anywhere" replace>
        今ここではないどこか
      </Link>
    </li>
  </ul>
)

export default Home
