import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { puppyList } from "/data.js";
import { useState } from "react";
import "./App.css";
import  "./index.css";
// import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log(puppies);
  const [featPupId, setfeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);

  return (
    <>
      <div className="App">
        {puppies.map((puppy) => {
          return (
            <p className= "app"
              onClick={() => {
                setfeatPupId(puppy.id);
              }}
              key={puppy.id}
            >
              {puppy.name}
            </p>
          );
        })}
        {featPupId && (
        <div className = "ftPup">
        <h2>{featuredPup.name}</h2>
        <ul>
          <li>Age : {featuredPup.age}</li>
          <li>Email: {featuredPup.email}</li>
        </ul>
      </div>
      )}
      </div>
      
    </>
  );
}

export default App;
