import { useState } from 'react'

const Button = (props)=> {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return (
    // <p>{props.text} {props.value}</p>
    <table>
      <tbody>
        <tr>
         <td width="70px">{props.text}</td>
         <td width="70px">{props.value}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  
  if (good !== 0 || neutral !== 0 || bad !== 0) {
    return (
      <div>
        <h1>statistics</h1>
        <StatisticLine text='good' value={good}/>
        <StatisticLine text='neutral' value={neutral}/>
        <StatisticLine text='bad' value={bad}/>  
        <StatisticLine text='all' value={good + neutral + bad}/>
        <StatisticLine text='average' value={good*1 + neutral*0 + bad*(-1)/ (good + neutral + bad)}/>    
        <StatisticLine text='positive' value={good*100/(good + neutral + bad) } />
      </div>  
    )
  } 
  else {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={()=> setGood(good+1)} text='good'/>
      <Button onClick={()=> setNeutral(neutral+1)} text='neutral'/>
      <Button onClick={()=> setBad(bad+1)} text ='bad'/>
      
      <Statistics good = {good} neutral = {neutral} bad={bad}/>
    </div>
  )
}

export default App
