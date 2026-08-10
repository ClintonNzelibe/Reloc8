import Container from "../ui/Container";
import {
  BriefcaseBusiness,
  Users,
  Trophy,
  Globe,
} from "lucide-react";

const stats = [
  {
    value: "100+",
    label: "Projects Delivered",
    icon: BriefcaseBusiness,
  },
  {
    value: "50+",
    label: "Happy Clients",
    icon: Users,
  },
  {
    value: "10+",
    label: "Industries",
    icon: Globe,
  },
  {
    value: "99%",
    label: "Client Satisfaction",
    icon: Trophy,
  },
];

export default function Stats() {
  return (
    <section className="bg-slate-900 py-24 text-white">
      <Container>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((stat) => {

            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:-translate-y-2 hover:bg-white/10"
              >
                <Icon className="mb-6 text-blue-400" size={36} />

                <h3 className="text-5xl font-black">
                  {stat.value}
                </h3>

                <p className="mt-3 text-slate-300">
                  {stat.label}
                </p>
              </div>
            );

          })}

        </div>

      </Container>
    </section>
  );
}