
import { Facebook, Twitter, Instagram, Github } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - Logo & Name */}
        <div>
          <h2 className="text-xl font-bold text-white">Digital Wallet</h2>
          <p className="mt-2 text-sm">
            Secure & easy wallet system for your daily transactions.
          </p>
        </div>

        {/* Middle Section - Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/about" className="hover:text-white">About</Link>
          <Link to="/dashboard" className="hover:text-white">Dashboard</Link>
          <Link to="/profile" className="hover:text-white">Profile</Link>
        </div>

        {/* Right Section - Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook className="w-5 h-5 hover:text-white" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <Twitter className="w-5 h-5 hover:text-white" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram className="w-5 h-5 hover:text-white" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <Github className="w-5 h-5 hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
        <p>© {new Date().getFullYear()} Digital Wallet. All rights reserved.</p>
      </div>
    </footer>
  );
}
