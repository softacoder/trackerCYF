// Update 2 now also connect to trainee.js and mentor.js
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MenuBar from "./MenuBar";
import Trainee from "./trainee";
import Mentor from "./mentor";

function App() {
  // Define a state variable to track the user's role
  const [userRole, setUserRole] = useState(null);

  // Function to set the user's role
  const setUser = (role) => {
    setUserRole(role);
  };

  return (
    <div className="App">
      <header className="App-header">
        <MenuBar setUser={setUser} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        {userRole === "trainee" && <Trainee />}
        {userRole === "mentor" && <Mentor />}
        {userRole === null && (
          <div>
            {/* Default content if no role is selected */}
            <h2>Welcome to the App</h2>
            <p>Choose a role to access the dashboard:</p>
            <button onClick={() => setUser("trainee")}>Trainee</button>
            <button onClick={() => setUser("mentor")}>Mentor</button>
          </div>
        )}
      </main>
      <footer></footer>
    </div>
  );
}

export default App;

// Update 1 connect to the menubar
// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import MenuBar from "./MenuBar";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <MenuBar />
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// original code

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
