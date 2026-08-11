import Container from "../ui/Container";
import { ArrowUpRight, Truck, Home, PackageCheck } from "lucide-react";

import service1 from "../../assets/logistics/service-1.png";
import service2 from "../../assets/logistics/service-2.png";
import service3 from "../../assets/logistics/service-3.png";

const solutions = [
  {
    title: "Freight & Cargo",
    category: "BUSINESS LOGISTICS",
    description:
      "Reliable transportation for commercial cargo and freight, with careful handling from pickup to destination.",
    image: service1,
    icon: Truck,
  },
  {
    title: "House Moving",
    category: "RELOCATION",
    description:
      "Professional home moving services with careful packing, secure transportation and dependable delivery.",
    image: service2,
    icon: Home,
  },
  {
    title: "Last-Mile Delivery",
    category: "DELIVERY",
    description:
      "Fast and dependable delivery solutions designed to get packages safely to their final destination.",
    image: service3,
    icon: PackageCheck,
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#F97316]">
            OUR SOLUTIONS
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#0B1F33] sm:text-5xl">
            Moving possibilities forward.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From household relocations to commercial freight and last-mile
            deliveries, Reloc8 provides logistics solutions built around
            reliability.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <div
                key={solution.title}
                className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#F97316]/40 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="h-64 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold uppercase tracking-wider text-[#F97316]">
                      {solution.category}
                    </p>

                    <div className="rounded-xl bg-[#0B1F33] p-3">
                      <Icon size={20} className="text-[#F97316]" />
                    </div>
                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-[#0B1F33]">
                    {solution.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {solution.description}
                  </p>

                  <button
                    type="button"
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-[#2563EB] transition-all group-hover:gap-3"
                  >
                    Learn More
                    <ArrowUpRight
                      size={18}
                      className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}