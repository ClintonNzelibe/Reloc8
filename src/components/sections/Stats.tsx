import Container from "../ui/Container";
import {
  Truck,
  Users,
  Globe,
  Trophy,
} from "lucide-react";
import { demo } from "../../config/demo";

const icons = [
  Truck,
  Users,
  Globe,
  Trophy,
];

export default function Stats() {
  return (
    <section className="bg-[#071521] py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {demo.site.stats.map((stat, index) => {
            const Icon = icons[index] || Trophy;

            return (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-white/10"
              >
                <Icon
                  className="mb-6 text-[#F97316]"
                  size={36}
                />

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