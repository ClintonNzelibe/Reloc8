import {
  Mail,
  MapPin,
  Phone,
  Send,
  Clock3,
  Truck,
} from "lucide-react";

import Button from "../ui/Button";
import Container from "../ui/Container";
import { demo } from "../../config/demo";

export default function Contact() {
  const { contact } = demo;

  return (
    <section id="contact" className="bg-[#F8FAFC] py-20 sm:py-24">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#F97316]">
            {contact.badge}
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#0B1F33] sm:text-5xl">
            {contact.title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {contact.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Left */}
          <div className="rounded-[32px] bg-[#071521] p-8 text-white sm:p-10">
            <h3 className="text-3xl font-bold">
              Let's get your shipment moving.
            </h3>

            <p className="mt-5 leading-8 text-slate-300">
              Tell us what you need transported, delivered or relocated and
              our team will help you find the right logistics solution.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-[#F97316]" />
                <span>{contact.email}</span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-[#F97316]" />
                <span>{contact.phone}</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-[#F97316]" />
                <span>{contact.location}</span>
              </div>

              <div className="flex items-center gap-4">
                <Clock3 className="text-[#F97316]" />
                <span>Logistics support available 24/7</span>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-white/5 p-6">
              <h4 className="font-semibold">Why ship with Reloc8?</h4>

              <ul className="mt-5 space-y-3 text-slate-300">
                <li>✓ Reliable transportation</li>
                <li>✓ Secure shipment handling</li>
                <li>✓ Shipment visibility</li>
                <li>✓ Dedicated customer support</li>
              </ul>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-[32px] bg-white p-8 shadow-lg sm:p-10">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-[#F97316]">
                <Truck size={22} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#0B1F33]">
                  Request a Quote
                </h3>

                <p className="text-sm text-slate-500">
                  Tell us about your shipment.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <input
                type="text"
                placeholder="Full Name"
                className="rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#F97316]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#F97316]"
              />
            </div>

            <input
              type="tel"
              placeholder="Phone Number"
              className="mt-5 w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#F97316]"
            />

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <input
                type="text"
                placeholder="Pickup Location"
                className="rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#F97316]"
              />

              <input
                type="text"
                placeholder="Delivery Location"
                className="rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#F97316]"
              />
            </div>

            <select
              defaultValue=""
              className="mt-5 w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-600 outline-none transition focus:border-[#F97316]"
            >
              <option value="" disabled>
                Select Shipment Type
              </option>
              <option>Package Delivery</option>
              <option>Freight</option>
              <option>Business Shipment</option>
              <option>Relocation</option>
              <option>Import / Export</option>
            </select>

            <textarea
              rows={4}
              placeholder="Tell us about your shipment..."
              className="mt-5 w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#F97316]"
            />

            <div className="mt-7">
              <Button className="w-full justify-center">
                {contact.form.button}

                <Send size={18} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}