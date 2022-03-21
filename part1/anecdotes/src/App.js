import { useState } from "react";

const Anecdote = (props) => (
  <div>
    <h1>{props.header}</h1>
    <p>{props.text}</p>
    <p>has {props.vote} </p>
  </div>)

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

  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const nextBtn = () => {
    let newSelected = selected
    if (newSelected === selected){
      setSelected(Math.floor(Math.random() * anecdotes.length))
    }
  }

  const voteBtn = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes([...votesCopy])
  }

  const maxVoteIndex = votes.indexOf(Math.max( ...votes ))

  return (
    <div>
      <Anecdote header="Anecdote of the day" 
      text={anecdotes[selected]} vote={votes[selected]}/>
      <button onClick={nextBtn}> Next </button>
      <button onClick={voteBtn}>vote</button>
      <Anecdote header="Most Voted Anecdote"
      text={anecdotes[maxVoteIndex]} vote={votes[maxVoteIndex]} />
    </div>
  );
}

export default App;
