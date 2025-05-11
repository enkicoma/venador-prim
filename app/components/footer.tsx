import { Facebook, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo-white.svg";

export default function Footer() {
  return (
    <footer className="bg-[#1B1B1B] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="flex items-center text-white">
              <Image
                width={200}
                height={200}
                src={logo}
                alt="Venador Prim Logo"
                className="w-auto h-[30px] md:h-[38px]"
              />
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4 mb-8">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <Facebook className="w-5 h-5 text-[#1B1B1B]" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-[#1B1B1B]" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/50 mb-8"></div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Venador Prim SRL | All Rights
            Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
