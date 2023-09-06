import React, { useState } from 'react'
import './style.css'
const Main = () => {
    const [num, setNum] = useState(0);
    const [oldNum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();
    const inputNum = (e) => {
        let input = e.target.value;
        if (num === 0) {
            setNum(input);
        }
        else{
            setNum(num + input)
        }
        console.log(input)
    }
    const clearNum = () => {
        setNum(0);
    }
    const changeSign = () => {
        if (num > 0) {
            setNum(-num);
        }else{
            setNum(Math.abs(num))
        }
    }
    const percentageNum = () => {
        setNum(num / 100);
    }
    const operatorHandler = (e) => {
        let opratorInput = e.target.value;
        setOperator(opratorInput);
        setOldNum(num)
        setNum(0);
    }
    const calculate = () => {
        if (operator === "÷") {
            setNum(parseFloat(oldNum) / parseFloat(num))
        } 
        else if (operator === "*") {
            setNum(parseFloat(oldNum) * parseFloat(num))
        }
        else if (operator === "-") {
            setNum(parseFloat(oldNum) - parseFloat(num))
        }
        else if (operator === "+") {
            setNum(parseFloat(oldNum) + parseFloat(num))
        }
    }
  return (
    <div className='calculator-sec'>
        <div className='calculator-container'>
            <div className='calculator-box'>
                <div className='calculator-display'>{num}</div>
                <div className='calculator-btn'>
                    <button className='secondary' onClick={clearNum}>AC</button>
                    <button className='secondary' onClick={changeSign}>+/-</button>
                    <button className='secondary' onClick={percentageNum}>%</button>
                    <button className='primary' onClick={operatorHandler} value={"÷"}>÷</button>
                    <button onClick={inputNum} value={7}>7</button>
                    <button onClick={inputNum} value={8}>8</button>
                    <button onClick={inputNum} value={9}>9</button>
                    <button className='primary' onClick={operatorHandler} value={"*"}>*</button>
                    <button onClick={inputNum} value={4}>4</button>
                    <button onClick={inputNum} value={5}>5</button>
                    <button onClick={inputNum} value={6}>6</button>
                    <button className='primary' onClick={operatorHandler} value={"-"}>-</button>
                    <button onClick={inputNum} value={1}>1</button>
                    <button onClick={inputNum} value={2}>2</button>
                    <button onClick={inputNum} value={3}>3</button>
                    <button className='primary' onClick={operatorHandler} value={"+"}>+</button>
                    <button className='double-btn' onClick={inputNum} value={0}>0</button>
                    <button onClick={inputNum} value={"."}>.</button>
                    <button className='primary' onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main