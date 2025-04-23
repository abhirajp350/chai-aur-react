import React, { useState } from 'react'
import InputBox from './components/InputBox'
import userCurrencyInfo from './custom_hooks/useCurrencyInfo'
import useCurrencyInfo from './custom_hooks/useCurrencyInfo'

const CurrencyConverter = () => {

    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("inr")
    const [convertedAmount, setConvertedAmount] = useState(0)

    const CurrencyInfo = useCurrencyInfo(from)
    const options = Object.keys(CurrencyInfo)

    const swap = () => {
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }

    const convert = () => {
        setConvertedAmount(amount * CurrencyInfo[to])
    }


  return (
    <div className='container-fluid'>
        <div className="container bg-secondary" style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="card" style={{ width: "30rem" }}>
                <div className="card-header bg-warning text-center text-light">
                    <h2>Currency Converter</h2>
                </div>
                <div className="card-body">
                    <InputBox />
                </div>
                <div className="card-footer"></div>
            </div>
        </div>
    </div>
  )
}

export default CurrencyConverter