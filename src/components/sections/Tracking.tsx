import { useState } from "react";
import {
  CheckCircle2,
  Circle,
  MapPin,
  Package,
  Search,
  Truck,
} from "lucide-react";

import { tracking } from "../../demos/logistics/tracking";

const stepIcons = [Package, Truck, MapPin, Truck, CheckCircle2];

export default function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleTrack = () => {
    if (!trackingNumber.trim()) {
      setTrackingNumber(tracking.demoTrackingNumber);
    }
  };

  return (
    <section
      id="tracking"
      className="bg-[#071521] py-20 text-white sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-[#F97316]/10 px-4 py-2 text-sm font-semibold text-[#F97316]">
            {tracking.badge}
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
            {tracking.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            {tracking.subtitle}
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mt-10 max-w-2xl">
          <div className="flex flex-col gap-3 rounded-2xl bg-white p-3 shadow-2xl sm:flex-row">
            <div className="flex flex-1 items-center gap-3 px-3">
              <Search className="h-5 w-5 shrink-0 text-slate-400" />

              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder={tracking.placeholder}
                className="w-full bg-transparent py-3 text-sm text-[#0B1F33] outline-none placeholder:text-slate-400 sm:text-base"
              />
            </div>

            <button
              type="button"
              onClick={handleTrack}
              className="rounded-xl bg-[#F97316] px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              {tracking.button}
            </button>
          </div>

          <p className="mt-3 text-center text-xs text-slate-500">
            Demo tracking number: {tracking.demoTrackingNumber}
          </p>
        </div>

        {/* Tracking Result */}
        {trackingNumber && (
          <div className="mx-auto mt-14 max-w-4xl rounded-3xl bg-white p-6 text-slate-900 shadow-2xl sm:p-8">
            <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Tracking Number
                </p>

                <p className="mt-1 text-lg font-bold text-[#0B1F33]">
                  {trackingNumber}
                </p>
              </div>

              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-[#F97316]">
                <span className="h-2 w-2 rounded-full bg-[#F97316]" />
                In Transit
              </span>
            </div>

            {/* Timeline */}
            <div className="mt-8">
              {tracking.steps.map((step, index) => {
                const Icon = stepIcons[index] || Circle;
                const isCompleted = step.status === "completed";
                const isCurrent = step.status === "current";
                const isLast = index === tracking.steps.length - 1;

                return (
                  <div
                    key={step.title}
                    className="relative flex gap-4"
                  >
                    {!isLast && (
                      <div
                        className={`absolute left-[15px] top-8 h-[calc(100%-8px)] w-px ${
                          isCompleted
                            ? "bg-[#F97316]"
                            : "bg-slate-200"
                        }`}
                      />
                    )}

                    <div
                      className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        isCompleted
                          ? "bg-[#F97316] text-white"
                          : isCurrent
                            ? "bg-orange-100 text-[#F97316] ring-4 ring-orange-50"
                            : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>

                    <div className={`pb-8 ${isLast ? "pb-0" : ""}`}>
                      <h3
                        className={`font-semibold ${
                          isCurrent
                            ? "text-[#F97316]"
                            : "text-slate-900"
                        }`}
                      >
                        {step.title}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}