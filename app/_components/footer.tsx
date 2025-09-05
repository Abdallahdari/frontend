import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href={"/"} className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-academic-blue" />
              <span className="text-2xl font-bold bg-gradient-to-r from-academic-blue to-academic-purple bg-clip-text text-transparent">
                EduPlatform
              </span>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Empowering students and teachers with comprehensive educational
              tools and resources for academic excellence.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="p-2 bg-[#61A6FA] hover:bg-[#1d77e6] transition-all duration-300 rounded-full "
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="p-2 bg-[#7C3BED] rounded-full hover:bg-[hsl(262,83%,60%)] transition-all duration-300"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="p-2 bg-[#21C45D] rounded-full hover:bg-[hsl(137,71%,60%)] transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="p-2 bg-[#F97415] rounded-full hover:bg-[hsl(25,95%,60%)] transition-all duration-300"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav className="space-y-2">
              <Link
                href={"/"}
                className="block text-gray-300 hover:text-academic-blue transition-colors"
              >
                Home
              </Link>
              <Link
                href={"/"}
                className="block text-gray-300 hover:text-academic-blue transition-colors"
              >
                Courses
              </Link>
              <Link
                href={"/"}
                className="block text-gray-300 hover:text-academic-blue transition-colors"
              >
                Exams
              </Link>
              <Link
                href={"/"}
                className="block text-gray-300 hover:text-academic-blue transition-colors"
              >
                Teacher Portal
              </Link>
              <a
                href="#"
                className="block text-gray-300 hover:text-academic-blue transition-colors"
              >
                About Us
              </a>
              <Link
                href={""}
                className="block text-gray-300 hover:text-academic-blue transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Academic Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Academic Resources
            </h3>
            <nav className="space-y-2">
              <Link
                href=""
                className="block text-gray-300 hover:text-academic-green transition-colors"
              >
                Study Materials
              </Link>
              <Link
                href="#"
                className="block text-gray-300 hover:text-academic-green transition-colors"
              >
                Research Papers
              </Link>
              <Link
                href="#"
                className="block text-gray-300 hover:text-academic-green transition-colors"
              >
                Academic Calendar
              </Link>
              <Link
                href="#"
                className="block text-gray-300 hover:text-academic-green transition-colors"
              >
                Library Access
              </Link>
              <Link
                href="#"
                className="block text-gray-300 hover:text-academic-green transition-colors"
              >
                Student Support
              </Link>
              <Link
                href="#"
                className="block text-gray-300 hover:text-academic-green transition-colors"
              >
                Career Services
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="h-5 w-5 text-academic-orange flex-shrink-0" />
                <span>123 Education Street, Academic City, AC 12345</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="h-5 w-5 text-academic-green flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="h-5 w-5 text-academic-blue flex-shrink-0" />
                <span>info@eduplatform.com</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-2">
                Stay Updated
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-academic-blue"
                />
                <button className="px-4 py-2 bg-academic-blue hover:bg-academic-blue/80 rounded-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 EduPlatform. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link
                href="#"
                className="hover:text-academic-blue transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="hover:text-academic-blue transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="hover:text-academic-blue transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                href="#"
                className="hover:text-academic-blue transition-colors"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
