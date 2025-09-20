/*import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import AddUser from './user/AddUser'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AddUser/>
    </div>
  )
}

export default App
*/
import { useState } from "react";
import AddUser from "./user/AddUser";
import ViewAllUsers from "./user/ViewAllUsers"; // 👈 import here

function App() {
  return (
    <div>
      <AddUser />
      <hr />
      <ViewAllUsers /> {/* 👈 add here */}
    </div>
  );
}

export default App;
