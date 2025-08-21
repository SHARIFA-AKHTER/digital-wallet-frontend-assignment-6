import { LoginForm } from "@/components/login-form";
import { Link } from "react-router-dom";
import Logo  from '@/assets/Logo/wallet logo.jpg';
import image from "@/assets/image/wallet image.jpg"; 
export default function Login() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left: Form Section */}
      <div className="flex flex-col gap-6 p-6 md:p-10">
        <div className="flex justify-center md:justify-start items-center gap-2">
          <Link to="/" className="flex items-center gap-2 font-medium">
            <img src={Logo} alt="Wallet Logo" className="w-10 h-10 object-cover" />
            <span className="text-lg font-bold">Digital Wallet</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            <LoginForm />
          </div>
        </div>
      </div>

      {/* Right: Image Section */}
      <div className="hidden lg:block relative">
        <img
          src={image}
          alt="Wallet"
          className="absolute inset-0 w-full h-full object-cover brightness-50 grayscale dark:brightness-30"
        />
      </div>
    </div>
  );
}
