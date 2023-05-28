import React, { useState } from 'react'
import data from './data'
const Lorem = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  }
    return (
    <>
      <section className='section-center'>
        <h3>Tired of boring lorem ipusum?</h3>
        <form className='lorem-form' onSubmit={handleSubmit}>
          <label htmlFor='amount'>Paragraph</label>
          <input 
          type='number'
          name='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)} />
          <button className='btn' type='submit'>Genertae</button>
        </form>
    </section>
  <article className='lorem-text'>
    {text.map((item, index) => {
      return (
        <p key={index}>{item}</p>
      )
    })}
  </article>
    </>
  )
}

export default Lorem;