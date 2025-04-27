import React from "react";

const FooterSection = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex justify-between items-start">
          {/* Logo Section */}
          <div className="mb-6">
            <a href="/" className="flex items-center">
              <img
                src="RAGOS_logo.png"
                className="h-8 me-3"
                alt="RAGOS Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                RAGOS
              </span>
            </a>
          </div>

          {/* Links Section */}
          <div className="flex space-x-8">
            {/* Resources */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/shop" className="hover:underline">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:underline">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://github.com/your-ragos-repo" className="hover:underline">
                    Github
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/your-invite-link" className="hover:underline">
                    Discord
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-and-conditions" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="/" className="hover:underline">
              RAGOS™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://facebook.com/yourpage"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
