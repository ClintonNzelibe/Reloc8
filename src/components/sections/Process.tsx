import {
  ClipboardList,
  Route,
  PackageOpen,
  MapPinned,
  PackageCheck,
} from "lucide-react";

import { demo } from "../../config/demo";
import Container from "../ui/Container";

const icons = [
  ClipboardList,
  Route,
  PackageOpen,
  MapPinned,
  PackageCheck,
];

export default function Process() {
  return (
    <section className="bg-[#F8FAFC] py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#F97316]">
            {demo.process.badge}
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#0B1F33] sm:text-5xl">
            {demo.process.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {demo.process.subtitle}
          </p>
        </div>

        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {demo.process.steps.map((step, index) => {
            const Icon = icons[index] || ClipboardList;

            return (
              <div key={step.title} className="relative text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#0B1F33] text-[#F97316] shadow-lg transition duration-300 hover:bg-[#F97316] hover:text-white">
                  <Icon size={34} />
                </div>

                <div className="mt-8">
                  <div className="mb-4 font-bold text-[#F97316]">
                    0{index + 1}
                  </div>

                  <h3 className="text-2xl font-bold text-[#0B1F33]">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}