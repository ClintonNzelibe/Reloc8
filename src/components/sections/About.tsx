import {
  Award,
  HeartHandshake,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import Container from "../ui/Container";
import aboutImage from "../../assets/about-hospital.png";

const highlights = [
  {
    icon: Stethoscope,
    title: "Experienced Specialists",
    description:
      "Our medical teams bring expertise across multiple specialties.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-Centered Care",
    description:
      "Every decision is guided by the needs, comfort and wellbeing of our patients.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Trusted",
    description:
      "We maintain high standards of safety, professionalism and patient care.",
  },
  {
    icon: Award,
    title: "Quality Healthcare",
    description:
      "Modern facilities and reliable medical services designed around better outcomes.",
  },
];

export default function About() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-32">
      <Container>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Image */}

          <div className="relative order-2 lg:order-1">

            <div className="absolute -bottom-6 -left-6 h-40 w-40 rounded-full bg-blue-200/40 blur-3xl" />

            <div className="relative overflow-hidden rounded-[36px] border border-white bg-white p-3 shadow-2xl">

              <img
                src={aboutImage}
                alt="African healthcare professional caring for a patient"
                className="h-[380px] w-full rounded-[28px] object-cover object-center sm:h-[460px] lg:h-[560px]"
              />

              {/* Floating Card */}

              <div className="absolute bottom-8 left-8 rounded-2xl border border-white/60 bg-white/90 p-5 shadow-xl backdrop-blur-md">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                    <HeartHandshake
                      size={24}
                      className="text-blue-600"
                    />
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">
                      Compassionate Care
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Putting patients first.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Content */}

          <div className="order-1 lg:order-2">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              ABOUT CAREPOINT
            </span>

            <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900">
              Healthcare with
              <span className="text-blue-600"> compassion.</span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              CarePoint Hospital is committed to providing accessible,
              professional and patient-focused healthcare through
              experienced medical professionals and modern facilities.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              From routine consultations to specialist treatment and
              emergency care, our goal is to make every patient's
              healthcare journey safer, simpler and more comfortable.
            </p>

            {/* Highlights */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >

                    <div className="inline-flex rounded-xl bg-blue-50 p-3">
                      <Icon
                        size={24}
                        className="text-blue-600"
                      />
                    </div>

                    <h3 className="mt-4 font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}