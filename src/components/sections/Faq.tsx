import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { demo } from "../../config/demo";
import Container from "../ui/Container";

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="bg-[#F8FAFC] py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#F97316]">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#0B1F33] sm:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Find answers to common questions about Reloc8 logistics and
            delivery services.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl space-y-5">
          {demo.faq.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-semibold text-[#0B1F33]">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`shrink-0 transition-transform duration-300 ${
                    active === index
                      ? "rotate-180 text-[#F97316]"
                      : "text-[#2563EB]"
                  }`}
                />
              </button>

              {active === index && (
                <div className="px-6 pb-6 leading-7 text-slate-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}