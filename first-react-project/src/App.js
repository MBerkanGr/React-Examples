import './App.css';
import User from "./components/User";
//import Header from './components/Header'

// function App() {
//   // return React.createElement("div", null, "Hello");
//   return(
//     <>
//       <Header />
//       <p classNmae = "xyz">
//         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
//         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
//         It has survived not only five centuries, but also the leap into electronic typesetting,
//         remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
//         sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
//         including versions of Lorem Ipsum.
//       </p>
//       <label htmlFor="myInput">
//         Name 
//         <input id="myinput"/>
//       </label>
//     </>
//   )
// }

// const name = "Mehmet Berkan"
// const surname = "Gorel"
// const isLoggedIn = true;

// function App() {
//   return (
//     <>
//       <h1>{isLoggedIn && `Name : ${name}, Surname : ${surname}`}
//       {!isLoggedIn && "You cant login"}
//       </h1>
//       <h1>
//         {isLoggedIn
//           ? `Name : ${name}, Surname : ${surname}`
//           : "You cant login"}
//       </h1>
//     </>
//   );
// }

// export default App;

const friends = [
  {
    id : 1,
    name : "Mehmet"
  },
  {
    id : 2,
    name : "Berkan"
  },
  {
    id : 3,
    name : "Ali"
  }
]

function App() {
  return (
    <>
      <User 
        name="Mehmet Berkan" 
        surname="Gorel"
        age= {22} 
        isLoggedIn={true} 
        friends= {friends}
        address={{
          title :"Kagithane / Istanbul",
          zip : 34000
        }
        }
        />
    </>
  )
}

export default App;