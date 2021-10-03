import { VFC } from 'react'
import { History, useHistory } from 'react-router-dom'

const HistoryButtons: VFC = () =>{
  const history = useHistory()

  return(
    <>
      <button type="button" onClick={() => history.goBack()}>
        戻る
      </button>
      <button type="button" onClick={() => history.goForward()}>
        進む
      </button>
      <button type="button" onClick={() => history.push("/")}>
        トップページへ
      </button>
    </>
  )
}
