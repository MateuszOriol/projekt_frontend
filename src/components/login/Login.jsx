import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <h3 className="block text-gray-700 text-lg font-bold mb-2">Log in</h3>
  
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email:
        </label>
        <input
          id="email"
          type="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password:
        </label>
        <input
          id="password"
          type="password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Log in
        </button>

        {error && <div className="text-red-500 text-xs italic mt-4">{error}</div>}
        
        <p className="text-center text-gray-600 text-xs mt-4">
          New Here?{' '}
          <Link to="/signup" className="text-blue-500 hover:text-blue-700">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
