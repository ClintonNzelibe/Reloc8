import {
  Mail,
  MapPin,
  Phone,
  Truck,
} from "lucide-react";

import Container from "../ui/Container";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Fleet", href: "/#fleet" },
  { label: "Tracking", href: "/#tracking" },
  { label: "Contact", href: "/#contact" },
];

const services = [
  "Freight & Cargo",
  "House Moving",
  "Last-Mile Delivery",
  "Business Logistics",
  "Import / Export",
];

export default function Footer() {
  return (
    <footer className="bg-[#071521] text-white">
      <Container>
        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">

          {/* Reloc8 */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F97316]">
                <Truck size={21} />
              </div>

              <span className="text-2xl font-black tracking-tight">
                Reloc<span className="text-[#F97316]">8</span>
              </span>
            </div>

            <p className="mt-6 max-w-sm leading-7 text-slate-400">
              Reliable logistics solutions for moving goods, businesses
              and homes safely across Nigeria.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-sm font-bold text-slate-400 transition hover:bg-[#F97316] hover:text-white"
              >
                f
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-xs font-bold text-slate-400 transition hover:bg-[#F97316] hover:text-white"
              >
                IG
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-sm font-bold text-slate-400 transition hover:bg-[#F97316] hover:text-white"
              >
                in
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-[#F97316]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white">
              Our Services
            </h3>

            <ul className="mt-6 space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm text-slate-400"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white">
              Contact Us
            </h3>

            <div className="mt-6 space-y-5">
              <div className="flex gap-3">
                <MapPin
                  size={20}
                  className="mt-1 shrink-0 text-[#F97316]"
                />

                <span className="text-sm leading-6 text-slate-400">
                  Lagos-Ibadan Expressway,
                  <br />
                  Lagos, Nigeria
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={20}
                  className="shrink-0 text-[#F97316]"
                />

                <span className="text-sm text-slate-400">
                  +234 800 000 0000
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={20}
                  className="shrink-0 text-[#F97316]"
                />

                <span className="text-sm text-slate-400">
                  info@reloc8.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Reloc8. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}