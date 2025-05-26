import { Sparkles, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg"; // your portrait

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-start gap-12 px-6 py-24 md:flex-row">
      {/* LEFT column — headline + CTA */}
      <div className="w-full md:w-1/2">
        <h1 className="text-left text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
          <span className="inline-flex items-center gap-2">
            <Sparkles className="h-8 w-8 text-brand" />
            Your&nbsp;big&nbsp;idea.
          </span>
          <br />
          <span className="inline-flex items-center gap-2">
            Our&nbsp;tech&nbsp;power.
          </span>
          <br />
          <span className="inline-flex items-center gap-2 rounded bg-gray-100 px-2 py-1">
            Let’s&nbsp;launch
            <Rocket className="h-6 w-6 text-brand" />
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-left text-lg text-gray-600">
          Without the hassle of building and managing an in-house team.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white shadow transition hover:bg-brand-dark"
          >
            Schedule&nbsp;a&nbsp;Call
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-brand px-6 py-3 text-sm font-medium text-brand transition hover:bg-brand hover:text-white"
          >
            Digital&nbsp;Services
          </Link>
        </div>
      </div>

      {/* RIGHT column — photo & link */}
      <div className="flex w-full flex-col items-center md:w-1/2 md:items-end">
        <img
          src={profile}
          alt="Developer portrait"
          className="h-80 w-80 rounded-full object-cover shadow-lg md:h-96 md:w-96"
        />
        <p className="mt-4 text-center text-sm font-semibold text-gray-700 md:text-right">
          Meet the developer
        </p>
        <Link
          to="/about"
          className="mt-1 text-center text-sm font-medium text-brand underline-offset-4 hover:underline md:text-right"
        >
          Learn more&nbsp;→
        </Link>
      </div>
    </section>
  );
}
