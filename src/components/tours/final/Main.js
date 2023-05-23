import React, { useEffect, useState } from 'react';
import './tour.css';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project'
const Main = () => {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

const removeTour = (id) => {
   const newTours = tours.filter((tour) => tour.id !== id);
   setTours(newTours);
} 

const fetchTour = async () => {
    setLoading(true);
    try{
        const response = await fetch(url);
        const tours = await response.json()
        setLoading(false)
        setTours(tours)
    } catch (error) {
        setLoading(false);
        console.log(error);
    }
}
useEffect(() =>{
    fetchTour()
}, [])
if(loading){
    return(
        <main>
            <Loading />
        </main>
    )
}
if (tours.length === 0) {
    return(
        <main>
            <div className='title'>
                <h2>No Tours Left</h2>
                <button className='btn' onClick={() => fetchTour()}>refresh</button>
            </div>
        </main>
    )
}
  return (
    <main>
        <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default Main