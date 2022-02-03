import React from "react"

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const DisplayQuote = ({index, anecdotes, voted}) => {

  if (index === -1) {
    return (
      <p>No votes have been placed</p>
    )
  }

  return (
    <div>
      <p>{anecdotes[index]}</p>
      <p>Has {voted[index]} votes</p>
    </div>
  )
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
  //debugger
  const [selected, setSelected] = React.useState(0)
  const [voted, setVote] = React.useState(Array(anecdotes.length).fill(0))
  const [mostVotes, setMostVotes] = React.useState(-1)

  const pickRandom = () => {
    const index = Math.floor(Math.random() * anecdotes.length)
    setSelected((selected + index) % anecdotes.length)
    setMostVotes(calcMostVotes)
  }

  const vote = () => {
      const copy = [...voted]
      copy[selected] += 1
      setVote(copy)
      setMostVotes(calcMostVotes)
  }

  const calcMostVotes = () => {
    //debugger
    const copy = [...voted]
    const maxvotes = Math.max(...copy)
    if (maxvotes === 0) {
      return -1
    }

    return (
      copy.indexOf(maxvotes)
    )
  }


 
  return (
    
    <>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]}
      </div>
      
      <p>has {voted[selected]} votes</p>
      <Button onClick={vote} text={'Vote'} />
      <Button onClick={pickRandom} text={'Next random quote'} />

      <h2>Anecdote with the most votes</h2>
      <DisplayQuote index={mostVotes} anecdotes={anecdotes} voted={voted} />
      
    </>
    
  );
}

export default App;
