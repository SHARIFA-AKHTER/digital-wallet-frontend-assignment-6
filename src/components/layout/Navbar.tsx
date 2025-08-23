// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useUserRole } from "@/hooks/useUserRole";
// import Logo from "@/assets/Logo/wallet logo.jpg";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const { role } = useUserRole();
//   const navigate = useNavigate();

//   const goToDashboard = () => {
//     if (role === "USER") navigate("/dashboard/user");
//     else if (role === "AGENT") navigate("/dashboard/agent");
//     else if (role === "ADMIN") navigate("/dashboard/admin");
//     else navigate("/login");
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("authUser"); // ✅ token clear
//     navigate("/login"); // redirect to login
//   };

//   const isLoggedIn = !!localStorage.getItem("authUser");

//   return (
//     <header className="w-full sticky top-0 z-50 bg-white border-b shadow-sm dark:bg-gray-900">
//       <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
//         {/* Logo & Title */}
//         <div className="flex items-center gap-2">
//           <img
//             src={Logo}
//             alt="Wallet Logo"
//             className="w-8 h-8 md:w-10 md:h-10 object-cover"
//           />
//           <Link
//             to="/"
//             className="text-lg sm:text-xl md:text-2xl font-bold text-primary"
//           >
//             Digital Wallet
//           </Link>
//         </div>

//         {/* Desktop Menu */}
//         <nav className="hidden lg:flex space-x-6 text-gray-700 dark:text-gray-200">
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//           <Link to="/features">Features</Link>
//           <Link to="/contact">Contact</Link>
//           <Link to="/pricing">Pricing</Link>
//           <Link to="/faq">FAQ</Link>
//           {isLoggedIn && (
//             <button
//               onClick={goToDashboard}
//               className="font-semibold text-indigo-600 hover:text-indigo-800"
//             >
//               Dashboard
//             </button>
//           )}
//         </nav>

//         {/* Right Buttons (Desktop) */}
//         <div className="hidden lg:flex space-x-3">
//           {!isLoggedIn ? (
//             <>
//               <Button asChild variant="outline">
//                 <Link to="/login">Login</Link>
//               </Button>
//               <Button asChild>
//                 <Link to="/register">Register</Link>
//               </Button>
//             </>
//           ) : (
//             <Button variant="destructive" onClick={handleLogout}>
//               Logout
//             </Button>
//           )}
//         </div>

//         {/* Mobile/Tablet Menu Button */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="lg:hidden text-gray-700 dark:text-gray-200"
//         >
//           {open ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile/Tablet Dropdown */}
//       {open && (
//         <div className="lg:hidden bg-white dark:bg-gray-800 border-t shadow-sm">
//           <nav className="flex flex-col space-y-2 px-4 py-4 text-gray-700 dark:text-gray-200">
//             <Link to="/" onClick={() => setOpen(false)}>Home</Link>
//             <Link to="/about" onClick={() => setOpen(false)}>About</Link>
//             <Link to="/features" onClick={() => setOpen(false)}>Features</Link>
//             <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
//             <Link to="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
//             <Link to="/faq" onClick={() => setOpen(false)}>FAQ</Link>
//             {isLoggedIn && (
//               <button
//                 onClick={() => {
//                   goToDashboard();
//                   setOpen(false);
//                 }}
//                 className="font-semibold text-indigo-600 hover:text-indigo-800"
//               >
//                 Dashboard
//               </button>
//             )}

//             <div className="flex flex-col gap-2 mt-3">
//               {!isLoggedIn ? (
//                 <>
//                   <Button asChild variant="outline">
//                     <Link to="/login">Login</Link>
//                   </Button>
//                   <Button asChild>
//                     <Link to="/register">Register</Link>
//                   </Button>
//                 </>
//               ) : (
//                 <Button
//                   variant="destructive"
//                   onClick={() => {
//                     handleLogout();
//                     setOpen(false);
//                   }}
//                 >
//                   Logout
//                 </Button>
//               )}
//             </div>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }

// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useUserRole } from "@/hooks/useUserRole";
// import Logo from "@/assets/Logo/wallet logo.jpg";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const { role } = useUserRole();
//   const navigate = useNavigate();

