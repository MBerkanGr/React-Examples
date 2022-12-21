
import {useState} from "react";

function App() {
  const [name, setName] = useState("Mehmet");
  const [age, setAge] = useState(22);
  const [friends, setFriends] = useState(["Fatma", "Murat"]);
  const [address, setAddress] = useState({title : "Istanbul", zip : 34000})

  return (
    <div className="App">
      <h1>Hello {name} !</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Berkan")}>Change Name</button>
      <button onClick={() => setAge(18)}>Change Age</button>

      <hr />
      <br />

      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}

      <br />

      <button onClick={() => setFriends([...friends, "Berkan"])}>
        Add new friend
      </button>

      <hr />
      <br />

      <div>
        {address.title} {address.zip}
      </div>

      <br />

      <button onClick={() => setAddress({title : "Balikesir", zip : 10000})}>
        Change the address
      </button>
    </div>
  );
}

export default App;
