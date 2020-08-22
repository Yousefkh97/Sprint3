import React, { useState,useEffect } from 'react';
import './App.css';

import TasksGraph from './view/components/TasksGraph/TasksGraph'


function App() {

  const [content, setConent] = useState([]);

  useEffect(() => {
   
    fetch('/api/getDeletedAggrWithoutDate')
      .then(res => res.json())
      .then(data => {
        console.log(data)

        setConent(data);
      })
 

}, [])

  return (
    <div className="App">
      <form onSubmit={handleButton}>
        <input type='date' name='startDate' />
        <input type='date' name='endDate' />
        <input type='submit' value='Get Data' />
      </form>
      <div className='tasks-wrapper'>
        <TasksGraph content={content}/>
      </div>
    </div>
  );

  function handleButton(e) {

    // e.preventDefault()
    // let { startDate, endDate } = e.target.elements;
    // fetch('/api/taskList')
    //   .then(res => res.json())
    //   .then(data => {
    //     setConent(data);
    //     setStartDate(startDate.value)
    //     setEndDate(endDate.value)
    //   })

    //Get deleted Items fetch using Aggregate

    e.preventDefault();
    let { startDate, endDate } = e.target.elements;
    startDate = startDate.value;
    endDate = endDate.value;
    startDate = Date.parse(startDate)
    endDate = Date.parse(endDate)
    fetch('/api/getDeletedAggrWithDate', {
      method: 'POST',
      body: JSON.stringify({ startDate, endDate }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then(data => {
      setConent(data);
    });
  }
}




export default App;
