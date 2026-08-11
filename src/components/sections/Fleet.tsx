import {
  Truck,
  Warehouse,
  Package,
} from "lucide-react";

import { fleet } from "../../demos/logistics/fleet";

const icons = [Truck, Warehouse, Package];

export default function Fleet() {
  return (
    <section
      id="fleet"
      className="bg-[#F8FAFC] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#F97316]">
            {fleet.badge}
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-[#0B1F33] sm:text-5xl">
            {fleet.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {fleet.subtitle}
          </p>
        </div>

        {/* Fleet */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {fleet.vehicles.map((vehicle, index) => {
            const Icon = icons[index] || Truck;

            return (
              <div
                key={vehicle.title}
                className="group rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#F97316]/40 hover:shadow-2xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B1F33] text-[#F97316] transition group-hover:bg-[#F97316] group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-7 text-xl font-bold text-[#0B1F33]">
                  {vehicle.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {vehicle.description}
                </p>

                <div className="mt-6 h-1 w-10 rounded-full bg-[#F97316] transition-all duration-300 group-hover:w-16" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}