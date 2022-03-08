import './App.css';
import React, {useState} from 'react';

function App() {

  let today = new Date().toISOString().slice(0, 10)

  const [dateYear, setDateYear] = useState('')

  function handleChange(e){
    setDateYear(e.target.value)

    console.log(setDateYear)
  }

  function handleSubmit(e){
    e.preventDefualt()
    console.log(dateYear)
  }

  return (
    <div className="container">
      <div className='header'>DOB Calculator</div>

      <span className='current-date'>Current Date: {today}</span>

      <form onSubmit={handleSubmit}>
        <input placeholder='Year' value={dateYear} onChange={handleChange}></input>

        <label>Month: </label>
        <select id='month' name='month'>
          <option value='january'>January</option>
          <option value='february'>February</option>
          <option value='march'>March</option>
          <option value='april'>April</option>
          <option value='may'>May</option>
          <option value='june'>June</option>
          <option value='july'>July</option>
          <option value='august'>August</option>
          <option value='september'>September</option>
          <option value='october'>October</option>
          <option value='november'>November</option>
          <option value='december'>December</option>
        </select>

        <input placeholder='day'></input>

        <button type='submit'>Submit</button>
      </form>

      <div className='results'>
        <span>Age: 22 years, 4 months, 23 days</span>
        <span>Age in Days: 8400</span>
        <span>Age in minutes: 3256294</span>
      </div>
    </div>
  );
}

export default App;
