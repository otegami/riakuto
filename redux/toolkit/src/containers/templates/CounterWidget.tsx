import React, { VFC, useReducer } from 'react'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import CounterWidget from 'components/templates/CounterWidget'

type CounterState = { count: number }
const initialState: CounterState =  { count: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    added: (state, action: PayloadAction<number>) => ({
      ...state,
      coun: state.count + action.payload
    }),
    decremented: state => ({ ...state, count: state.count - 1 }),
    incremented: state => ({ ...state, count: state.count + 1 }),
  }
})

const EnhancedCounterWidget: VFC<{ initialCount?: number }> = ({ initialCount = 0 }) => {
  const [state, dispatch] = useReducer(
    counterSlice.reducer, initialCount, (count: number): CounterState => ({ count })
  )
  const { added, decremented, incremented } = counterSlice.actions

  return (
    <CounterWidget
      count={state.count}
      add={(amount: number) => dispatch(added(amount))}
      decrement={() => dispatch(decremented())}
      increment={() => dispatch(incremented())}
    />
  )
}

export default EnhancedCounterWidget
