import { useState , useEffect } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [count, setCount] = useState(0)
  const [fruits, setFruits] = useState([]);
  const [people, setPeople] = useState([]);


  const fechAPI = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api"); 
      setFruits(response.data.fruits);
      setPeople(response.data.people); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(()=>{
  fechAPI();
  },[]);

  return (
    <>
    <div>
      <h1>Vite + React</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </button>
    </div>
    
    <div className="card">
      <h2>Fruits</h2>
      {fruits.length > 0 ? (
        fruits.map((fruit, index) => (
          <div key={index}>
            <p>{fruit}</p>
          </div>
        ))
      ) : (
        <p>No fruits to display</p>
      )}

      <h2>People</h2>
      {people.length > 0 ? (
        people.map((person, index) => (
          <div key={index}>
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
            <p>Gender: {person.gender}</p>
          </div>
        ))
      ) : (
        <p>No people to display</p>
      )}
    </div>
  </>
  );
};
export default App
