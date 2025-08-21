
import { LoginForm } from "@/auth/LoginForm";
import { Link } from "react-router-dom";
import Logo from "@/assets/Logo/wallet logo.jpg";
import image from "@/assets/image/wallet image.jpg";

export default function Login() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      {/* Left: Form Section */}
      <div className="flex flex-col gap-6 p-4 sm:p-6 md:p-10">
        {/* Logo */}
        <div className="flex justify-center md:justify-start items-center gap-2">
          <Link to="/" className="flex items-center gap-2 font-medium">
            <img
              src={Logo}
              alt="Wallet Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 object-cover"
            />
            <span className="text-base sm:text-lg md:text-xl font-bold">
              Digital Wallet
            </span>
          </Link>
        </div>

        {/* Form */}
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg">
            <LoginForm />
          </div>
        </div>
      </div>

      {/* Right: Image Section */}
      <div className="hidden lg:flex relative items-center justify-center">
        <img
          src={image}
          alt="Wallet"
          className="absolute inset-0 w-full h-full object-cover brightness-75 dark:brightness-50"
        />
        <div className="absolute inset-0 bg-black/40 lg:bg-black/20"></div>
      </div>
    </div>
  );
}
