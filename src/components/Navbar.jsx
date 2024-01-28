import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-lg font-bold">
          Shop
        </a>

        <div className="flex items-center space-x-4">
          <a href="/cart" className="text-white hover:text-gray-300">
            Cart
          </a>
          {user && (
            <button onClick={handleClick} className="text-red-500 hover:text-red-700">
              Log out
            </button>
          )}
          {!user && (
            <>
              <a href="/login" className="text-blue-500 hover:text-blue-700">
                Login
              </a>
              <a href="/signup" className="text-blue-500 hover:text-blue-700">
                Signup
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

