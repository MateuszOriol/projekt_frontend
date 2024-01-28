import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../../hooks/useSignup";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const { signup, isLoading, error } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(name, surname, email, password);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form className="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
			<p className="text-center text-gray-600 text-xs mt-4">
				Welcome Back{' '}
                <Link to="/login" className="text-blue-500 hover:text-blue-700 mb-4">
                        Log in
                </Link>
				</p>
                <h3 className="block text-gray-700 text-lg font-bold mb-2">Sign up</h3>
                
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name:
                </label>
                <input
                    id="name"
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="surname">
                    Surname:
                </label>
                <input
                    id="surname"
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={(e) => setSurname(e.target.value)}
                    value={surname}
                />
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
                    Sign up
                </button>

                {error && <div className="text-red-500 text-xs italic mt-4">{error}</div>}
            </form>
        </div>
    );
};

export default Signup;
