import { companyInfo } from "../../constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg sm:text-xl">F</span>
            </div>
            <span className="font-playfair text-2xl sm:text-3xl font-bold">
              {companyInfo.name}
            </span>
          </div>
          <p className="text-gray-400 mb-4 sm:mb-6 text-base sm:text-lg px-4">
            {companyInfo.tagline}
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
            <a
              href="#"
              className="text-gray-400 hover:text-amber-500 transition-colors duration-200 text-sm sm:text-base"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-amber-500 transition-colors duration-200 text-sm sm:text-base"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-amber-500 transition-colors duration-200 text-sm sm:text-base"
            >
              Pinterest
            </a>
          </div>
          <div className="space-y-2 text-gray-400 mb-6 sm:mb-8">
            <p>
              <a
                href={`tel:${companyInfo.contact.phone}`}
                className="hover:text-amber-500 transition-colors text-sm sm:text-base"
              >
                {companyInfo.contact.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${companyInfo.contact.email}`}
                className="hover:text-amber-500 transition-colors text-sm sm:text-base break-all"
              >
                {companyInfo.contact.email}
              </a>
            </p>
          </div>
          <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} {companyInfo.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
