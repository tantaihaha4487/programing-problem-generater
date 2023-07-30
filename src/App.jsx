import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [label, setLabel] = useState("Press generate to start!!");
  const [lastNumber, setLastNumber] = useState(null);
   let apiUrl = 'https://tantaihaha4487-programing-problem.onrender.com/problem';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const random = () => {
    let newNumber;
    do {
      newNumber = Math.floor(Math.random() * data.length);
    } while (newNumber === lastNumber);

    setLabel(data[newNumber]);
    setLastNumber(newNumber);
    console.log(`Number is: ${newNumber}`)

  }

  return (
    <>
    <h4>{data.length} problem is ready to solve!!</h4>
      <button className='generate-btn' onClick={random}>Generate</button>
      <div>
        <button className='add-problem'>Add problem</button>
        <div className='problem'>
          <label>{label}</label>
        </div>
      </div>
    </>
  )
}

export default App
