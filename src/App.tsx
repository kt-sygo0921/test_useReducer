import * as React from 'react';
import {reducer, initialState, increment, decrement, setCount} from './modules/module';

import './App.css';

const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const countLabel = React.useMemo(() => `${state.count}${state.unit}`, [state])
  const onClickIncement = React.useCallback(() => dispatch(increment()), [])
  const onClickDecement = React.useCallback(() => dispatch(decrement()), [])
  const onClickSetCount = React.useCallback(() => dispatch(setCount(999)), [])
  return (
    <div className="App">
      <p>count: {countLabel}</p>
      <button onClick={onClickIncement}>+</button>
      <button onClick={onClickDecement}>-</button>
      <button onClick={onClickSetCount}>999</button>
    </div>
  );
}

export default App;