//   const goToDashboard = () => {
//     if (role === "USER") navigate("/dashboard/user");
//     else if (role === "AGENT") navigate("/dashboard/agent");
//     else if (role === "ADMIN") navigate("/dashboard/admin");
//     else navigate("/login");
//   };

//   return (
//     <header className="w-full sticky top-0 z-50 bg-white border-b shadow-sm dark:bg-gray-900">
//       <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
//         {/* Logo & Title */}
//         <div className="flex items-center gap-2">
//           <img
//             src={Logo}
//             alt="Wallet Logo"
//             className="w-8 h-8 md:w-10 md:h-10 object-cover"
//           />
//           <Link
//             to="/"
//             className="text-lg sm:text-xl md:text-2xl font-bold text-primary"
//           >
//             Digital Wallet
//           </Link>
//         </div>

//         {/* Desktop Menu */}
//         <nav className="hidden lg:flex space-x-6 text-gray-700 dark:text-gray-200">
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//           <Link to="/features">Features</Link>
//           <Link to="/contact">Contact</Link>
//           <Link to="/pricing">Pricing</Link>
//           <Link to="/faq">FAQ</Link>
//           <button
//             onClick={goToDashboard}
//             className="font-semibold text-indigo-600 hover:text-indigo-800"
//           >
//             Dashboard
//           </button>
//         </nav>

//         {/* Right Buttons (Desktop) */}
//         <div className="hidden lg:flex space-x-3">
//           <Button asChild variant="outline">
//             <Link to="/login">Login</Link>
//           </Button>
//           <Button asChild>
//             <Link to="/register">Register</Link>
//           </Button>
//         </div>

//         {/* Mobile/Tablet Menu Button */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="lg:hidden text-gray-700 dark:text-gray-200"
//         >
//           {open ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile/Tablet Dropdown */}
//       {open && (
//         <div className="lg:hidden bg-white dark:bg-gray-800 border-t shadow-sm">
//           <nav className="flex flex-col space-y-2 px-4 py-4 text-gray-700 dark:text-gray-200">
//             <Link to="/" onClick={() => setOpen(false)}>Home</Link>
//             <Link to="/about" onClick={() => setOpen(false)}>About</Link>
//             <Link to="/features" onClick={() => setOpen(false)}>Features</Link>
//             <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
//             <Link to="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
//             <Link to="/faq" onClick={() => setOpen(false)}>FAQ</Link>
//             <button
//               onClick={() => {
//                 goToDashboard();
//                 setOpen(false);
//               }}
//               className="font-semibold text-indigo-600 hover:text-indigo-800"
//             >
//               Dashboard
//             </button>

//             <div className="flex flex-col gap-2 mt-3">
//               <Button asChild variant="outline">
//                 <Link to="/login">Login</Link>
//               </Button>
//               <Button asChild>
//                 <Link to="/register">Register</Link>
//               </Button>
//             </div>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }


import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, LayoutDashboard } from "lucide-react"; // dashboard icon
import { Link } from "react-router-dom";
import { useUserRole } from "@/hooks/useUserRole";
import Logo from "@/assets/Logo/wallet logo.jpg";
import { useAuth } from "@/Context/AuthContext"; // auth context

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { role } = useUserRole();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    localStorage.removeItem("authUser"); // clear token/user
    navigate("/login", { replace: true });
  };

  // role based dashboard route
  const dashboardRoute =
    role === "USER"
      ? "/dashboard/user"
      : role === "AGENT"
      ? "/dashboard/agent"
      : role === "ADMIN"
      ? "/dashboard/admin"
      : "/login";

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b shadow-sm dark:bg-gray-900">
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
        <div className="hidden lg:flex space-x-3">
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

            {/* Always visible Dashboard */}
            <Link
              to={dashboardRoute}
              onClick={() => setOpen(false)}
              className="flex items-center gap-1 font-semibold text-indigo-600 hover:text-indigo-800"
            >
              <LayoutDashboard size={18} />
              Dashboard
            </Link>

            <div className="flex flex-col gap-2 mt-3">
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
