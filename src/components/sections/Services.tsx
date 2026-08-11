import {
  Globe,
  Smartphone,
  MonitorSmartphone,
  Palette,
  Database,
  ArrowRight,
  Truck,
  Package,
  Warehouse,
  MapPinned,
  Home,
  Boxes,
} from "lucide-react";

import { demo } from "../../config/demo";
import Container from "../ui/Container";

const icons = {
  Globe,
  Smartphone,
  MonitorSmartphone,
  Palette,
  Database,
  ArrowRight,
  Truck,
  Package,
  Warehouse,
  MapPinned,
  Home,
  Boxes,
};

export default function Services() {
  return (
    <section id="services" className="bg-[#F8FAFC] py-20 sm:py-24">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#F97316]">
            {demo.servicesSection.badge}
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-[#0B1F33] sm:text-5xl">
            {demo.servicesSection.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {demo.servicesSection.subtitle}
          </p>
        </div>

        {/* Services */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {demo.services.map((service, index) => {
            const Icon =
              icons[service.icon as keyof typeof icons] || Truck;

            return (
              <div
                key={service.title}
                className="group rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#F97316]/40 hover:shadow-2xl"
              >
                {/* Icon */}
                <div
                  className={`mb-8 inline-flex rounded-2xl p-5 ${
                    index % 2 === 0
                      ? "bg-[#0B1F33]"
                      : "bg-[#F97316]"
                  }`}
                >
                  <Icon size={32} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold text-[#0B1F33]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {service.description}
                </p>

                <button
                  type="button"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-[#2563EB] transition-all duration-300 group-hover:gap-3"
                >
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}