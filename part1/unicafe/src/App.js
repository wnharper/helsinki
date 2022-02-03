import React from "react"

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const Display = ({label, num}) => {
  return (
    <>

        <td>{label}</td>
        <td>{num}</td>

    </>
  )
}

const Stats = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <h2>No feedback given</h2>
    )
  }
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td><h1>Statistics</h1></td>
          </tr>
          <tr>
            <Display label={'Good'} num={props.good} />
          </tr>
          <tr>
            <Display label={'Neutral'} num={props.neutral} />
          </tr>
          <tr>
            <Display label={'Bad'} num={props.bad} />
          </tr>
          <tr>
            <Display label={'All'} num={props.good + props.neutral + props.bad} />
          </tr>
          <tr>
            <Display label={'Avg'} num={((props.good*1) + (props.bad * (-1)) / 3)} />
          </tr>
          <tr>
            <Display label={'Avg %'} num={((props.good) / (props.good + props.neutral + props.bad))*100} />
          </tr>
        </tbody>
      </table>
    </>
  )
}


const App = () => {

  const [good, setGood] = React.useState(0)
  const [neutral, setNeutral] = React.useState(0)
  const [bad, setBad] = React.useState(0)


  return (
    <>
      <h1>Unicafe</h1>
      <h2>Give feedback</h2>
      <Button onClick={() => setGood(good + 1)} text={'Good'} />
      <Button onClick={() => setNeutral(neutral + 1)} text={'Neutral'} />
      <Button onClick={() => setBad(bad + 1)} text={'Bad'} />
      <Stats good={good} neutral={neutral} bad={bad} />

    </>
  );
}

export default App;
