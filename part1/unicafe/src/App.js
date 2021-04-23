import React, { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import Display from './components/Display'
import Stats from './components/Stats'

const App = () => {

  const [ goodCounter, setGoodCounter ] = useState(0)
  const [ badCounter, setBadCounter ] = useState(0)
  const [ neutralCounter, setNeutralCounter ] = useState(0)
  const total = goodCounter+badCounter+neutralCounter
  const average = (goodCounter-badCounter)/total

  return (
    
    <div>
      <Header text={'Give us feedback: '} />

      <Button handleClick={() => setGoodCounter(goodCounter + 1)} text='Good' />
      <Button handleClick={() => setBadCounter(badCounter + 1)} text='Bad' />
      <Button handleClick={() => setNeutralCounter(neutralCounter + 1)} text='Neutral' />
      <br />
      <Header text={'Statistics: '} />
      <Display total={total} />
      <table>
        <Stats total={total} text='Good' calc={goodCounter} />
        <Stats total={total} text='Bad' calc={badCounter}/>
        <Stats total={total} text='Neutral' calc={neutralCounter}/>
    
        <Stats total={total} text='Total' calc={total} />
        <Stats total={total} text='Average' calc={average.toFixed(1)} />
        <Stats total={total} text='Positive %' calc={(goodCounter/total*100).toFixed(1)} />
      </table>
    </div>
  )
}

export default App;
