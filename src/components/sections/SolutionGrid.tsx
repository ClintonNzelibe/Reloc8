import Container from "../ui/Container";
import { ArrowUpRight } from "lucide-react";

const solutions = [
  {
    title: "Hospital Management System",
    industry: "Healthcare",
    description:
      "Appointments, patient records, billing, pharmacy and reporting.",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    title: "Luxury Hotel Website",
    industry: "Hospitality",
    description:
      "Online booking, rooms, reservations and customer management.",
    gradient: "from-purple-600 to-pink-500",
  },
  {
    title: "Restaurant Ordering Platform",
    industry: "Restaurant",
    description:
      "Digital menus, online ordering, delivery and payments.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "School Management System",
    industry: "Education",
    description:
      "Students, teachers, results, attendance and parent portal.",
    gradient: "from-green-600 to-emerald-500",
  },
  {
    title: "Real Estate Platform",
    industry: "Real Estate",
    description:
      "Property listings, agents, enquiries and virtual tours.",
    gradient: "from-slate-700 to-slate-900",
  },
  {
    title: "Logistics Dashboard",
    industry: "Logistics",
    description:
      "Fleet tracking, deliveries, drivers and reporting.",
    gradient: "from-indigo-600 to-blue-500",
  },
];

export default function SolutionGrid() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div
                className={`flex h-56 items-end bg-gradient-to-br ${solution.gradient} p-8`}
              >
                <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                  {solution.industry}
                </span>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900">
                  {solution.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {solution.description}
                </p>

                <button className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition group-hover:gap-3">
                  View Concept

                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}