import { Link, NavLink } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";

const linkBase =
  "px-6 py-2 text-sm font-medium transition";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* left: logo + (optional) location selector */}
        <div className="flex items-center gap-8">
          <Link to="/">
            <img src={logo} alt="b2built.dev" className="h-12 w-auto" />
          </Link>

          <button className="hidden items-center gap-1 text-sm font-medium text-brand md:flex">
            Milan <ChevronDown size={16} />
          </button>
        </div>

        {/* centred nav pills */}
        <nav className="absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center rounded-full border border-brand/30 bg-white/70 backdrop-blur-sm">
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `${linkBase} ${
                    isActive ? "text-white bg-brand rounded-full" : "text-brand"
                  }`
                }
              >
                Solutions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${linkBase} ${
                    isActive ? "text-white bg-brand rounded-full" : "text-brand"
                  }`
                }
              >
                About&nbsp;Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `${linkBase} ${
                    isActive ? "text-white bg-brand rounded-full" : "text-brand"
                  }`
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${linkBase} ${
                    isActive ? "text-white bg-brand rounded-full" : "text-brand"
                  }`
                }
              >
                Contact&nbsp;Us
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* right-side CTA */}
        <Link
          to="/demo"
          className="hidden rounded-full border border-brand px-5 py-2 text-sm font-medium text-brand transition hover:bg-brand hover:text-white md:block"
        >
          Request&nbsp;a&nbsp;Demo
        </Link>

        {/* mobile hamburger */}
        <button className="text-brand md:hidden">
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
}
