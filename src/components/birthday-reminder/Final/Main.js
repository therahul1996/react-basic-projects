import React, { useState } from 'react';
import './reminder.css';
import data from './data';
import List from './List'

const Main = () => {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className='container'>
          <h3>{people.length} birthday today</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  )
}

export default Main