import { Star } from "lucide-react";
import { demo } from "../../config/demo";
import Container from "../ui/Container";

export default function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#F97316]">
            TESTIMONIALS
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#0B1F33] sm:text-5xl">
            Trusted by the businesses we serve.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Reliable logistics is about more than moving goods. It is about
            creating an experience customers can depend on.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {demo.testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#F97316]/30 hover:shadow-xl"
            >
              <div className="mb-6 flex">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-[#F97316] text-[#F97316]"
                  />
                ))}
              </div>

              <p className="leading-8 text-slate-600">
                "{testimonial.message}"
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0B1F33] text-lg font-bold text-white">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-bold text-[#0B1F33]">
                    {testimonial.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {testimonial.position}
                  </p>

                  <p className="text-sm font-medium text-[#2563EB]">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}