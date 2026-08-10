import {
  Activity,
  CalendarDays,
  ClipboardList,
  HeartPulse,
  ShieldCheck,
  Users,
} from "lucide-react";
import Container from "../components/ui/Container";

const features = [
  {
    icon: Users,
    title: "Patient Management",
    description:
      "Manage patient profiles, medical records and important information from one place.",
  },
  {
    icon: CalendarDays,
    title: "Appointments",
    description:
      "Schedule, manage and track appointments across doctors and departments.",
  },
  {
    icon: ClipboardList,
    title: "Medical Records",
    description:
      "Keep patient records organized and accessible to authorized staff.",
  },
  {
    icon: Activity,
    title: "Analytics",
    description:
      "Monitor hospital activity, performance and operational insights.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Operations",
    description:
      "Connect everyday hospital processes through one centralized platform.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Access",
    description:
      "Role-based access helps keep sensitive healthcare information protected.",
  },
];

export default function HospitalDemo() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}

      <section className="relative overflow-hidden bg-slate-950 py-32 text-white">

        <div className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <Container>
          <div className="relative grid items-center gap-16 lg:grid-cols-2">

            {/* Text */}

            <div>

              <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
                HEALTHCARE SOLUTION
              </span>

              <h1 className="mt-8 text-5xl font-black leading-[1.05] md:text-7xl">
                Modern technology
                <br />

                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  for modern healthcare.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
                A complete digital platform concept designed to help
                hospitals manage patients, appointments, records and
                everyday operations more efficiently.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <a
                  href="#demo"
                  className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  Explore Platform
                </a>

                <a
                  href="/#contact"
                  className="rounded-2xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10"
                >
                  Discuss a Project
                </a>

              </div>

            </div>

            {/* Dashboard Preview */}

            <div
              id="demo"
              className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur"
            >

              {/* Top bar */}

              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">

                <div>
                  <p className="text-sm text-slate-400">
                    Hospital Dashboard
                  </p>

                  <p className="mt-1 text-xl font-bold">
                    Good morning, Admin
                  </p>
                </div>

                <div className="rounded-full bg-green-400/10 px-3 py-1 text-xs font-semibold text-green-300">
                  System Online
                </div>

              </div>

              {/* Stats */}

              <div className="grid grid-cols-2 gap-4 p-6">

                <div className="rounded-2xl bg-white/10 p-5">
                  <Users className="text-blue-300" />
                  <p className="mt-5 text-3xl font-black">
                    1,248
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Patients
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <CalendarDays className="text-cyan-300" />
                  <p className="mt-5 text-3xl font-black">
                    86
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Appointments
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <HeartPulse className="text-pink-300" />
                  <p className="mt-5 text-3xl font-black">
                    42
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Doctors
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <Activity className="text-green-300" />
                  <p className="mt-5 text-3xl font-black">
                    94%
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Efficiency
                  </p>
                </div>

              </div>

            </div>

          </div>
        </Container>
      </section>

      {/* Features */}

      <section className="bg-slate-50 py-32">

        <Container>

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              PLATFORM FEATURES
            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-900">
              Everything in one place.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              A flexible platform designed around the real operational
              needs of modern healthcare organizations.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {features.map((feature) => {

              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >

                  <div className="inline-flex rounded-2xl bg-blue-50 p-4">
                    <Icon
                      size={30}
                      className="text-blue-600"
                    />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {feature.description}
                  </p>

                </div>
              );

            })}

          </div>

        </Container>
      </section>

      {/* Bottom CTA */}

      <section className="bg-white py-32">

        <Container>

          <div className="rounded-[40px] bg-gradient-to-br from-blue-600 to-cyan-500 px-8 py-20 text-center text-white md:px-16">

            <h2 className="text-4xl font-black md:text-5xl">
              Building something similar?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-50">
              Pycore can customize this concept around your organization's
              workflow, branding and business requirements.
            </p>

            <a
              href="/#contact"
              className="mt-10 inline-flex rounded-2xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:-translate-y-1 hover:shadow-xl"
            >
              Start a Conversation
            </a>

          </div>

        </Container>

      </section>

    </div>
  );
}