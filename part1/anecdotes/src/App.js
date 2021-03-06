import { useEffect, useState } from 'react'

const Button = ({label, action}) => {
  return <button onClick={action}>{label}</button>
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [points, setPoints] = useState(new Uint8Array(anecdotes.length));

  const [selected, setSelected] = useState(0)
  const [mostPoint, setMostPoint] = useState({"index": 0, "point": 0})
 
  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
    console.log(selected)
  }

  const upVote = () => {
    const newPoints = [...points]
    newPoints[selected] += 1
    setPoints(newPoints)
  }

  useEffect(() => {
    const findMostPoint = () => {
      return Math.max(...points)
    }
  
    const findIndexWithMostPoint = () => {
      const most = findMostPoint()
      return points.indexOf(most)
    }

    setMostPoint({"index": findIndexWithMostPoint(), "point": findMostPoint()})
  }, [points])

  return (
    <div>
      <p>{anecdotes[selected]} </p>
      <p>has {points[selected]} votes</p>
      <Button label="vote" action={upVote}/>
      <Button label="next anecdote" action={randomAnecdote}/>
      <h1>Anecdotes with most votes</h1>
      <p>{anecdotes[mostPoint["index"]]}</p>
      <p>has {mostPoint["point"]} votes</p>
    </div>
  )
}

export default App