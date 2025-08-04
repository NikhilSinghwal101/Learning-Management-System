// npm install zustand

// // store.js
// import create from 'zustand';

// const useStore = create((set) => ({
//   count: 0,
//   increase: () => set((state) => ({ count: state.count + 1 })),
//   decrease: () => set((state) => ({ count: state.count - 1 })),
// }));

// export default useStore;


// // App.js
// import React from 'react';
// import useStore from './store';

// const App = () => {
//   const { count, increase, decrease } = useStore();

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increase}>Increase</button>
//       <button onClick={decrease}>Decrease</button>
//     </div>
//   );
// };

// export default App;


//---------------------------------------------------------------------------------------------



// // authStore.js
// import create from 'zustand';

// const useAuthStore = create((set) => ({
//   isLoggedIn: false,
//   user: null,
//   login: (userData) => set({ isLoggedIn: true, user: userData }),
//   logout: () => set({ isLoggedIn: false, user: null }),
// }));

// export default useAuthStore;


// // Login.js
// import React, { useState } from 'react';
// import useAuthStore from './authStore';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const login = useAuthStore((state) => state.login);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulate login with dummy data
//     const userData = { username };
//     login(userData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>
//           Username:
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </label>
//       </div>
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;


// // UserProfile.js
// import React from 'react';
// import useAuthStore from './authStore';

// const UserProfile = () => {
//   const { isLoggedIn, user, logout } = useAuthStore();

//   if (!isLoggedIn) {
//     return <p>Please log in.</p>;
//   }

//   return (
//     <div>
//       <h2>Welcome, {user.username}!</h2>
//       <button onClick={logout}>Logout</button>
//     </div>
//   );
// };

// export default UserProfile;


// // App.js
// import React from 'react';
// import Login from './Login';
// import UserProfile from './UserProfile';
// import useAuthStore from './authStore';

// const App = () => {
//   const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

//   return (
//     <div>
//       {isLoggedIn ? <UserProfile /> : <Login />}
//     </div>
//   );
// };

// export default App;


