import React, { VFC } from 'react'
import ColorfulBeads from 'components/molecules/ColorfulBeads'
import CounterBoard, { Props as CounterBoardProps } from 'components/organisms/CounterBoard'

const CounterWidget: VFC<Required<CounterBoardProps>> = ({
  count = 0,
  add = () => undefined,
  decrement = () => undefined,
  increment = () => undefined
}) => (
  <>
    <CounterBoard { ...{ count, add, decrement, increment } } />
    <ColorfulBeads count={count} />
  </>
)

export default CounterWidget
