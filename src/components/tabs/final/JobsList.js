import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
const url = 'https://course-api.com/react-tabs-project'

const JobsList = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJob = async () => {
    const jobs = await fetch(url)
    const newJob = await jobs.json();
    setJobs(newJob);
    setLoading(false);
    
  }
  useEffect (() => {
    fetchJob();
  },[])

  if(loading) {
    return(
      <section className='section loading'>
          <h1>Loading...</h1>
      </section>
    )
  }
  const { company, title, dates, duties } = jobs[value]
  return (
    <section className='section'>
        <div className='title'>
          <h1>Jobs</h1>
          <div className='underline'></div>
        </div>
        <div className='jobs-center'>
          <div className='btn-container'>
              {jobs.map((item, index) => {
                return (
                  <button 
                  key={item.id}
                  onClick={() => setValue(index)}
                  className={`job-btn ${index === value && 'active-btn'}`}>{item.company}</button>
                )
              })}
          </div>
          <article className='job info'>
              <h1>{title}</h1>
              <h2>{company}</h2>
              <p className='job-dates'>{dates}</p>
              {duties.map((duty, index) => {
                return (
                  <div key={index} className='job-description'>
                  <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
                )
              })}
          </article>
        </div>
    </section>
  )
}

export default JobsList