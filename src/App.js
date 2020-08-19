import React, { useState } from 'react';
import './App.css';

import Task from './view/components/Task/Task'


function App() {

  const [content, setConent] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('')
  return (
    <div className="App">
      <form onSubmit={handleButton}>
        <input type='date' name='startDate' />
        <input type='date' name='endDate' />
        <input type='submit' value='Get Data' />
      </form>
      <div className='tasks-wrapper'>
        {
          content.map((newItem, index) => {
            return <Task key={index} newItem={newItem} startDate={startDate} endDate={endDate}/>

          })
        }
      </div>
    </div>
  );

  function handleButton(e) {
    e.preventDefault()
    let { startDate, endDate } = e.target.elements;
    fetch('/api/taskList')
      .then(res => res.json())
      .then(data => {
        setConent(data);
        setStartDate(startDate.value)
        setEndDate(endDate.value)
      })
  }
}




export default App;
