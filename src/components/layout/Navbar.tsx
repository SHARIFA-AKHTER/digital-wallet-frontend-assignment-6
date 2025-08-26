import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, LayoutDashboard, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserRole } from "@/hooks/useUserRole";
import Logo from "@/assets/Logo/wallet logo.jpg";
import { useAuth } from "@/Context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const { isUser, isAdmin, isAgent } = useUserRole();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  // dark mode effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleLogout = () => {
    logout();
    localStorage.removeItem("authUser");
    navigate("/login", { replace: true });
  };

  const dashboardRoute = isUser
      ? "/dashboard/user"
      : isAgent
      ? "/dashboard/agent"
       : isAdmin
      ? "/dashboard/admin"
      : "/login";

  return (
    <header className="w-full sticky top-0 z-50 bg-indigo-50 border-b shadow-sm dark:bg-gray-900">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo & Title */}
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Wallet Logo"
            className="w-8 h-8 md:w-10 md:h-10 object-cover"
          />
          <Link
            to="/"
            className="text-lg sm:text-xl md:text-2xl font-bold text-primary"
          >
            Digital Wallet
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-6 text-gray-700 dark:text-gray-200">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/features">Features</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/faq">FAQ</Link>
          <Link
            to={dashboardRoute}
            className="flex items-center gap-1 font-semibold text-indigo-600 hover:text-indigo-800"
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>
        </nav>

        {/* Right Buttons (Desktop) */}
        <div className="hidden lg:flex items-center space-x-3">
          {/* Dark/Light toggle */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </Button>

          {isAuthenticated ? (
            <Button variant="destructive" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <>
              <Button asChild variant="outline">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link to="/register">Register</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile/Tablet Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-gray-700 dark:text-gray-200"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile/Tablet Dropdown */}
      {open && (
        <div className="lg:hidden bg-white dark:bg-gray-800 border-t shadow-sm">
          <nav className="flex flex-col space-y-2 px-4 py-4 text-gray-700 dark:text-gray-200">
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link to="/features" onClick={() => setOpen(false)}>
              Features
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <Link to="/pricing" onClick={() => setOpen(false)}>
              Pricing
            </Link>
            <Link to="/faq" onClick={() => setOpen(false)}>
              FAQ
            </Link>

            <Link
              to={dashboardRoute}
              onClick={() => setOpen(false)}
              className="flex items-center gap-1 font-semibold text-indigo-600 hover:text-indigo-800"
            >
              <LayoutDashboard size={18} />
              Dashboard
            </Link>

            <div className="flex flex-col gap-2 mt-3">
              {/* Dark/Light toggle mobile */}
              <Button
                variant="outline"
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center justify-center"
              >
                {darkMode ? (
                  <>
                    <Sun className="w-4 h-4 mr-1" /> Light
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 mr-1" /> Dark
                  </>
                )}
              </Button>

              {isAuthenticated ? (
                <Button variant="destructive" onClick={handleLogout}>
                  Logout
                </Button>
              ) : (
                <>
                  <Button asChild variant="outline">
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button asChild>
                    <Link to="/register">Register</Link>
                  </Button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
