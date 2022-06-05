import { useState } from 'react'


const Button = ({label, action}) => {
  return (
    <button onClick={action}>{label}</button>
  )
}

const Stats = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good * 1 + neutral * 0 + bad * -1) / all
  const positivePercentage = good / all * 100
  return (
    <>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average: {average}</p>
      <p>positive: {positivePercentage}% </p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increment = (state, f) => {
    return () => f(state + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button label={"good"} action={increment(good, setGood)}/>
      <Button label={"neutral"} action={increment(neutral, setNeutral)}/>
      <Button label={"bad"} action={increment(bad, setBad)}/>
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App