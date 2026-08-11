import {
  ShieldCheck,
  Zap,
  MapPinned,
  Headphones,
  CheckCircle2,
} from "lucide-react";

import Container from "../ui/Container";
import { demo } from "../../config/demo";

const iconMap = {
  ShieldCheck,
  Zap,
  MapPinned,
  Headphones,
};

export default function WhyChooseUs() {
  const { whyChooseUs } = demo;

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#F97316]">
              {whyChooseUs.badge}
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-[#0B1F33] sm:text-5xl">
              {whyChooseUs.title}
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              {whyChooseUs.subtitle}
            </p>

            <div className="mt-10 space-y-5">
              {whyChooseUs.features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="mt-1 shrink-0 text-[#F97316]" />

                  <span className="font-medium text-slate-700">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="grid gap-6 sm:grid-cols-2">
            {whyChooseUs.features.map((feature) => {
              const Icon =
                iconMap[feature.icon as keyof typeof iconMap] ||
                ShieldCheck;

              return (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#F97316]/30 hover:shadow-xl"
                >
                  <div className="mb-6 inline-flex rounded-2xl bg-[#0B1F33] p-4">
                    <Icon
                      className="text-[#F97316]"
                      size={30}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-[#0B1F33]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}