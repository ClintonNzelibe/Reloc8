// import { ArrowUpRight } from "lucide-react";
// import Container from "../ui/Container";

// export default function Footer() {
//   return (
//     <footer className="bg-slate-950 text-white">
//       <Container>
//         <div className="border-b border-white/10 py-20">

//           <div className="max-w-3xl">

//             <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
//               PYCORE TECHNOLOGIES
//             </span>

//             <h2 className="mt-8 text-5xl font-black leading-tight">
//               Building digital products
//               <br />
//               that businesses love.
//             </h2>

//             <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
//               We design and develop modern websites,
//               business software, dashboards and mobile
//               applications that help ambitious businesses
//               grow faster.
//             </p>

//           </div>

//         </div>

//         <div className="grid gap-16 py-16 md:grid-cols-3">

//           {/* Navigation */}

//           <div>

//             <h3 className="mb-6 text-lg font-semibold">
//               Navigation
//             </h3>

//             <ul className="space-y-4 text-slate-400">

//               <li>
//                 <a href="/">Home</a>
//               </li>

//               <li>
//                 <a href="/solutions">Solutions</a>
//               </li>

//               <li>
//                 <a href="#contact">Contact</a>
//               </li>

//             </ul>

//           </div>

//           {/* Contact */}

//           <div>

//             <h3 className="mb-6 text-lg font-semibold">
//               Contact
//             </h3>

//             <ul className="space-y-4 text-slate-400">

//               <li>Lagos, Nigeria</li>

//               <li>hello@pycore.dev</li>

//               <li>+234 XXX XXX XXXX</li>

//             </ul>

//           </div>

//           {/* CTA */}

//           <div>

//             <h3 className="mb-6 text-lg font-semibold">
//               Have a project?
//             </h3>

//             <a
//               href="#contact"
//               className="inline-flex items-center gap-2 text-blue-400 transition hover:gap-3"
//             >
//               Let's talk

//               <ArrowUpRight size={18} />

//             </a>

//           </div>

//         </div>

//         <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-slate-500 md:flex-row">

//           <p>
//             © 2026 Pycore Technologies. All rights reserved.
//           </p>

//           <p>
//             Designed & Developed by Pycore.
//           </p>

//         </div>

//       </Container>
//     </footer>
//   );
// }

import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Container from "../ui/Container";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Doctors", href: "/#doctors" },
  { label: "Contact", href: "/#contact" },
];

const services = [
  "Emergency Care",
  "Specialist Care",
  "Diagnostics",
  "Laboratory Services",
  "Pharmacy",
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <Container>
        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">

          {/* Hospital */}

          <div>
            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
                <span className="text-xl font-black">
                  +
                </span>
              </div>

              <span className="text-2xl font-black tracking-tight">
                CAREPOINT
              </span>

            </div>

            <p className="mt-6 max-w-sm leading-7 text-slate-400">
              Compassionate, professional healthcare supported by
              experienced medical teams and modern facilities.
            </p>

            {/* Social Links */}

            <div className="mt-6 flex gap-3">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-sm font-bold text-slate-400 transition hover:bg-blue-600 hover:text-white"
              >
                f
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-xs font-bold text-slate-400 transition hover:bg-blue-600 hover:text-white"
              >
                IG
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-sm font-bold text-slate-400 transition hover:bg-blue-600 hover:text-white"
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
                    className="text-sm text-slate-400 transition hover:text-white"
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
                  className="mt-1 shrink-0 text-blue-400"
                />

                <span className="text-sm leading-6 text-slate-400">
                  Victoria Island,
                  <br />
                  Lagos, Nigeria
                </span>

              </div>

              <div className="flex items-center gap-3">

                <Phone
                  size={20}
                  className="shrink-0 text-blue-400"
                />

                <span className="text-sm text-slate-400">
                  +234 800 000 0000
                </span>

              </div>

              <div className="flex items-center gap-3">

                <Mail
                  size={20}
                  className="shrink-0 text-blue-400"
                />

                <span className="text-sm text-slate-400">
                  info@carepointhospital.com
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} CarePoint Hospital.
            All rights reserved.
          </p>

          <div className="flex gap-6">

            <a
              href="#"
              className="transition hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Terms of Service
            </a>

          </div>

        </div>

      </Container>

    </footer>
  );
}