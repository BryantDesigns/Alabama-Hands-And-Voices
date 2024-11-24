import Link from "next/link";
import Image from "next/image";

const navigation = {
  pages: [
    { name: "Home", href: "/" },
    { name: "About", href: "/who-we-are" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
    {
      name: "Parent Road Map",
      href: "assets/02_Parent%20Road%20Map.pdf",
      external: true,
    },
  ],
  contact: [
    { type: "Address", text: "P.O. Box 130627 Birmingham, AL 35213" },
    { type: "Email", text: "alabamahinfo@gmail.com" },
    { type: "Phone", text: "+1 205 677-3136" },
  ],
  social: [
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "YouTube", href: "#" },
    { name: "GitHub", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-hvblue-500 text-white mt-16">
      {/* Donation Section */}
      <div className="bg-hvorange-500 py-4 border-t-4 border-hvorange-700">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-6">
          <h5 className="text-lg mb-4 sm:mb-0">
            Want to donate to our mission?
          </h5>
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
            className="flex items-center"
          >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              value="R99Y9497TS2SW"
            />
            <button
              type="submit"
              className="bg-secondary text-white font-bold py-2 px-4 rounded hover:bg-hvorange-600"
            >
              Donate Here!
            </button>
          </form>
        </div>
      </div>

      {/* Footer Links and Information */}
      <div className="container mx-auto px-6 py-12 text-center text-md-left">
        <div className="flex flex-col lg:flex-row justify-between gap-8 text-gray-300">
          {/* Logo Section */}
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <Image
              src="https://via.placeholder.com/200"
              alt="HV Logo"
              width={200}
              height={200}
              className="mx-auto lg:mx-0"
            />
          </div>

          {/* Pages Links */}
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <h6 className="text-lg font-bold mb-4">Pages</h6>
            <ul className="space-y-3">
              {navigation.pages.map((page) => (
                <li key={page.name}>
                  <Link
                    href={page.href}
                    target={page.external ? "_blank" : undefined}
                    rel={page.external ? "noopener noreferrer" : undefined}
                    className="hover:text-white"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:w-1/3">
            <h6 className="text-lg font-bold mb-4">Contact</h6>
            <ul className="space-y-3">
              {navigation.contact.map((info) => (
                <li key={info.type} className="flex items-start">
                  <span className="font-bold">{info.type}:&nbsp;</span>
                  <span>{info.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media and Copyright */}
      <div className="bg-hvblue-600 text-gray-200 text-center py-6 border-t border-gray-700">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-6">
          {/* Social Media Links */}
          <div className="flex gap-x-6 mb-4 sm:mb-0">
            {navigation.social.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-gray-200 hover:text-white"
              >
                {social.name}
              </Link>
            ))}
          </div>

          {/* Copyright Information */}
          <p className="text-sm">
            &copy; 2024 Bryant Designs. All rights reserved.{" "}
            <Link
              href="http://tylerlbryant.com/"
              className="text-hvorange-400 hover:text-white"
            >
              Bryant Designs
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
