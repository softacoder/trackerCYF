// Version3.

// version 2. this has a simplified login function that does not allow us to have a login function for trainees and one for mentors.
// Necessary because mentors will have increased permission to create and upload modules and tasks. Updates necessary.
// This version has no filter functions. For backend see server.js.

import React, { useState } from "react";
import axios from "axios";

function MenuBar() {
  //   return (
  //     <nav>
  //       <ul>
  //         <li>
  //           <a href="/">Home</a>
  //         </li>
  //         <li>
  //           <a href="/tasks">Tasks</a>
  //         </li>
  //         <li>
  //           <a href="/about">About</a>
  //         </li>
  //       </ul>
  //     </nav>
  //   );
  // }

  function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
      try {
        const response = await axios.post("/login", { username, password });
        const token = response.data.token;
        // Store the token in local storage or a cookie
      } catch (error) {
        console.error("Login failed", error);
      }
    };

    return (
      <div>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }
} // this curly bracket closes the menubar
export default Menubar;

// version 1

// import React from 'react';

// function MenuBar() {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <a href="/">Home</a>
//         </li>
//         <li>
//           <a href="/tasks">Tasks</a>
//         </li>
//         <li>
//           <a href="/about">About</a>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default MenuBar;
