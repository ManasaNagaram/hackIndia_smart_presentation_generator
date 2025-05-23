// import { useState } from 'react';
// import axios from 'axios';
// import { useAuth } from '../context/AuthContext';
// import './LoginForm.css';
    
  


// export default function LoginForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { login } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3000/auth/login', {
//         email,
//         password,
//       });
//       login(response.data.access_token);
//       alert('Login successful!');
//     } catch (err) {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4 bg-white rounded-lg shadow">
//     <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
//     <input
//       type="email"
//       placeholder="Email"
//       className="w-full p-2 mb-3 border rounded"
//       value={email}
//       onChange={(e) => setEmail(e.target.value)}
//     />
//     <input
//       type="password"
//       placeholder="Password"
//       className="w-full p-2 mb-4 border rounded"
//       value={password}
//       onChange={(e) => setPassword(e.target.value)}
//     />
//     <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
//       Login
//     </button>
//   </form> 
    
//   );
// }




import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email,
        password,
      });

      login(response.data.access_token);
      alert('Login successful!');
      navigate('/PresentationGenerator');
    } catch (err) {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-wrapper">
      {/* Optional Background Circles */}
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>

      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
