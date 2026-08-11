import { MapPin, ArrowUpRight } from "lucide-react";
import { coverage } from "../../demos/logistics/coverage";

export default function Coverage() {
  return (
    <section id="coverage" className="bg-slate-950 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="text-sm font-semibold tracking-[0.2em] text-blue-400">
              {coverage.badge}
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {coverage.title}
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
              {coverage.subtitle}
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
                <MapPin className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-semibold">Based in Lagos</p>
                <p className="text-xs text-slate-500">
                  Serving major destinations
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {coverage.locations.map((location, index) => (
              <div
                key={location}
                className="group flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-5 transition duration-300 hover:border-blue-500 hover:bg-slate-800"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-slate-600">
                    0{index + 1}
                  </span>

                  <div>
                    <p className="font-semibold text-white">{location}</p>
                    <p className="mt-1 text-xs text-slate-500">
                      Logistics coverage
                    </p>
                  </div>
                </div>

                <ArrowUpRight className="h-5 w-5 text-slate-600 transition group-hover:text-blue-400" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}