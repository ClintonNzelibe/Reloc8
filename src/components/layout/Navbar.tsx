import {
  Menu,
  X,
  Truck,
  ArrowRight,
  MapPinned,
} from "lucide-react";
import { useState } from "react";

import Container from "../ui/Container";
import Button from "../ui/Button";

const navigation = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Fleet", id: "fleet" },
  { label: "Tracking", id: "tracking" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F8FAFC]/90 px-3 py-3 backdrop-blur-xl sm:px-5">
      <Container>
        <div
          className={`relative rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 ${
            mobileOpen ? "rounded-b-none shadow-lg" : ""
          }`}
        >
          {/* Main Navbar */}
          <div className="flex h-[72px] items-center justify-between px-4 sm:px-6">

            {/* Logo */}
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="group flex items-center gap-3"
            >
              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-[#0B1F33] text-[#F97316] shadow-sm transition duration-300 group-hover:scale-105">
                <Truck
                  size={21}
                  strokeWidth={2.5}
                  className="transition duration-300 group-hover:translate-x-0.5"
                />

                <span className="absolute bottom-1 right-1 h-1.5 w-1.5 rounded-full bg-[#F97316]" />
              </div>

              <div className="text-left">
                <span className="block text-[21px] font-black leading-none tracking-[-0.04em] text-[#0B1F33]">
                  Reloc<span className="text-[#F97316]">8</span>
                </span>

                <span className="mt-1 hidden text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400 sm:block">
                  Moving Possibilities
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden items-center rounded-full bg-[#F8FAFC] p-1 lg:flex">
              {navigation.map((item) => {
                const isTracking = item.id === "tracking";

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className="group relative flex items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-semibold text-[#0B1F33] transition duration-300 hover:bg-white hover:text-[#F97316] hover:shadow-sm"
                  >
                    {isTracking && (
                      <MapPinned
                        size={14}
                        className="text-[#F97316]"
                      />
                    )}

                    <span>{item.label}</span>

                    <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#F97316] transition-all duration-300 group-hover:w-5" />
                  </button>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="group inline-flex items-center gap-2 rounded-full bg-[#F97316] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl"
              >
                Request a Quote

                <ArrowRight
                  size={17}
                  className="transition duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 lg:hidden ${
                mobileOpen
                  ? "border-[#F97316] bg-[#F97316] text-white"
                  : "border-slate-200 bg-[#F8FAFC] text-[#0B1F33] hover:border-[#F97316] hover:text-[#F97316]"
              }`}
              aria-label={
                mobileOpen ? "Close menu" : "Open menu"
              }
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X
                  size={23}
                  strokeWidth={2.5}
                />
              ) : (
                <Menu
                  size={23}
                  strokeWidth={2.5}
                />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`overflow-hidden transition-all duration-300 lg:hidden ${
              mobileOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-t border-slate-100 px-4 pb-5 pt-3 sm:px-6">

              <nav className="space-y-1">
                {navigation.map((item, index) => {
                  const isTracking = item.id === "tracking";

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => scrollToSection(item.id)}
                      className="group flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-sm font-semibold text-[#0B1F33] transition hover:bg-orange-50 hover:text-[#F97316]"
                    >
                      <span className="flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-[10px] font-black text-slate-400 transition group-hover:bg-orange-100 group-hover:text-[#F97316]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {isTracking && (
                          <MapPinned
                            size={16}
                            className="text-[#F97316]"
                          />
                        )}

                        {item.label}
                      </span>

                      <ArrowRight
                        size={16}
                        className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#F97316]"
                      />
                    </button>
                  );
                })}
              </nav>

              {/* Mobile CTA */}
              <div className="mt-4 border-t border-slate-100 pt-4">
                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#F97316] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
                >
                  Request a Quote
                  <ArrowRight size={17} />
                </button>
              </div>

              {/* Mobile status */}
              <div className="mt-4 flex items-center justify-center gap-2 text-[11px] font-medium text-slate-400">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Reloc8 logistics network online
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}