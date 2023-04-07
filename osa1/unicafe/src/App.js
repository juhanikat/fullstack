import { useState } from 'react'


const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>{props.text}</button>
    </>
  )
}

const StatisticRow = (props) => {
  return (
    <tr>
      <td>{props.statistic}</td><td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  if (total <= 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }


  const average = (1 * props.good + -1 * props.bad) / total
  const positivePercent = props.good / total * 100
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticRow statistic="Good" value={props.good} />
          <StatisticRow statistic="Neutral" value={props.neutral} />
          <StatisticRow statistic="Bad" value={props.bad} />
          <StatisticRow statistic="Total" value={total} />
          <StatisticRow statistic="Average" value={average} />
          <StatisticRow statistic="Positive" value={positivePercent + "%"} />
        </tbody>
      </table>
    </div>
  )
}
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback!</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App