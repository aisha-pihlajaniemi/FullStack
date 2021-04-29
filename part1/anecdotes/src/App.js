import React, { useState } from 'react'
import Button from './components/Button'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
 
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState([0,0,0,0,0,0])
/*   console.log(selected)
  console.log(votes) */

  const handleClick = () => {
    const randomDote = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomDote)
  }

  const handleVoteClick = () => {
    const copyVotes = [...votes]
    copyVotes[selected] +=1
    setVote(copyVotes)
    }
  
  const mostVotes = () => {
    return votes.indexOf(Math.max(...votes))
  }

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h2>{anecdotes[selected]}</h2>
          </td>
        </tr>
        <tr>
        <td>
          <h3>Votes for this anecdote: {votes[selected]}</h3>
          </td>
        </tr>
        <tr>
          <td>
            <Button onClick={handleClick} text='Next Anecdote' />
            <Button onClick={handleVoteClick} text='Vote'/>
          </td>
        </tr>
        <tr>
          <td>
            <h3>The anecdote most voted for is: </h3>
          </td>
        </tr>
        <tr>
          <td>
            <p>{anecdotes[mostVotes()]}</p>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default App