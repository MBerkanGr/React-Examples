import {useState, useEffect} from 'react';

function Counter() {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState("Mehmet");
  
    useEffect(() => {
        console.log("Component mounted !")

        const interval = setInterval(() => {
            setNumber((n) => n + 1)
        }, 1000);

        return () => clearInterval(interval);
    }, []);
  
    useEffect(() => {
      console.log("Number State updated !")
    }, [number]);
  
    useEffect(() => {
      console.log("Name state updated !")
    }, [name]);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
      <hr />
      <h1>{name}</h1>
      <button onClick={() => setName("Berkan")}>Click</button>
    </div>
  )
}

export default Counter;