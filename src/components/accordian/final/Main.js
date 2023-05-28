import React, {useState} from 'react';
import './accordian.css'
import data from './data';
import AccordianItem from './Accordian'
const Main = () => {
  const [question, setQuestion] = useState(data)
  return (
    <main>
      <div className='container'>
        <h3>Question and answer about login</h3>
        <section className='info'>
          {question.map((question) => {
            return(
              <AccordianItem key={question.id} {...question} ></AccordianItem>
            )
          })}
        </section>
      </div>
    </main>
  )
}

export default Main