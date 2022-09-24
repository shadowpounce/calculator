import { useState, useEffect } from 'react'
import './App.css'
import Buttons from './components/Buttons/Buttons'
import Output from './components/Output/Output'

function App() {
  let [currentSign, setCurrentSign] = useState('')
  let [value, setValue] = useState('0')
  let [firstValue, setFirstValue] = useState('')
  let [isFractionalValue, setIsFractionalValue] = useState(false)

  useEffect(() => {
    value.includes('.')
      ? setIsFractionalValue(true)
      : setIsFractionalValue(false)
  }, [value])

  useEffect(() => {
    if (value.length === 0 || value === '0') {
      document.querySelector(`.remove-btn`).style.opacity = '.5'
    } else {
      document.querySelector(`.remove-btn`).style.opacity = '1'
    }
  }, [value])

  const calculation = (sign, a, b) => {
    // eslint-disable-next-line default-case
    switch (sign) {
      case '+':
        return Number(a) + Number(b)
      case '-':
        return a - b
      case '*':
        return a * b
      case '/':
        return a / b
      case '%':
        return a % b
    }
  }

  return (
    <div className="App">
      <Output sign={currentSign} firstValue={firstValue} value={value} />
      <Buttons
        setIsFractionalValue={setIsFractionalValue}
        isFractionalValue={isFractionalValue}
        calculation={calculation}
        firstValue={firstValue}
        setFirstValue={setFirstValue}
        sign={currentSign}
        setSign={setCurrentSign}
        value={value}
        setValue={setValue}
      />
    </div>
  )
}

export default App
