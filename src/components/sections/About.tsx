import {
  PackageCheck,
  ShieldCheck,
  Clock3,
  MapPinned,
} from "lucide-react";

import Container from "../ui/Container";
import aboutImage from "../../assets/logistics/about.png";

const highlights = [
  {
    icon: PackageCheck,
    title: "Reliable Delivery",
    description:
      "We handle every shipment with care, from pickup through final delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    description:
      "Your goods are handled responsibly with security and reliability at every stage.",
  },
  {
    icon: Clock3,
    title: "On-Time Service",
    description:
      "Efficient planning and dependable transportation keep your deliveries moving.",
  },
  {
    icon: MapPinned,
    title: "Wide Coverage",
    description:
      "Connecting businesses and customers across Lagos, Ibadan and destinations beyond.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -bottom-6 -left-6 h-40 w-40 rounded-full bg-orange-200/40 blur-3xl" />

            <div className="relative overflow-hidden rounded-[36px] border border-white bg-white p-3 shadow-2xl">
              <img
                src={aboutImage}
                alt="Reloc8 logistics warehouse operations"
                className="h-[380px] w-full rounded-[28px] object-cover object-center sm:h-[460px] lg:h-[560px]"
              />

              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 rounded-2xl border border-white/60 bg-white/90 p-5 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
                    <PackageCheck
                      size={24}
                      className="text-[#F97316]"
                    />
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">
                      Moving What Matters
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      From pickup to delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#F97316]">
              ABOUT RELOC8
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
              Logistics built around
              <span className="text-[#F97316]"> reliability.</span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Reloc8 provides dependable logistics and transportation
              solutions designed to make moving goods simpler, safer and more
              efficient.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              From household relocations and last-mile deliveries to business
              shipments and freight transportation, we connect people,
              businesses and destinations with confidence.
            </p>

            {/* Highlights */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F97316]/30 hover:shadow-lg"
                  >
                    <div className="inline-flex rounded-xl bg-blue-50 p-3">
                      <Icon
                        size={24}
                        className="text-[#2563EB]"
                      />
                    </div>

                    <h3 className="mt-4 font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}