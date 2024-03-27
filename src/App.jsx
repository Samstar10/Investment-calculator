import './App.css'

import { useState } from 'react'

import Header from './components/Header.jsx'
import UserInput from './components/UserInput.jsx'
import Results from './components/Results.jsx'

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevState) => {
        return {
            ...prevState,
            [inputIdentifier]: newValue
        }
    })
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      <Results input={userInput} />
    </>
  )
}

export default App
