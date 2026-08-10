import { ArrowUpRight } from "lucide-react";
import Container from "../components/ui/Container";

const solutions = [
  {
    title: "Hospital Management System",
    category: "Healthcare",
    description:
      "A modern digital platform for managing patients, appointments, billing and healthcare operations.",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    title: "Luxury Hotel Platform",
    category: "Hospitality",
    description:
      "A premium booking and guest management experience built for modern hotels.",
    gradient: "from-violet-600 to-purple-500",
  },
  {
    title: "Restaurant Ordering Platform",
    category: "Restaurant",
    description:
      "Digital menus, online ordering, payments and restaurant operations in one platform.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "School Management System",
    category: "Education",
    description:
      "Student records, teachers, attendance, results and parent communication.",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    title: "Real Estate Platform",
    category: "Real Estate",
    description:
      "Property listings, enquiries, agents and property management for real estate businesses.",
    gradient: "from-slate-700 to-slate-950",
  },
  {
    title: "Logistics Management System",
    category: "Logistics",
    description:
      "Fleet, drivers, deliveries, tracking and business reporting in one dashboard.",
    gradient: "from-indigo-600 to-blue-600",
  },
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}

      <section className="relative overflow-hidden bg-slate-50 py-32">
        <div className="absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[120px]" />

        <Container>
          <div className="relative mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              DIGITAL SOLUTIONS
            </span>

            <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-slate-900 md:text-7xl">
              Digital products
              <br />

              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                built for business.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Explore digital solutions designed for different industries.
              Each concept demonstrates what Pycore can design and build
              for your business.
            </p>

          </div>
        </Container>
      </section>

      {/* Solutions */}

      <section className="py-32">
        <Container>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* Preview */}

                <div
                  className={`relative h-64 overflow-hidden bg-gradient-to-br ${solution.gradient}`}
                >

                  <div className="absolute inset-0 bg-black/10" />

                  <div className="absolute bottom-6 left-6">
                    <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                      {solution.category}
                    </span>
                  </div>

                </div>

                {/* Content */}

                <div className="p-8">

                  <h2 className="text-2xl font-bold text-slate-900">
                    {solution.title}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    {solution.description}
                  </p>

                  <a
  href="/solutions/hospital"
  className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 group-hover:gap-3"
>
  View Demo
  <ArrowUpRight size={18} />
</a>

                </div>

              </div>
            ))}

          </div>

        </Container>
      </section>

      {/* CTA */}

      <section className="bg-slate-950 py-28 text-white">
        <Container>

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-blue-300">
              HAVE AN IDEA?
            </span>

            <h2 className="mt-8 text-4xl font-black md:text-6xl">
              Let's build your next digital product.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Tell us what you're building and we'll help turn your idea
              into a professional digital experience.
            </p>

            <a
              href="/#contact"
              className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Start a Project
              <ArrowUpRight size={18} />
            </a>

          </div>

        </Container>
      </section>

    </div>
  );
}