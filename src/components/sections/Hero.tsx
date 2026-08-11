import {
  ArrowRight,
  MapPin,
  PackageCheck,
  Truck,
  Navigation,
} from "lucide-react";

import Container from "../ui/Container";
import { demo } from "../../config/demo";
import heroImage from "../../assets/logistics/hero.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#071521] text-white"
    >
      {/* Background details */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#2563EB]/10 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#F97316]/10 blur-3xl" />

      <div className="absolute right-[35%] top-0 hidden h-full w-px bg-white/[0.04] lg:block" />

      <Container>
        <div className="relative grid min-h-[calc(100vh-80px)] items-center gap-2 py-12 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:py-20">

          {/* LEFT */}
          <div className="relative z-10">

            {/* Eyebrow */}
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 backdrop-blur-sm">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#F97316] shadow-[0_0_12px_#F97316]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                {demo.hero.badge}
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-7xl xl:text-[5.4rem]">
              Moving what
              <span className="block text-white">
                matters
                <span className="text-[#F97316]">.</span>
              </span>

              <span className="mt-2 block text-slate-400">
                Wherever it needs to go.
              </span>
            </h1>

            {/* Orange divider */}
            <div className="mt-8 h-1.5 w-20 rounded-full bg-[#F97316]" />

            {/* Description */}
            <p className="mt-8 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              {demo.hero.subtitle}
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F97316] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:shadow-xl"
              >
                <PackageCheck size={19} />
                {demo.hero.primaryButton}
              </a>

              <a
                href="/#tracking"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
              >
                Track Shipment
                <ArrowRight size={18} />
              </a>

            </div>

            {/* Mini trust row */}
            <div className="mt-12 grid max-w-xl grid-cols-3 border-t border-white/10 pt-7">

              <div className="border-r border-white/10 pr-4">
                <p className="text-2xl font-black sm:text-3xl">
                  10K+
                </p>

                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Deliveries
                </p>
              </div>

              <div className="border-r border-white/10 px-4">
                <p className="text-2xl font-black sm:text-3xl">
                  25+
                </p>

                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Routes Covered
                </p>
              </div>

              <div className="pl-4">
                <p className="text-2xl font-black sm:text-3xl">
                  98%
                </p>

                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  On-Time
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative z-10">

            {/* Main image */}
            <div className="relative mx-auto max-w-2xl">

              {/* Orange glow */}
              <div className="absolute -inset-6 rounded-[50px] bg-[#F97316]/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#0B1F33] p-2 shadow-2xl">

                <div className="relative overflow-hidden rounded-[34px]">

                  <img
                    src={heroImage}
                    alt="Reloc8 logistics truck transporting goods"
                    className="h-[460px] w-full object-cover object-center sm:h-[560px] lg:h-[620px]"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071521]/80 via-transparent to-transparent" />

                  {/* Top label */}
                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-[#071521]/70 px-4 py-2.5 backdrop-blur-md">
                    <Truck
                      size={16}
                      className="text-[#F97316]"
                    />

                    <span className="text-xs font-semibold text-white">
                      RELOC8 FLEET
                    </span>
                  </div>

                  {/* Bottom image label */}
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-[#071521]/85 p-5 backdrop-blur-md">

                    <div className="flex items-center justify-between gap-4">

                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                          Current route
                        </p>

                        <p className="mt-1 text-lg font-bold">
                          Lagos → Ibadan
                        </p>
                      </div>

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F97316]">
                        <Navigation
                          size={20}
                          className="text-white"
                        />
                      </div>

                    </div>

                  </div>

                </div>
              </div>

              {/* Route Card */}
              <div className="absolute -left-5 top-20 hidden w-52 rounded-2xl border border-slate-200/10 bg-white p-4 text-[#0B1F33] shadow-2xl sm:block lg:-left-12">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100">
                    <MapPin
                      size={19}
                      className="text-[#F97316]"
                    />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Route
                    </p>

                    <p className="mt-1 text-sm font-bold">
                      Lagos — Ibadan
                    </p>
                  </div>

                </div>

                <div className="mt-4 flex items-center gap-2">
                  <div className="h-1.5 flex-1 rounded-full bg-[#F97316]" />
                  <div className="h-1.5 w-10 rounded-full bg-slate-200" />
                </div>

                <p className="mt-2 text-xs text-slate-500">
                  Active delivery route
                </p>

              </div>

              {/* Status Card */}
              <div className="absolute -bottom-6 -right-4 hidden w-60 rounded-2xl border border-slate-200/10 bg-white p-4 text-[#0B1F33] shadow-2xl sm:block lg:-right-10">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100">
                    <Truck
                      size={19}
                      className="text-green-600"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-green-500" />

                      <p className="text-xs font-bold text-green-600">
                        IN TRANSIT
                      </p>
                    </div>

                    <p className="mt-1 text-sm font-bold">
                      Shipment moving
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}