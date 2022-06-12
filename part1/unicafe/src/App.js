import { useState } from 'react'


const Button = ({label, action}) => {
  return (
    <button onClick={action}>{label}</button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good * 1 + neutral * 0 + bad * -1) / all
  const positivePercentage = good / all * 100
  if (good === 0 & neutral === 0 & bad === 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }
  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average:" value={average} />
          <StatisticLine text="positive:" value={positivePercentage + "%"} />
        </tbody>
      </table>
    </>
  )
}

const StatisticLine = ({text, value}) => {
  return (<tr>
            <td>{text}</td>
            <td>{value}</td>
          </tr>)
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App