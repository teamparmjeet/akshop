import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 shadow-sm mt-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              AK
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Your one-stop solution for premium products.  
              Delivering quality and trust since 2023.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Follow Us
            </h3>
            <div className="flex space-x-4 mt-4">
              <Link href="https://facebook.com" target="_blank">
                <FaFacebook className="w-6 h-6 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white" />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <FaTwitter className="w-6 h-6 text-gray-600 hover:text-blue-400 dark:text-gray-400 dark:hover:text-white" />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <FaInstagram className="w-6 h-6 text-gray-600 hover:text-pink-500 dark:text-gray-400 dark:hover:text-white" />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <FaLinkedin className="w-6 h-6 text-gray-600 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} AK™. All Rights Reserved.
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {/* Made with ❤️ by Parmjeet Rathore */}
          </span>
        </div>
      </div>
    </footer>
  );
}
